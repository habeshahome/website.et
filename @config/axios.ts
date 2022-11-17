import axios from 'axios'

const server: string = process.env.JS_SERVER ?? 'http://localhost'
const port: string = process.env.JS_PORT ?? '9999'

export default axios.create({
  baseURL: `${server}:${port}`
})
