var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口文件
    entry:'./src/main.js',
    output:{
        path:path.join(__dirname+'/dist'),
        // publicPath: '/dist',
        filename:'bundle.js'
    },
    module: {
        rules: [
          // 配置的是用来解析.css文件的loader(style-loader和css-loader)
          {
            // 1.0 用正则匹配当前访问的文件的后缀名是  .css
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] //webpack底层调用这些包的顺序是从右到左
          },
          {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: 'style-loader'
          }, {
              loader: 'css-loader'
          }, {
              loader: 'sass-loader'
          }]
      },
      {
        test: /\.(png|jpg|gif|ttf|woff)/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 50
            }
        }]
    },{
        test: /\.js$/,
        // Webpack2建议尽量避免exclude，更倾向于使用include
        // exclude: /(node_modules)/, // node_modules下面的.js文件会被排除
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          // options里面的东西可以放到.babelrc文件中去
        //   options: {
        //     presets: ['env']
        //   }
        }
      },{
        test: /\.vue$/,
        loader: 'vue-loader'
        }
    
        ]
    
      },
      plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            title:'许烨商城'
        })
    ]   
}