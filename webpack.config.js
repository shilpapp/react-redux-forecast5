const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

   {
      test: /\.(gif|svg|jpg|png)$/,
      use:{
        loader: "file-loader"
      }
    },
    {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }

    ]
  },
  output: {
    crossOriginLoading: 'anonymous'
  },
     devServer: {
        port: 9000,
        host:"127.0.0.1",
     headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};