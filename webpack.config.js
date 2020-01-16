const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ROOT = path.resolve(__dirname, 'src');

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    context: ROOT,
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve('public'),
    },
    module: {
        rules: [
            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AngularJS',
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        extensions:  ['.js']
    }
};