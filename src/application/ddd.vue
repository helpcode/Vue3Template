<route-meta>
  {
  "isLogin": false,
  "title": "test"
  }
</route-meta>

<template lang="pug">
  .test
    h2 {{ title }}
</template>

<script lang="ts">
  import {
    toRefs,
    Ref,
    ref,
    reactive,
    createComponent,
    PropOptions,
    onMounted,
    SetupContext as SC
  } from '@vue/composition-api';
  import {UnwrapRef} from '@vue/composition-api/dist/reactivity';
  //@ts-ignore
  import {SetupContext} from "@core/types/ctx.d.ts";

  export default createComponent({

    setup(props: PropOptions, ctx: SC | SetupContext) {

      const state: UnwrapRef<{
        title: string,
      }> = reactive({
        title: '测试'
      });

      onMounted(() => {
        console.log("测试")
      });


      return {
        ...toRefs(state)
      }
    }
  })
</script>

<style lang="less" scoped>
  @import "~@less/xxx";
</style>