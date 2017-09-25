module.exports={
    entry:[
        './src/index.jsx'
    ],
    output:{
        path:__dirnam,
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
    }
};