const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.jsx',
  
  output: {
    path: path.resolve(__dirname, 'static/bundles/'),
    filename: 'bundle.js'
  },  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpeg|png|jpg|svg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name][ext]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',               
        generator: {
          filename: 'fonts/[name][ext]',
        }
      },
      {
        test: /\.(glb|gltf)$/,
        use:
        [
            {
                loader: 'file-loader',
                options:
                {
                    outputPath: 'assets/models/'
                }
            }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};

module.exports = config;