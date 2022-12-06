import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Layout1 from '../../@theme/layouts/layout1'

export default function Services (): JSX.Element {
  return (
    <Layout1>
      <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h1'> Reactive - Micro-Services</Typography>
      </Box>
    </Layout1>
  )
}
