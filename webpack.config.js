import webpack from 'webpack';
import path from 'path';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'build');
const mainPath = path.resolve(__dirname, 'src', 'app.js');

export default {
    devtool: 'eval',
    context: path.resolve(__dirname, 'src'),
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './app.js',
    ],
    output: {
        path: buildPath,
        filename: 'app.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [nodeModulesPath],
                query: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    },

    plugins: [new webpack.HotModuleReplacementPlugin()]
};