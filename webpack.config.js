const path = require('path');

module.exports = (env) => {
    console.log('env', env);
    const isProduction = !!env.production;
    console.log(`isProduction: ${isProduction}`);
    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/app.js',
        // entry: './src/playground/hoc.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }],
        },
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
        },
    };
};
