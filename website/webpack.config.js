const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin(
            ['index.html', 'list.html']
            ),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackPwaManifest({
            name: 'Japanese Learning App',
            short_name: 'JLA',
            description: 'Learn Japanese as Game!',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            fingerprints: false,
            theme_color: '#2F3BA2',
            icons: [
              {
                src: path.resolve('src/assets/icon.png'),
                sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
              },
              {
                src: path.resolve('src/assets/large-icon.png'),
                size: '1024x1024' // you can also use the specifications pattern
              }
            ]
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast 
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true
        })
    ]
};
