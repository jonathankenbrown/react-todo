var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // NODE_ENV will be "production" when uploaded to heroku

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', //these are regular script files, not for webpacks, so we must have script! by using scrip loader (installed via npm)
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],  //specifies where the app is, here using jsx
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({  // telling the app whenever we want to use jquery, look for these signs
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'  //this is output file where everything gets dumped
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components', // automatically adds components to be loaded (so no alias)
      './app/api'
    ],
    alias: {
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['','.js','.jsx'] //extensions that may be used for app
  },
  module: {
    loaders: [ // since .jsx is not native, we must specify how to read it by "loaders"
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'] // Telling babel "what to do" with .jsx
        },
        test: /\.jsx?$/,  //for every .jsx file
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
