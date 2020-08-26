<route-meta>
  {
    "isLogin": false,
    "title": "关于我"
  }
</route-meta>
<template lang="pug">
  .about
    h1(@click="addCount") {{ title }}
    p {{count}}
    p Test: {{ Test }}
</template>

<script lang="ts">

  import { toRefs, Ref, ref, reactive, createComponent, PropOptions, onMounted, SetupContext } from '@vue/composition-api'
  import { UnwrapRef } from '@vue/composition-api/dist/reactivity'

  export default createComponent({
    props: {},
    setup(props: PropOptions, ctx: SetupContext) {
      const state: UnwrapRef<{
        title: Ref<string>,
        count: Ref<number>
      }> = reactive({
        title: ref('关于我页面'),
        count: ref(0)
      });

      const Test: Ref<string> = ref('张三');

      const addCount = () => {
        state.count+=1
      };

      onMounted(async () => {
          console.log("Test: ",Test.value)
      });

      return {
        ...toRefs(state),
          Test,
        addCount
      }
    }
  })
</script>

<style lang="less" scoped>
 @import "~@less/about";
</style>