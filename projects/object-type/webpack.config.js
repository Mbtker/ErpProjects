const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'object-type',

  exposes: {
    // './Component': './projects/object-type/src/app/app.component.ts',
    './ObTypeModule': './projects/object-type/src/app/ob-type/ob-type.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
