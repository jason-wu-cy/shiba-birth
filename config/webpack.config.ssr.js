const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const alias = require('./alias');
const paths = require('./paths');
const modules = require('./modules');
const getClientEnvironment = require('./env');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const postcssNormalize = require('postcss-normalize');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false';
const imageInlineSizeLimit = parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT || '10000');
const useTypeScript = fs.existsSync(paths.appTsConfig);
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassModuleRegex = /\.(scss|sass)$/;

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  const isEnvProductionProfile = isEnvProduction && process.argv.includes('--profile');
  const publicPath = isEnvProduction ? paths.servedPath : isEnvDevelopment && '/';
  const shouldUseRelativeAssetPaths = publicPath === './';
  const publicUrl = isEnvProduction ? publicPath.slice(0, -1) : isEnvDevelopment && '';
  const env = getClientEnvironment(publicUrl);
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: shouldUseRelativeAssetPaths ? { publicPath: '../../' } : {},
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            postcssNormalize(),
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true,
          },
        },
      );
    }
    return loaders;
  };
  console.log('-----------------');
  console.log('SSR Build Time APP_ENV ::: ', process.env.APP_ENV);
  console.log('SSR Build Time NODE_ENV ::: ', process.env.NODE_ENV);
  console.log('-----------------');
  return {
    mode: 'production',
    // Stop compilation early in production
    bail: true,
    devtool: 'cheap-module-source-map',
    target: 'node',
    entry: {
      main: paths.ssrRenderPath,
    },
    output: {
      path: paths.ssrBuildPath,
      filename: '[name].js',
      libraryExport: 'default',
      libraryTarget: 'commonjs2',
      publicPath: process.env.LOAD_PUBLIC_URL || ''
    },
    resolve: {
      modules: ['node_modules', paths.appNodeModules].concat(modules.additionalModulePaths || []),
      extensions: paths.moduleFileExtensions.map(ext => `.${ext}`).filter(ext => useTypeScript || !ext.includes('ts')),
      alias: {
        'react-native': 'react-native-web',
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
        ...alias,
      },
      plugins: [PnpWebpackPlugin, new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson, paths.appChangeLog])],
    },
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                cache: true,
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint'),
                resolvePluginsRelativeTo: __dirname,
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          include: paths.appSrc,
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: imageInlineSizeLimit,
                name: 'static/media/[name].[hash:8].[ext]',
                fallback: require.resolve('file-loader'),
              },
            },
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                  'lodash',
                ],
                cacheDirectory: true,
                cacheCompression: false,
                compact: isEnvProduction,
              },
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
                cacheDirectory: true,
                cacheCompression: false,
                sourceMaps: shouldUseSourceMap,
                inputSourceMap: shouldUseSourceMap,
              },
            },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
              }),
              sideEffects: true,
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              }),
            },
            {
              test: sassModuleRegex,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'sass-loader',
                },
              ],
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined,
        ),
      ),
      isEnvProduction && shouldInlineRuntimeChunk && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
      new ModuleNotFoundPlugin(paths.appPath),
      new webpack.DefinePlugin(env.stringified),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvDevelopment && new CaseSensitivePathsPlugin(),
      isEnvDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: publicPath,
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.main.filter(fileName => !fileName.endsWith('.map'));
          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        },
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-tw/),
      isEnvProduction &&
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          exclude: [/\.map$/, /asset-manifest\.json$/],
          navigateFallback: publicUrl + '/index.html',
          navigateFallbackDenylist: [new RegExp('^/_'), new RegExp('/[^/?]+\\.[^/]+$')],
        }),
      isEnvProduction && new LodashModuleReplacementPlugin(),
      useTypeScript &&
        new ForkTsCheckerWebpackPlugin({
          typescript: resolve.sync('typescript', {
            basedir: paths.appNodeModules,
          }),
          async: isEnvDevelopment,
          useTypescriptIncrementalApi: true,
          checkSyntacticErrors: true,
          resolveModuleNameModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
          resolveTypeReferenceDirectiveModule: process.versions.pnp ? `${__dirname}/pnpTs.js` : undefined,
          tsconfig: paths.appTsConfig,
          reportFiles: [
            '**',
            '!**/__tests__/**',
            '!**/?(*.)(spec|test).*',
            '!**/src/setupProxy.*',
            '!**/src/services/Scripts/ElementWorkers/setupTests.*',
          ],
          silent: true,
          formatter: isEnvProduction ? typescriptFormatter : undefined,
        }),
      new LoadablePlugin({
        filename: paths.ssrLoadableJson,
        writeToDisk: {
          filename: paths.ssrBuildPath,
        },
      }),
    ].filter(Boolean),
    externals: [
      /* 這邊需要額外 allow /babel(\/.*)?/ 模組 */
      nodeExternals({
        allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i, /babel(\/.*)?/],
      }),
    ],
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
    performance: false,
  };
};
