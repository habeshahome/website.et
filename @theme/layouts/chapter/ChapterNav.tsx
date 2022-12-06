import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { ChapterNavProps } from '../../../types/interfaceTypes'

const ChapterNav = ({ chapter = '', children, items = [] }: ChapterNavProps): JSX.Element => {
  return (
    <Box
      component='div'
      sx={{
        position: 'sticky',
        top: 0,
        width: '100%',
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 9
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
          <Typography variant='h6' component='h1'> { chapter }  </Typography>
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
            items.map((item) => (
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
