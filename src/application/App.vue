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
    setup() {
      
    }
  });
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
