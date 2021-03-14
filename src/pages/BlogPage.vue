<template>
  <div class="blogPage w-100">
    <div class="container" v-if="state.blog">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-10"></div>
      </div>
      <div class="row">
        <div class="col-12">
          <h3 class="text-center">
            {{ state.blog.title }}
          </h3>
          <p>
            {{ state.blog.body }}
          </p>
          <div class="d-flex justify-content-between">
            <button>delort</button>
            <button>edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { blogsListService } from '../services/BlogsListService.js'
import { AppState } from '../AppState.js'
export default {
  name: 'BlogPage',
  setup () {
    const route = useRoute()
    const state = reactive({
      blog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments)
    })
    onMounted(() => {
      console.log(route.params.id)
      blogsListService.getBlogById(route.params.id)
      blogsListService.getCommentsByBlogId(route.params.id)
    })
    onBeforeRouteLeave((to, from, next) => {
      // if confirmed and any of the input fields have a value
      if (window.confirm('You sure bro?')) {
        AppState.activeBlog = {}
        AppState.comments = {}
        next()
      }
    })

    return {
      route,
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
