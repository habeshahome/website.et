import axios from '../../@config/axios'

const REGISTER_URL = '/register'
// let response: AxiosResponse

const RegistrationService = async (): Promise<Boolean> => {
  try {
    const response =
    await axios.post(
      REGISTER_URL,
      JSON.stringify({ email: 'qintot@gmail.com', password: 'asdfasdf' }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    )
      .then((response) => console.log(response))
      .then((data) => { return data })

    console.log('Response is')
    console.log(response)
  } catch (err) {
    console.log(err)
  }
  return true
}

export default RegistrationService
