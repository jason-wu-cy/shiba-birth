module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react',
    'import',
    'prettier',
  ],
  extends: [
    'prettier'
  ],
  rules: {
    'no-shadow': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    'function-paren-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'operator-linebreak': 'off',
    'react/destructuring-assignment': 'off'
  },
  settings: {
    "import/resolver": {
      "alias": {
        "map": [
          ['@Base', './src/base'],
          ['@Components', './src/components'],
          ['@Reducers', './src/reducers'],
          ['@API', './src/api'],
          ['@Tools', './src/tools'],
          ['@Hooks', './src/hooks'],
          ['@Models', './src/models'],
          ['@CSS', './src/css'],
          ['@Providers', './src/providers'],
          ['@Mocks', './src/mocks'],
          ['@Langs', './src/langs'],
          ['@Env', './src/env'],
          ['@Plugin', './src/plugin'],
          ['@Debug', './src/debug'],
          ['@Articles', './src/article'],
        ],
        "extensions": [".js", ".jsx", ".json"]
      }
    }
  },
  env: {
    "browser": true,
    "jest": true,
  },
};
