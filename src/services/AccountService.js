import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount () {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async getBlogs () {
    try {
      AppState.blogs = {}
      const res = await api.get('/account/blogs')
      AppState.blogs = res.data
    } catch (error) {
      logger.error('AccountService.getBlogs() error', error)
    }
  }

  async getComments () {
    try {
      AppState.comments = {}
      const res = await api.get('/account/comments')
      AppState.comments = res.data
    } catch (error) {
      logger.error('AccountService.getComments() error', error)
    }
  }
}

export const accountService = new AccountService()
