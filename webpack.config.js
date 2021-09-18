const path = require('path');

module.exports = {
  entry: {
    main: './js/src/index.js',
    home: {
      dependOn: 'main',
      import: './js/src/home.js',
    }, 
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'js'),
  },
};