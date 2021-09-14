const resolveApp = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 定义对象保存 base 配置信息
const commonConfig = {
    context: resolveApp('./'),
    entry: './src/index.js',  //（ 相对路径 ）
    resolve: {
        extensions: [".js", ".json", '.ts', '.jsx', '.vue'],
        alias: {
            '@': resolveApp('./src')
        }
    },
    output: {
        filename: 'index.js',
        path: resolveApp('./dist'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            esModule: false
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            esModule: false
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|gif|jpe?g)$/,
                type: 'asset', // 相当于url-loader + limit的使用
                generator: {
                    filename: "img/[name].[hash:4][ext]"
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource', // 相当于file-loader
                generator: {
                    filename: 'font/[name].[hash:3][ext]' // 通过构建指定文件目录和名称
                }
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader']
            },
              {
                test: /\.ts$/,
                use: ['babel-loader']
              },
              {
                test: /\.vue$/,
                use: ['vue-loader']
              }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'copyWebpackPlugin',
        //     template: './public/index.html'
        // }),
        new DefinePlugin({
          BASE_URL: '"./"'
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = commonConfig;