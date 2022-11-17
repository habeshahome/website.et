import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { ChapterNavProps } from '../../../types/interfaceTypes'

const ChapterNav = ({ chapter = '', children }: ChapterNavProps): JSX.Element => {
  console.log(chapter)
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: '100hw',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        backdropFilter: 'blur(20px)'
      }}
    >
      <Container maxWidth='xl'
        sx={{
          display: 'inline-flex',
          justifyContent: 'space-between',
          overflowX: { xs: 'none', sm: 'none' },
          msOverflowStyle: 'none',
          py: 3
        }}
      >
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
        >
        <Box>
          <Typography variant='h5' component='h1'>QINTOT ID  </Typography>
        </Box>
      </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {
            [
              { name: 'Contact', slug: '/account/signin' },
              { name: 'Sign in', slug: '/account/signin' }
            ].map((item) => (
              <Typography
                key={item.name}
                sx={{ pr: 3 }}
              >
                <Link href={item.slug}>
                    { item.name }
                </Link>
              </Typography>
            ))
          }
        </Box>
      </Container>
     </Box>
  )
}

export default ChapterNav
