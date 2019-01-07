var path = require('path')
module.exports = {
    entry: ["./app.js"],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
        publicPath: './dist/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/
            },            
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}