import { env } from 'process'
// import axios from 'axios'

const port: string = env.JS_PORT ?? '9999'

// const

export async function signinUser (username: string, password: string): Promise<Object> {
  const data =
  await fetch(`http://localhost:${port}/signin`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: username,
        password
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    .then(async response => await response.json())
    .then(data => {
      console.log(data)
      return data
    })
  return data
}
