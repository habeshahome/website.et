import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ReactNode } from 'react'

interface FormWrapperProps {
  title?: string
  children: ReactNode
}

const FormWrapper = ({ title, children }: FormWrapperProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 'max-content',
        minWidth: 'min-content',
        mx: 'auto'
      }}
    >
      <Typography variant='h3'> { title } </Typography>
      { children }
    </Box>
  )
}
export default FormWrapper
