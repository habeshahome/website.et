import { Box } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { LayoutProps } from '../../../types/interfaceTypes'
import { useRouter } from 'next/router'

const wrapperVariants = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { // Orchastrate transition
      duration: 1,
      delay: 0.3,
      type: 'spring',
      mass: 0.4,
      dumping: 4,
      when: 'beforeChildren',
      staggerChildren: 0.09 // seconds
    }
  },
  exit: {
    background: 'white',
    filter: 'blur(20px)',
    opacity: 0,
    transition: {
      duration: 4,
      delay: 4,
      ease: 'easeInOut'
    }
  }
}

const Wrapper = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter()

  return (
    <AnimatePresence mode='wait'>
      <Box
        component={motion.div}
        key={ router.route }
        variants={wrapperVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
          { children }
      </Box>
    </AnimatePresence>
  )
}

export default Wrapper
