import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { Box } from '@mui/system'
import OnboardingForm from '../../components/form/OnboardingForm'

export default function Onboarding (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <motion.div>
      <Head>
        <title>website.et</title>
        <meta name="description" content="Website Developer in Ethiopia, Digital Marketing in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        <Box>
          <motion.div animate={{ x: 100 }} />
          <OnboardingForm />
        </Box>
      </Box>

    </motion.div>
  )
}
