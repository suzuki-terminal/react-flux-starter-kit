import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import webpackConfig from '../webpack.config.js';
import todos from './todos';

const API_SERVER_PORT = 3000;
const DEV_SERVER_PORT = 8080;


/**
 * Api Server
 */
const app = express();

app.use(bodyParser());
app.use('/api/todos', todos);

app.use((req, res, next) => {
    const err = new Error('Not Fount');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.send(err);
});

app.set('port', API_SERVER_PORT);

app.listen(app.get('port'), () => {
    console.log(`Express Server Listening on Port ${API_SERVER_PORT}`);
});


/**
 * Webpack Dev Server
 */
new webpackDevServer(webpack(webpackConfig), {
    publicPath: '/',
    hot: true,
    proxy: {
        '/api/*': `http://localhost:${API_SERVER_PORT}`,
    },
}).listen(DEV_SERVER_PORT, 'localhost', (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log(`Webpack Dev Server Listening on Port ${DEV_SERVER_PORT}`);
});