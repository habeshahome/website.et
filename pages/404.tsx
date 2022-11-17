import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import theme from '../@theme/theme'

const PageNotFound = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
      }}>
        <Box>
          <Typography variant='h1' component='div' align='center'>
              404 <br/>
              <Typography variant='h6' component='div'>
                Page Not Found <br/><br/><br/>
                <Link href='/'> Return Home </Link>
              </Typography>
          </Typography>
        </Box>

    </Box>
  )
}

export default PageNotFound
