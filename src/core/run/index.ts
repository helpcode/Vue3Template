import { Init } from './init';
import { config } from '../config';
import { Injectable, Inject } from '../decorators/Ioc';
import { CreateElement } from 'vue';

// Vue项目的启动文件
class Index extends Init {
  constructor() {
    super();
    new this.Vues({
      router: this.router,
      render: (h: CreateElement) => h(Init.AppComponent)
    }).$mount(config.mountElement);
  }
}

new Index();


