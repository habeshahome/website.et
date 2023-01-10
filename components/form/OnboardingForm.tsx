import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import OnboardCompany from './onboarding/onboard_company'

export default function OnboardingForm (): JSX.Element {
  return (
    <>
      <Head>
          <title> Sign in - website.et </title>
      </Head>

    <Box
      component='form'
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateRows: '10vh auto',
        p: 3
      }}
    >
      <Typography variant='h3' align='center'> Welcome Aboard !</Typography>

      <Box
        component='div'
        sx={{
          display: 'grid',
          gridTemplateColumns: ''
        }}
      >
        <OnboardCompany />
      </Box>

    </Box>
    </>
  )
}
