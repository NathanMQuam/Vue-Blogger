<template>
  <div class="comment m-1 p-1" v-if="comment.creator">
    <small>{{ comment.creator.name }}</small>
    <p>
      {{ comment.body }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    comment: Object
  },
  setup () {
    return {}
  }
}
</script>

<style lang="scss">

</style>
