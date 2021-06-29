const path = require('path');

const assetsDir = path.resolve(__dirname, 'src/assets/');
const srcDir = path.resolve(__dirname, 'src/');
const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  context: srcDir,
  entry: './index.jsx',
  output: {
    path: distDir,
    filename: 'index.js',
    publicPath: '/',
    library: 'component-library',
    libraryTarget: 'umd'
    /*
    // Webpack 5
    library: {
      name: 'component-library',
      type: 'umd',
    },
    */
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
    'prop-types': 'prop-types'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, './')
    ],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.mjs',
      '.html',
      '.jpg',
      '.jpeg',
      '.svg',
      '.png',
      '.woff2',
      '.woff',
      '.md',
      '.mdx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|svg|png|woff2|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false
            }
          }
        ],
        include: assetsDir,
        exclude: /node_modules/
      },
    ]
  },
  plugins: []
};
