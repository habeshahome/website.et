import { env } from 'process'
// import axios from 'axios'

const port: string = env.JS_PORT ?? '9999'

// const

export async function signinUser (email: string, password: string): Promise<Object> {
  let data
  let jwt
  try {
    data = await fetch(`http://localhost:${port}/signin`,
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
      .then(async response => await response.json())
      .then(data => {
        console.log(data)
        return data
      })
  } catch (err) {
    console.log(err)
  } finally {
    console.log(jwt)
  }
  return data
}
