const path = require('path');

module.exports = {
  '@Base': path.resolve(__dirname, '..', 'src', 'base'),
  '@Components': path.resolve(__dirname, '..', 'src', 'components'),
  '@Reducers': path.resolve(__dirname, '..', 'src', 'reducers'),
  '@API': path.resolve(__dirname, '..', 'src', 'api'),
  '@Tools': path.resolve(__dirname, '..', 'src', 'tools'),
  '@Hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
  '@Models': path.resolve(__dirname, '..', 'src', 'models'),
  '@CSS': path.resolve(__dirname, '..', 'src', 'css'),
  '@Services': path.resolve(__dirname, '..', 'src', 'services'),
  '@Providers': path.resolve(__dirname, '..', 'src', 'providers'),
  '@Mocks': path.resolve(__dirname, '..', 'src', 'mocks'),
  '@Langs': path.resolve(__dirname, '..', 'src', 'langs'),
  '@Env': path.resolve(__dirname, '..', 'src', 'env'),
  '@Plugin': path.resolve(__dirname, '..', 'src', 'plugin'),
  '@Debug': path.resolve(__dirname, '..', 'src', 'debug'),
  '@Articles': path.resolve(__dirname, '..', 'src', 'article'),
};
