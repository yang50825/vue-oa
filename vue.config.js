const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 语法检查
  devServer: {
    port: 3000, // 设置端口号
  },
})
