const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000
  },
  lintOnSave: false,
  css:{
    loaderOptions:{
      less:{
        lessOptions:{
          javascriptEnabled: true
        }
      }
    }
  }
})
