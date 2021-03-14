<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue 3 Starter</span>
    </h1> -->
    <div class="container h-100">
      <Blog class="row" v-for="blogData in state.blogs" :key="blogData.id" :blog="blogData" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import { computed, reactive } from 'vue'
import { AppState } from '../AppState.js'
import { blogsListService } from '../services/BlogsListService'
import Blog from '../components/Blog'
export default {
  name: 'Home',
  setup () {
    console.log(computed(() => AppState.blogs))
    const state = reactive({
      blogs: computed(() => AppState.blogs)
    })
    blogsListService.getBlogs()
    console.log(state.blogs)
    return {
      state
    }
  },
  components: {
    Blog
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
}
</style>
