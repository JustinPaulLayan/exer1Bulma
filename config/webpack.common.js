const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = Path.join(__dirname, '../dist');
const minify = {
  removeComments: true,
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true
}

module.exports = {
  entry: Path.resolve(__dirname, '../src/js/index'),
  output: {
    path: dest,
    filename: 'js/[name].js',
  },
  plugins: [
    new CleanWebpackPlugin([dest], { root: Path.resolve(__dirname, '..') }),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../src/img'), to: 'img' }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: Path.resolve(__dirname, '../src/index.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: Path.resolve(__dirname, '../src/login.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: Path.resolve(__dirname, '../src/register.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'knowledgebase.html',
      template: Path.resolve(__dirname, '../src/knowledgebase.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'singleKnowledgeBase.html',
      template: Path.resolve(__dirname, '../src/singleKnowledgeBase.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'guide.html',
      template: Path.resolve(__dirname, '../src/guide.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'singleGuide.html',
      template: Path.resolve(__dirname, '../src/singleGuide.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: Path.resolve(__dirname, '../src/blog.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'singleBlog.html',
      template: Path.resolve(__dirname, '../src/singleBlog.html'),
      minify
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: Path.resolve(__dirname, '../src/contact.html'),
      minify
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',    // where the fonts will go
            publicPath: '../fonts/'       // override the default path
          }
        }]
      }
    ]
  }
};
