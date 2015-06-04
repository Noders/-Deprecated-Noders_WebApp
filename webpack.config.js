var webpack = require("webpack");
var path = require("path");
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var BowerWebpackPlugin = require('bower-webpack-plugin');


module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'dist/noders.js'
    },
    resolve: {
        modulesDirectories: ['app/bower_components', 'node_modules']
    },

    module: {
        noParse: [
            /[\/\\]node_modules[\/\\]angular[\/\\]angular\.js$/
        ],
        loaders: [

            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            /*
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            */

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.

            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff2"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&minetype=image/svg+xml"
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                loader: "style!css!sass"
            }, {
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/, /bower_components/]
            }, {
                test: /[\/]angular\.js$/,
                loader: "exports?angular"
            }

        ]
    },
    plugins: [
        /*
        ,new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["dependencies"])
        )
        ,new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.optimize.DedupePlugin(),
        new ngAnnotatePlugin({
            add: true,
            single_quotes:true
            // other ng-annotate options here
        }),
        new webpack.optimize.OccurenceOrderPlugin()
        
        */
    ]

};
