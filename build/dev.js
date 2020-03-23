const path = require('path');
const VariableConfig = require('./variable');

/**
 * 开发阶段的一些基础配置
 */
class DevConfig {
  constructor(chainWebpack) {
    this.chainWebpack = chainWebpack;
    this.pubSetting();
  }

  pubSetting() {

    /**
     * 移除不必要的 prefetch 和 preload请求
     */
    this.chainWebpack.plugins.delete('prefetch');
    this.chainWebpack.plugins.delete('preload');

    /**
     * html 模板引擎 pug 配置
     */
    this.chainWebpack.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();

    this.chainWebpack.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))

    /**
     * 导入全局css
     * @type {*[]}
     */
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type => this.addStyleResource(this.chainWebpack.module.rule('less').oneOf(type)));

    /**
     * 配置路径别名，项目中引用资源的时候路径可以更简短
     * 但是ts文件在用的时候，编译器会报错，需要添加 @ts-ignore
     * 忽略开发工具的错误。
     */
    this.chainWebpack.resolve.alias
      .set('@public', this.resolve(VariableConfig.PublicConfig.alias.public))
      .set('@core', this.resolve(VariableConfig.PublicConfig.alias.core))
      .set('@', this.resolve(VariableConfig.PublicConfig.alias.root))
      .set('@assets', this.resolve(VariableConfig.PublicConfig.alias.assets))
      .set('@less', this.resolve(VariableConfig.PublicConfig.alias.less))
      .set('@impl', this.resolve(VariableConfig.PublicConfig.alias.impl))
  }

  addStyleResource(rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, VariableConfig.PublicConfig.alias.globalStyl)
        ],
      });
  }

  resolve(dir) {
    return path.join(__dirname, dir);
  }
}

module.exports = DevConfig;