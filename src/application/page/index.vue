<route-meta>
  {
    "isLogin": false,
    "title": "首页"
  }
</route-meta>
<template lang="pug">
  .home
    img(alt='Vue logo', src='~@public/img/logo.png')
    h2(v-index='200') {{title | gets}}
    p(v-test) 请打开控制台查看更多
    v-hellowold(title="父向子传递数据")
    Button(@click='loadData' type="primary") 点击请求数据
    ul
      li(v-for="(item,index) in list" :key="index") 
        p {{ item.id }} : {{ item.name }}
</template>

<script lang="ts">
  import { Button } from 'vant';
  import { inject, computed,toRefs, Ref, ref, reactive, createComponent, PropOptions, onMounted, SetupContext as SC } from '@vue/composition-api'
  import { UnwrapRef } from '@vue/composition-api/dist/reactivity'
  //@ts-ignore
  import HomeServiceImpl from '@impl/home.service.impl';
  import HelloWorldComponent from '../components/HelloWorld.vue'
  //@ts-ignore
  import { SetupContext } from "@core/types/ctx.d.ts";


  export default createComponent({
    name: 'index',
    props: {},
    filters: {
        gets: (value: string) => {
            return value + ' | 过滤器';
        }
    },
    setup(props: PropOptions, ctx: SC | SetupContext) {

      const { port1, port2 } = (inject("Broadcast") as { [key: string]: { [key: string]: any } }).HelpingSuccess;
      console.log("port1: ", port1);
      console.log("port2: ", port2);


      const state: UnwrapRef<{
        title: Ref<string>,
        list: Ref<Array<{id: number, name: string}>>
      }> = reactive({
        title: ref('首页'),
        list: ref([])
      });

      onMounted(async ()=> {

        console.log("MD5加密： ",ctx.root.$md5("test"));
        

        // 2: 使用vue3 SetupContext 对象访问全局自定义配置和方法
        // 还有路由对象
        ctx.root.$setTitle("测试");

        let PostData = await HomeServiceImpl.haha({
          name: 'bmy',
          age: [18,19,17]
        });

        console.log("测试POST请求，数据为：", PostData);

      });

      const loadData = async () => {

        // ajax 请求，注意用ctx替代this
        let data = await HomeServiceImpl.index({ id: 1,page: 1 });
        console.log("GET请求到的数据：", data);
        state.list = data.result
      };

      return {
        ...toRefs(state), 
        loadData
      }
    },
    components: {
      'v-hellowold': HelloWorldComponent,
      Button
    },
  })
</script>

<style lang="less" scoped>
 @import "~@less/home";
</style>