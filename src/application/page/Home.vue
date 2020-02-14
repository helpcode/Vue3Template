<template lang="pug">
  .home
    img(alt='Vue logo', src='~@public/img/logo.png')
    h2(v-index='200') {{title}}
    p(v-test) 请打开控制台查看更多
    v-hellowold(title="父向子传递数据")
    button(@click='loadData') 点击请求数据
    ul
      li(v-for="(item,index) in list" :key="index") 
        p {{ item.id }} : {{ item.name }}
</template>

<script lang="ts">

  import { toRefs, Ref, ref, reactive, createComponent, PropOptions, onMounted, SetupContext } from '@vue/composition-api'
  import { UnwrapRef } from '@vue/composition-api/dist/reactivity'
  //@ts-ignore
  import { useRouter } from '@core/hooks/router.hooks'
  //@ts-ignore
  import HomeServiceImpl from "@impl/home.service.impl";
  import HelloWorldComponent from '../components/HelloWorld.vue'

  export default createComponent({
    props: {},
    setup(props: PropOptions, ctx: SetupContext) {
      const { route, router } = useRouter();

      const state: UnwrapRef<{
        title: Ref<string>,
        list: Ref<Array<{id: number, name: string}>>
      }> = reactive({
        title: ref('首页'),
        list: ref([])
      });

      onMounted(async ()=> {
        // 1: 使用 mixin 混入
        // 在beforeCreate时候保存vue对象，然后使用 hooks 读出来使用
        console.log("路由 route 对象: ", route.value);
        // 路由导航
        // router.push('about')
       

        // 2: 使用vue3 SetupContext 对象访问全局自定义配置和方法
        // 还有路由对象
        (ctx.root as any).$setTitle("测试")
        // 路由导航
        // ctx.root.$router.push('about')

        let PostData = await HomeServiceImpl.HaHa({
          name: 'bmy', 
          age: [18,19,17] 
        });
        console.log("测试POST请求，数据为：", PostData)
        
      });

      const loadData = async () => {
        // ajax 请求，可以使用Hooks，也可以用传统的 prototype 全局挂载方式（注意用ctx替代this）
        let data = await HomeServiceImpl.index({ id: 1,page: 1 });
        console.log("GET请求到的数据：", data)
        state.list = data.result
      };

      return {
        ...toRefs(state), loadData
      }
    },
    components: {
      'v-hellowold': HelloWorldComponent
    },
  })
</script>

<style lang="stylus" scoped>
 @import "~@styl/home";
</style>