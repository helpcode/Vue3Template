<template lang="pug">
  #app
    #nav
      router-link(to='/') Home | 
      router-link(to='/about') About
    router-view
</template>

<script lang="ts">
  import { toRefs, Ref, ref, reactive, createComponent, PropOptions, onMounted, SetupContext } from '@vue/composition-api'

  export default createComponent({
    setup() {}
  });
</script>

<style lang="less">
</style>
