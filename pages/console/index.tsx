import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import AuthContext from '../../context/AuthProvider'

const Console = (): JSX.Element => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <Box>
      <Typography variant="h2" align="center"> Console Auth </Typography>
      {
        isLoggedIn && <Typography variant='h5' color='success'> User Logged In </Typography>
      }
    </Box>
  )
}

export default Console
