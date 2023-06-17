
const HtmlWebPackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const MinimizerCssPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },

    mode: 'production',
    optimization: {
        
        minimizer: [
        
          new MinimizerCssPlugin(),
        ],
        minimize: true
        
    },
    output:{

        filename: 'main.[hash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    
                        'style-loader',
                        'css-loader'
                    
                ]
            },
            {

                test: /styles\.css$/,
                use: [
                    
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    
                ]
            },
            {
               

                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 esModule: false,
            //                // name: 'assets/[name].[ext]'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            ignoreOrder: false
        })
    ]

}
