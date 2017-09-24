const merge = require('webpack-merge');
const parts = require('./webpack.parts');

// Webpack configuration for development
module.exports = (PATHS) => {
  return merge([
    parts.devServer({
      // Customize host/port here - else defaults localhost, 8080
      host: process.env.HOST,
      port: 3000 || process.env.PORT,
    }),

    // Load Sass Module
    parts.loadSass({ include: PATHS.app }),

    // Load Images
    parts.fileLoad({
      include: PATHS.app,
      options: {
        name: '[name].[ext]'
      }
    }),
    // parts.loadImages({
    //   include: PATHS.app,
    //   options: {
    //     limit: 15000,
    //     name: '[name].[ext]',
    //   }
    // }),

    // Source Maps
    {
      output: {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      },
    },
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map'}),
  ]);
};
