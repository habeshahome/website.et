import { motion } from 'framer-motion'
import { Container, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
// import BrandLogo from '../../@theme/layouts/global/BrandLogo'
import { MarketPlaceBannerProps } from '../../types/interfaceTypes'
import Link from 'next/link'

const cardVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const MarketPlaceBanner = ({ items, leadHeader, mainHeader }: MarketPlaceBannerProps): JSX.Element => {
  return (
    <>
    <Container
      sx={{
        minHeight: '33vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        p: 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          height: 'auto',
          gap: 3,
          p: 3
        }}>
          <Box sx={{ }}>
            <Typography
              component='h1'
              align='left'
              sx={{
                typography: { xs: 'h4', sm: 'h3', lg: 'h2' },
                display: 'inline'
              }}
            >
              <Typography
              variant='inherit'
              sx={{
                fontWeight: 'bold',
                letterSpacing: 1,
                display: 'inherit',
                cursor: 'pointer'
              }}
              > {leadHeader} &nbsp;</Typography>
              <Typography
                variant='inherit'
                color='text.secondary'
                sx={{ display: 'inherit' }}
              >
                {mainHeader}
              </Typography>
            </Typography>
          </Box>

          <Box
            sx={{
              my: 3,
              width: '300px',
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'right' }
            }}
          >
            {/* <Link href='/onboarding'>
              <Button
                variant='contained'
                size='large'
                sx={{}}> Start a Project </Button>
            </Link> */}
          </Box>
      </Box>
    </Container>

    <Box
        component='div'
        sx={{
          display: 'block',
          overflow: 'hidden',
          width: '100%',
          mx: 'auto'
        }}
      >
        <Box
          sx={{
            mt: { xs: 0, sm: 6 },
            display: 'block',
            overflowX: 'scroll',
            msOverflowX: 'scroll',
            scrollSnapAlign: 'start',
            whiteSpace: 'nowrap',
            boxSizing: 'content-box',
            p: 3,
            mx: 'auto'
          }}
        >
          {
            items?.map((service) => (
            <Link
              key={service.name}
              href={ service.slug }
              scroll={ false }
            >
              <Paper
                component= { motion.section }
                elevation={6}
                variants= { cardVariants }
                whileHover={{ scale: 0.9 }}
                sx={{
                  display: 'inline-block',
                  borderRadius: 6,
                  p: 3,
                  mr: 9,
                  width: '300px',
                  height: '130px',
                  background: 'transparent',
                  cursor: 'pointer'
                }}
              >
                <Paper
                  elevation={0}
                  sx={{ height: '130px', background: 'none' }}
                >
                  <Typography variant='h3' align='center' noWrap>
                    { service.desc }
                  </Typography>
                    <Typography
                      variant='h6'
                      component='h2'
                      align='center'
                      noWrap
                      sx={{ display: 'block', letterSpacing: 1.3 }}
                    >
                      { service.name }
                    </Typography>
                </Paper>
              </Paper>
            </Link>
            ))
          }
        </Box>
      </Box>
      </>
  )
}

export default MarketPlaceBanner

/*

*/
