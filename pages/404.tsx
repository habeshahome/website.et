import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'

const PageNotFound = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url(\'/brand/logo.svg\')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundOrigin: 'center',
        backgroundBlendMode: 'darken'
      }}>
        <Paper
          elevation={16}
          sx={{
            width: '300px',
            height: '300px',
            mx: 'auto',
            p: 3,
            background: 'none',
            borderRadius: 6
          }}
        >
          <Typography
            variant='h1'
            component='div'
            align='center'
            sx={{
              fontWeight: 'bold',
              color: 'transparent',
              background: 'linear-gradient(#ff3333, #33ff33)',
              backgroundClip: 'text',
              fontSize: '6rem'
            }}
          >
              404 <br/>
              <Typography
                variant='h6'
                component='div'
                sx={{ }}
              >
                resource not found <br/>
                ወፍ የለም !
                <br/><br/>
                <Link href='/'>
                  <Button
                    variant='outlined'
                    size='small'
                    color='success'> Take me back </Button>
                </Link>
              </Typography>
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            position: 'absolute',
            width: '100%',
            bottom: '0',
            background: 'none',
            p: 3
          }}>
          <Typography
            variant='body2'
            component='div'
            align='center'
            sx={{
              position: 'relative',
              mx: 'auto',
              color: 'transparent',
              background: 'linear-gradient(#333, #333)',
              backgroundClip: 'text',
              letterSpacing: 1
            }}
          >
            Whatever is true, whatever is noble, whatever is right, whatever is pure,
            whatever is lovely, whatever is admirable--if anything is excellent or praiseworthy...
            Think about such things.
          </Typography>
        </Paper>
    </Box>
  )
}

export default PageNotFound
