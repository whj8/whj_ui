const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  // entry: ['./src/index.tsx','./.storybook/main.ts'],
  mode: "development",
  devtool: 'source-map',
  output: {
    filename: "js/out.js",
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    port: 1333,
    hot: true,
    open: true
  },
  resolve: {
    extensions: [".js", ".json", '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve('./src') // 路径别名
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.scss?$/,
      //   exclude: /node_modules/,
      //   use: ['style-loader','css-loader',"sass-loader"]
      // },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: ['style-loader', {
          loader: 'css-loader',
          options: { //额外参数
            importLoaders: 1 // css工作的时候发现了@import，那么就让后面的n个loader进行处理@import后面的css文件
          }
        },
          {
            // 以下相当于执行了,
            // yarn postcss --use autoprefixer -o ./src/style/result.css ./src/style/post.css
            loader: 'postcss-loader',
          }, "sass-loader"],
        sideEffects: true,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      meta: {
        viewport: 'width=device-width'
      },
      template: './public/index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
}