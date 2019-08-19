let path = require("path");
let webpackConfig = require("./webpack.config");
let outputDir = "dist/static";
module.exports = {
  publicPath: "./",
  outputDir: outputDir,
  lintOnSave: false,
  // pages: {
  //   index: {
  //     entry: "./src/main.js",
  //     template: `./public/index.html`,
  //     filename: "index.html"
  //   }
  // },
  devServer: {
    open: true,
    // host: "0.0.0.0",
    port: 8081,
    // contentBase: path.resolve(__dirname, "public"),
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://10.0.0.32:6900/",
        ws: false,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
       }
      }
    }
    //before: app => {}
  },
  css: { 
    sourceMap: true,
    // sass-loader, use { sass: { ... } }
    // 配置css-loader
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/mainfont.scss";`
      }
    },
    // 是否为所有css或css预编译文件使用modules模式
    modules: false
  },
  //webpack配置
  chainWebpack: config => {
    let webpackAlias = webpackConfig.resolve.alias;
    Object.keys(webpackAlias).forEach(aliasName => {
      config.resolve.alias.set(aliasName, webpackAlias[aliasName]);
    });
  },
  parallel: require("os").cpus().length > 1
};
