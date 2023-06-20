const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const dest = path.resolve(__dirname, argv.outputPath || 'build');
  const publicPath = env['public-path']?.trim() ?? '/';

  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      filename: 'main-[contenthash].js',
      path: dest,
      publicPath,
      sourceMapFilename: '[file].map',
    },
    mode,
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devtool: 'source-map',
    cache: false,
    devServer: {
      static: path.join(__dirname, 'src'),
      hot: true,
      open: true,
      historyApiFallback: true,
      port: 8888,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        filename: 'index.html',
      }),
    ],
  };
};
