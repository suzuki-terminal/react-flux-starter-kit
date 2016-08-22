export default {
    context: `${__dirname}/src`,
    entry: {
        app: './app.js',
        html: './index.html',
    },
    output: {
        filename: '[name].js',
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
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ],
    },
}