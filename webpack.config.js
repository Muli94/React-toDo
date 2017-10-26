const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('./style/style.css');

module.exports={
    entry:[
        './src/index.jsx',
        './style/scss/main.scss'
    ],
    output:{
        path:__dirname,
        publicPath: '/',
        filename: 'src/out.js'
    },
    module:{
        loaders:[{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            query:{
                presets: ['es2015', 'stage-1', 'react']
            }
        },{
            test: /\.scss$/,
            use: extractSASS.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    devServer:{
        historyApiFallback: true,
        contentBase: './',
        inline: true,
        port:3000
    },
    plugins: [
        extractSASS,
    ]
};