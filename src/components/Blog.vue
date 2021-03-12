<template>
  <div class="blog col-12">
    {{ blog.title }}
  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    blog: Object
  },
  setup () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
