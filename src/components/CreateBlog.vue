<template>
  <div class="createBlog" v-if="state.user">
    <form v-if="state.user.isAuthenticated" class="text-left" @submit.prevent="createBlogPost">
      <input type="text" name="blogTitle" placeholder="Title of new Blog Post"><br />
      <input type="text" name="blogBody" placeholder="Body of new blog post"><br />
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'CreateBlog',
  setup () {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state
    }
  }
}
</script>
