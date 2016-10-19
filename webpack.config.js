var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // NODE_ENV will be "production" when uploaded to heroku

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {
  // don't do anything if error happens
}

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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
      }
    }),
    new ExtractTextPlugin('./public/bundle.css', { allChunks: true })
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
    extensions: ['','.js','.jsx', '.css', '.scss'] //extensions that may be used for app
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
      },
      {
       test: /(\.scss|\.css)$/,
       loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
