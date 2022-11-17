import { Button, Icon, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'
import BrandLogo from '../../@theme/layouts/global/BrandLogo'

const WebsiteBanner = (): JSX.Element => {
  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        p: 3
      }}>
      <Box
        sx={{
          flex: 1,
          order: { xs: 2, sm: 1 },
          display: 'flex',
          flexDirection: { xs: 'column' },
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          gap: 1
        }}>
          <Typography variant='h1' component='h1' align='center'>
            Website
          </Typography>
          <BrandLogo width={136} height={18} roast={false}/>
          <Typography variant='h6' component='h2' align='center'>
            Design. Development. Traffic.
          </Typography>
          <br/>
          <Button variant='contained' color='info'>
            Check Pricing
          </Button>
            <Link href='/website'>
              <Box sx={{ display: 'inline-flex' }}>
                <Typography variant='body1' gutterBottom={ true }>
                  Learn more
                </Typography>
                <Icon component='span'>
                  <NavigateNextOutlinedIcon fontSize='small'/>
                </Icon>
              </Box>
            </Link>
      </Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          order: { xs: 2, sm: 1 },
          width: '100%',
          height: '100%'
        }}>
        <Image
          src={'/img/design.svg'}
          sizes={''}
          alt=''
          fill
          />
      </Box>
    </Box>
  )
}

export default WebsiteBanner
