<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
  import { toRefs, Ref, ref, reactive, createComponent, PropOptions, onMounted, SetupContext } from '@vue/composition-api'

  export default createComponent({
    name: 'hello-word',
    props: {
      title: {
        type: String,
        default: 'HelloWorld 子组件的默认Props值'
      }
    },
    setup() {

    }
  })
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0
}
</style>
