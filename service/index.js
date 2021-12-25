import BlogService from "./blog-service.js";
import CommentService from "./comment-service.js";
import { blogReq, commentReq } from "./request.js";

const blogService = new BlogService(blogReq)
const commentService = new CommentService(commentReq)

export { 
  blogService,
  commentService
}

