import { Typography } from '@mui/material'
import OnboardCompany from '../../components/onboarding/onboard_company'
import useLocalStorage from '../../hooks/useLocalStorage'

const Multi = (): JSX.Element => {
  const [name, setName] = useLocalStorage('name', '')

  return (
    <>
    <input type="text" value={ name } onChange={ e => setName(e.target.value)} />
    <br/>
    <Typography variant='h4'> { name } </Typography>
    <OnboardCompany />
    </>

  )
}

export default Multi
