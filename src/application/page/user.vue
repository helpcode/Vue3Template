<template lang="pug">
  .user-list
    h1 {{ title }}
    router-view
</template>

<script lang="ts">
    import { toRefs, Ref, ref, reactive, createComponent, PropOptions, onMounted, SetupContext } from '@vue/composition-api'
    import { UnwrapRef } from '@vue/composition-api/dist/reactivity'

    export default createComponent({
        props: {},
        setup(props: PropOptions, ctx: SetupContext) {
            const state: UnwrapRef<{
                title: Ref<string>
            }> = reactive({
                title: ref('用户中心')
            })

            return {
                ...toRefs(state)
            }
        }
    })
</script>

<style lang="stylus" scoped>
</style>