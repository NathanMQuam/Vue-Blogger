<template>
  <div class="about text-center container-fluid text-center">
    <div class="row">
      <div class="col-8 offset-2 text-center">
        <h1>Welcome {{ account.name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-3 offset-2 text-center">
        <img class="rounded" :src="account.picture" alt="" />
      </div>
      <div class="col-5 text-center">
        <p>{{ account.email }}</p>
      </div>
    </div>
    <div class="row">
      <h3>My Blogs</h3>
      <div class="col-8 offset-2">
        <Blog v-for="blogData in state.blogs" :key="blogData.id" :blog="blogData" />
      </div>
    </div>
    <div class="row">
      <h3>My Comments</h3>
      <div class="col-8 offset-2">
        <Comment v-for="commentData in state.comments" :key="commentData.id" :comment="commentData" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import Blog from '../components/Blog'
import Comment from '../components/Comment'
import { accountService } from '../services/AccountService'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup () {
    const state = reactive({
      blogs: computed(() => AppState.blogs),
      comments: computed(() => AppState.comments)
    })
    onMounted(() => {
      accountService.getBlogs()
      accountService.getComments()
    })
    return {
      state,
      account: computed(() => AppState.account)
    }
  },
  components: {
    Blog,
    Comment
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
