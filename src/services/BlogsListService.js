/* eslint-disable no-console */
import { AppState } from '../AppState.js'
import { api } from './AxiosService.js'

class BlogsListService {
  async getBlogs () {
    try {
      AppState.blogs = {}
      const res = await api.get('api/blogs')
      AppState.blogs = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async getBlogById (id) {
    try {
      AppState.activeBlog = {}
      const res = await api.get('api/blogs/' + id)
      AppState.activeBlog = res.data
      console.log(AppState.activeBlog)
    } catch (error) {
      console.error(error)
    }
  }

  async getCommentsByBlogId (id) {
    try {
      AppState.comments = {}
      const res = await api.get(`api/blogs/${id}/comments`)
      AppState.comments = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createBlogPost (rawBlog) {
    try {
      const res = await api.post('api/blogs', rawBlog)
      this.getBlogs()
      return res.data._id
    } catch (error) {
      console.error(error)
    }
  }

  async createComment (rawComment) {
    try {
      const id = AppState.activeBlog.id
      const res = await api.post('api/comments', rawComment)
      this.getCommentsByBlogId(id)
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogsListService = new BlogsListService()
