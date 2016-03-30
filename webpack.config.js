var path = require('path');

module.exports = {
    entry: './src/app.jsx',

    output: {
      path: './public',
      filename: 'browser.bundle.js',
        publicPath: './public',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {test: /\.jsx?/, exclude: /node_modules/, loader: 'babel?presets[]=react,presets[]=es2015'}
        ]
    },
};
