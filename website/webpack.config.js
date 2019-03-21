const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
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
        new CopyWebpackPlugin(['index.html']),
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
        })
    ]
};
