module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'chestercodescv',
      //entry: './src/index.umd.js',
      externals: {
        react: 'React'
      }
    }
  }
}
