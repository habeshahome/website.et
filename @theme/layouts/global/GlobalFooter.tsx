import { Container } from '@mui/material'
import { Box } from '@mui/system'
// import { Box } from '@mui/system'
import React from 'react'
import GlobalDirectory from './GlobalDirecotry'
// import theme from '../../theme'

const GlobalFooter = (): JSX.Element => {
  return (
  <Container maxWidth='lg' component='footer' sx={{ p: 3 }}>
    <Box>
      <GlobalDirectory />

    </Box>
  </Container>
  )
}

export default GlobalFooter
