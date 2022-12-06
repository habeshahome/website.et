import React from 'react'
import { motion } from 'framer-motion'
import { Container, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
// import { Box } from '@mui/system'
// import GlobalDirectory from './GlobalDirecotry'
// import theme from '../../theme'

const GlobalFooter = (): JSX.Element => {
  return (
    <Box
      component={ motion.section }
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 1.01 }}
      sx={{
        py: 3,
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(\'/brand/logo.svg\')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundOrigin: 'center',
        backgroundBlendMode: 'darken'
      }}
    >
      <Container>
        <Box sx={{ minHeight: '9vh' }}>

       </Box>
        <Divider sx={{ mt: 6 }}/>
        <Box sx={{ py: 3 }} component={ motion.div } whileHover={{ letterSpacing: '1px' }}>
          <Typography variant='body2' align='center'>
            Copyright &copy; {new Date().getFullYear()} website.et  &nbsp; &nbsp; &nbsp; All rights reserved!
          </Typography>
        </Box>
      </Container>
  </Box>
  )
}

export default GlobalFooter
/**
 *   { name: 'Partner', slug: '/partner', img: '' }
 */
