var webpack = require('webpack');

var APP = __dirname;

module.exports = {
    context: APP,
    devtool: 'inline-source-map', //for development debugging purposes

    resolve: {
        alias: {
            controllers: './app/static/js/controllers'
        }
    },

    entry: {
        app: './app/static/js/app.js'
    },

    output: {
        path: APP,
        filename: './app/static/bundle.js'
    },

    module: {
        loaders: [ //using babel to compile ES6 down to brower recongized javascript version
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: [/node_modules/],
          query: {
            presets: ['es2015']
          }
            }
        ]
    },

    plugins: [ //expose jquery
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
};
