
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer' // import {useInView} tells the dom when something is in viewport
import { motion, useAnimation } from 'framer-motion' // import {motion,useAnimation}

interface InViewWrapperProps {
  children: React.ReactNode
}

const nameVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.3
    }
  }
}

const InViewWrapper = ({ children }: InViewWrapperProps): JSX.Element => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      control.start('visible') // when in view,start the visible animation variant
    } else {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      control.start('hidden') // else its hidden
    }
  }, [control, inView])

  return (
    <motion.div
          ref={ref} // pass the ref to tell rio what is being checked
          variants={nameVariant} // pass in your variant
          initial="hidden" // pass initial values
          animate={control} // pass in control as it will be animated when element is in view
    >
      { children }
    </motion.div>
  )
}

export default InViewWrapper
