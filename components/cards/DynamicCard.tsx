import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
// import { useInView } from 'react-intersection-observer'
import { DynamicCardProps } from '../../types/interfaceTypes'
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const DynamicCard = ({ items, leadHeader = '', mainHeader = '', width = 'auto', height = 'auto' }: DynamicCardProps): JSX.Element => {
  const ref = useRef()

  return (
    <Box
      sx={{
        py: 6,
        mx: 'auto',
        initial: 'initial',
        animate: 'animate'
      }}
      >
      <Typography
        component='h1'
        align='left'
        sx={{
          typography: { xs: 'h4', sm: 'h3', lg: 'h2' },
          display: 'block',
          px: 3,
          pl: 6
        }}
      >
        <Typography
        variant='inherit'
        sx={{
          fontWeight: 'bold',
          letterSpacing: 1,
          display: 'inline-block'
        }}
        > { leadHeader } &nbsp; </Typography>
        <Typography
          variant='inherit'
          color='text.secondary'
          sx={{ display: 'inline-block' }}
        >
          { mainHeader }
        </Typography>
      </Typography>
      <Box
        component='div'
        sx={{
          display: 'block',
          width: '100%',
          overflow: 'hidden'
        }}
      >

        <Box
          component='div'
          ref={ ref }
          sx={{
            display: 'block',
            overflowX: 'scroll',
            msOverflowX: 'scroll',
            scrollSnapAlign: 'start',
            whiteSpace: 'nowrap',
            boxSizing: 'content-box',
            p: 6
          }}
        >
          {
          items.map((item) => (
            <Paper
              elevation={ 9 }
              component= { motion.div }
              key={ Math.random()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 0.9 }}
              sx={{
                display: 'inline-block',
                width,
                height,
                borderRadius: 6,
                p: 3,
                mr: 6,
                background: 'transparent',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('${item?.img}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                cursor: 'grab',
                whiteSpace: 'normal'
              }}
            >
              <Typography
                variant='overline'
                color='text.secondary'
                sx={{ letterSpacing: 1.7 }}
              > {item.tag} </Typography>
              <Typography variant='h5' sx={{}}> { item.title } </Typography>
              <Typography variant='body1'> { item.caption } </Typography>
            </Paper>
          ))
        }
        </Box>

      </Box>
    </Box>
  )
}

export default DynamicCard
