module.exports = {
  plugins: [
    require('postcss-px2rem')({
      remUnit: 75,
      unitPrecision: 5
  })
  ]    
}
  