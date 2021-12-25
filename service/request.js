import axios from 'axios'
import { BLOG_URL, COMMENT_URL } from '../config.js'


const blogReq = axios.create({
  baseURL: BLOG_URL,
  timeout: 10000
})

const commentReq = axios.create({
  baseURL: COMMENT_URL,
  timeout: 10000
})


export {
  blogReq,
  commentReq,
}