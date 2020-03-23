const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const VariableConfig = require('./variable');

/**
 * 正式阶段的一些配置
 */
class ProdConfig {

  constructor(configureWebpack) {
    this.configureWebpack = configureWebpack

    this.RemoveCommonPackage();
    this.CompressedCode();
    this.GzipCompressedCode();
  }

  /**
   * 去除这些公共包，让webpack不打包到项目源码的js中，减小项目js体积
   * 然后使用cdn 数组里面的资源外链来引入。
   */
  RemoveCommonPackage() {
    this.configureWebpack.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'axios': 'axios',
    };
  }

  /**
   * 部署阶段 代码压缩
   */
  CompressedCode() {
    this.configureWebpack.plugins.push(
      // 生产环境自动删除 console，如果需要显示 console 请修改
      // drop_console 为 false
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
    );
  }

  /**
   * Gzip压缩，开启 BundleAnalyzerPlugin（分析打包后的js文件体积）
   */
  GzipCompressedCode() {
    this.configureWebpack.mode = 'production';
    return {
      plugins: [
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, //匹配文件名
          threshold: 10240,            //对超过10k的数据进行压缩
          deleteOriginalAssets: false  //是否删除原文件
        }),
        new BundleAnalyzerPlugin(),
      ]
    }
  }


}

module.exports = ProdConfig;