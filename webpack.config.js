const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    mode: 'production',
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: 'js/[id].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../../'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            [{
                from: './static/'
            }]
        ),
        new VueLoaderPlugin(),
        new ModuleConcatenationPlugin(),
        new TransformModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            //   chunkFilename: 'css/[name].[hash:8].css'
        })

    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin({}),
        ]
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', 
                    // 'vue-style-loader',
                    'css-loader',
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name]-[hash:8].[ext]'
                    }
                }]
            }
        ]
    },

    resolve: {
        extensions: ['.vue', '.js', '.json', '.css'],
        alias: {
            '@': resolve('./src'),
            'cube-ui': 'cube-ui/lib'
        },
    },
    devServer: {
        host: 'localhost',
        port: 8080,
    },
};