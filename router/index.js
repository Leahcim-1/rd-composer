import Router from '@koa/router'
import { blogService, commentService } from '../service/index.js'

const router = new Router()

/**
 * The factory function for creating response body
 * @param {Errno} message
 * @param {Object} data
 * @param {Array} links
 * @returns
 */
 function createResBody (message, data, links = []) {
  return {
    message,
    data,
    links
  }
}

router.get('/', ctx => {
  ctx.body = "This is Bender, the bending machine"
})


/**
 * @METHOD GET
 * @PATH /blogs-comments
 * Parallelism API Call: 
 * Retrieve all the blogs while retrieve all the comments
 */
router.get('/api/blogs-comments', async ctx => {
  const blogsPromise = blogService.getAllBlogs()
  const commentsPromise = commentService.getAllComments()
  const data = await Promise.all([blogsPromise, commentsPromise])
  return data
})

/**
 * @METHOD GET
 * @PATH /api/comments/:blogId
 * Synchronous API Call: 
 * Check the blog whether existed first
 * then retrieving all comments by blog id
 */
 router.get('/api/comments/:blogId', async ctx => {
  const { blogId } = ctx.params
  const blogRes = await blogService.getBlogById(blogId)

  // * Check the blog whether existed first
  if (blogRes.status == 404) {
    ctx.body = createResBody("Non Existed Blog Id!")
    ctx.status = 404
    return
  }

  // * Retrieve all comments by blog id
  const { id } = blogRes.data
  return await commentService.getCommentsByBlogId(id)
})


/**
 * @METHOD POST
 * @PATH /api/comments
 * Synchronous API Call: 
 * Check the blog whether existed first
 * then post comments
 */
 router.post('/api/comments', async ctx => {
  const { blogId } = ctx.params
  const blogRes = await blogService.getBlogById(blogId)

  // * Check the blog whether existed first
  if (blogRes.status == 404) {
    ctx.body = createResBody("Non Existed Blog Id!")
    ctx.status = 404
    return
  }

  // * Retrieve all comments by blog id
  const { id: blog_id } = blogRes.data
  return await commentService.postComment(blog_id)
})

/**
 * @METHOD DELETE
 * @PATH /api/comments/blog/:blogId
 * Synchronous API Call: 
 * Check the blog whether existed first
 * then deleting all comments by blog id
 */
router.del('/api/comments/blog/:blogId', async ctx => {
  const { blogId } = ctx.params
  const blogRes = await blogService.getBlogById(blogId)

  // * Check the blog whether existed first
  if (blogRes.status == 404) {
    ctx.body = createResBody("Non Existed Blog Id!")
    ctx.status = 404
    return
  }

  // * Delete all comments by blog id
  const { id } = blogRes.data
  return await commentService.delCommentByBlogId(id)
})

export default router



