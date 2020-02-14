const isProduction = process.env.NODE_ENV === 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path');

// 公共性配置，可以自定义修改
const PublicConfig = {
  // 入口
  entry: './src/core/run/index.run.ts',
  // 别名
  alias: {
    public: 'public',
    core: 'src/core',
    impl: 'src/core/service/impl',
    root: 'src/application',
    assets: 'src/application/assets',
    styl: 'src/application/assets/stylus/components',
    globalStyl: './src/application/assets/stylus/imports.styl'
  }
}

// vue项目打包上线后会使用这里的css，js，减少打包后的项目体积。
const cdn = {
  css: [],
  js: [
      'https://cdn.bootcss.com/vue/2.6.11/vue.runtime.min.js',
      'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
      'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
  ]
};

module.exports = {
  publicPath: './',
  filenameHashing: true,
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  lintOnSave: false,
  devServer: {
    hot: true,
    hotOnly: true,
    host: '0.0.0.0',
    port: 9000,
    compress: true,
    open: true,
    openPage: '#/',
    overlay: {
      warnings: true,
      errors: true,
    },
    // before 这块代码都可以删除，仅仅为脚手架提供一个用于测试的接口
    before: function(app, server) {
      app.get('/test', function(req, res) {
        res.json({ 
          status: 200,
          result: [
            { id: 1, name: '张三' },
            { id: 2, name: '李四' }
          ]
        });
      });

      app.post('/haha', function(req, res) {
        res.json({ 
          status: 200,
          result: [
            { id: 1, name: '哈哈1' },
            { id: 2, name: '哈哈2' }
          ]
        });
      });
    }
    // 前端接口代理，如果后端跨域，请开启
    // 修改 target 的url地址即可
    // proxy: {
    //   '/api': {
    //     target: 'http://115.159.153.142:9010/h5',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  configureWebpack: (config) => {
    // 设置程序核心入口
    config.entry.app = PublicConfig.entry

    if (isProduction) {

      /**
       * 去除这些公共包，让webpack不打包到项目源码的js中，减小项目js体积
       * 然后使用cdn 数组里面的资源外链来引入。
       */
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
      };

      /**
       * 部署阶段 代码压缩
       */
      config.plugins.push(
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

      /**
       * Gzip压缩，开启 BundleAnalyzerPlugin（分析打包后的js文件体积）
       */
      config.mode = 'production'
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css/, //匹配文件名
            threshold: 10240, //对超过10k的数据进行压缩
            deleteOriginalAssets: false //是否删除原文件
          }),
          new BundleAnalyzerPlugin(),
        ]
      }
    }

  },
  chainWebpack: (config) => {

     // 生产环境配置
     if (isProduction) {
      // 生产环境注入cdn
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn;
          return args;
        });
    }

    /**
     * 移除不必要的 prefetch 和 preload请求
     */
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');

    /**
     * html 模板引擎 pug 配置
     */
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();

    /**
     * 导入全局css
     * @type {*[]}
     */
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)));


    /**
     * 配置路径别名，项目中引用资源的时候路径可以更简短
     * 但是ts文件在用的时候，编译器会报错，需要添加 @ts-ignore
     * 忽略开发工具的错误。
     */
    config.resolve.alias
      .set('@public', resolve(PublicConfig.alias.public))
      .set('@core', resolve(PublicConfig.alias.core))
      .set('@', resolve(PublicConfig.alias.root))
      .set('@assets', resolve(PublicConfig.alias.assets))
      .set('@styl', resolve(PublicConfig.alias.styl))
      .set('@impl', resolve(PublicConfig.alias.impl))
  }

};

function resolve(dir) {
  return path.join(__dirname, dir);
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, PublicConfig.alias.globalStyl)
      ],
    });
}
