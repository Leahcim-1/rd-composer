export default class BlogService {
  constructor (blogReq) {
    this.blogReq = blogReq
  }

  async getAllBlogs() {
    return await this.blogReq.get('/api/blogs')
  }

  async getBlogById(id) {
    return await this.blogReq.get(`/api/blogs/${id}`)
  }

  async postBlog(data) {
    return await this.blogReq.post('/api/blogs', { data })
  }
}

