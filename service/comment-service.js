export default class CommentService {
  constructor(commentReq) {
    this.commentReq = commentReq
  }

  async getAllComments() {
    return await this.commentReq.get('/api/comments')
  }

  async getCommentsByBlogId(id) {
    return await this.commentReq.get(`/api/comments/blog/${id}`)
  }

  async postComment(data) {
    return await this.commentReq.post(`/api/comments/`, { data })
  }

  async delCommentByBlogId(blogId) {
    return await this.commentReq.delete(`/api/commments/blog/${blogId}`)
  }
}