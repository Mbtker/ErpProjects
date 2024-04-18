const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'object-data',

  exposes: {
    // './Component': './projects/object-data/src/app/app.component.ts',
    './ObDataModule': './projects/object-data/src/app/ob-data/ob-data.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
