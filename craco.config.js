const path = require('path');
const cracoLessPlugin = require('craco-less');

const resolve = (...paths) => path.join(__dirname, ...paths);

// Don't open the browser during development
process.env.BROWSER = 'none';

module.exports = {
  webpack: {
    alias: {
      containers: resolve('src', 'containers'),
      components: resolve('src', 'components'),
      data: resolve('src', 'data'),
      reducers: resolve('src', 'modules'),
      config: resolve('src', 'config'),
      forms: resolve('src', 'forms'),
      modules: resolve('src', 'modules'),
    },
  },

  plugins: [{ plugin: cracoLessPlugin }],
};
