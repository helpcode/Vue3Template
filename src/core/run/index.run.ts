import { Init } from './init.run';
// import { config } from '../config/index.config';
import { CreateElement } from 'vue';
/**
 * Vue项目的启动文件
 * 从Init类中抽离出来的原因是方便后期如果要做Vue多端项目
 */
class Index extends Init {
  constructor() {
    super();
    new this.Vues({
      router: this.router,
      render: (h: CreateElement) => h(Init.AppComponent)
    }).$mount('#app');
  }
}

new Index();