<template lang="pug">
  #app
    #nav
      router-link(to='/') Home | 
      router-link(to='/about') About
    router-view
</template>

<script lang="ts">
  import { toRefs, Ref, ref, reactive, createComponent, provide, onMounted, SetupContext } from '@vue/composition-api';
  //@ts-ignore
  import { HelpingPopupMessageChannel } from '@core/hooks/MessageChannel.hooks';

  export default createComponent({
    setup() {

      // 向所有组件共享 广播，避免所有页面都导入文件
      provide("Broadcast", HelpingPopupMessageChannel());

      onMounted(() => {
      });

    }
  });
</script>

<style lang="less">
</style>
