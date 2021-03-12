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
    } catch (error) {
      console.error(error)
    }
  }

  async getCommentsByBlogId (id) {
    try {
      AppState.activeBlog = {}
      const res = await api.get(`api/blogs/${id}/comments`)
      AppState.activeBlog = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogsListService = new BlogsListService()
