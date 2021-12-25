
const dev = {
  host: '127.0.0.1',
  port: '9000'
}

const prod = {
  host: '0.0.0.0',
  port: '7000'
}

const devBlogUrl = '127.0.0.1:5000'
const prodBlogUrl = '0.0.0.0:5000'

const devCommentUrl = '127.0.0.1:6000'
const prodCommentUrl = '0.0.0.0:6000'


const env = process.env.NODE_ENV
const isDev = env === 'dev'

const HOST = isDev ? dev.host : prod.host
const PORT = isDev ? dev.port : prod.port
const BLOG_URL = isDev ? devBlogUrl : prodBlogUrl
const COMMENT_URL = isDev ? devCommentUrl : prodCommentUrl




export {
  HOST,
  PORT,
  BLOG_URL,
  COMMENT_URL
}