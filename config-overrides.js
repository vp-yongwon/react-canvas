const { override, addWebpackModuleRule } = require('customize-cra')

function fileName(config, env) {
  if (env === 'production') {
    config.output = {
      ...config.output,
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].chunk.js'
    }
  }
  return config
}

module.exports = override(
  fileName,
  addWebpackModuleRule({
    test: /\.(scss|css)$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  })
)
