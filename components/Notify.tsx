import * as React from 'react'
import Button from '@mui/material/Button'
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack'

function Notify (): JSX.Element {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = (): void => {
    enqueueSnackbar('I love snacks.')
  }

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant })
  }

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
    </React.Fragment>
  )
}

export default function INotify (): JSX.Element {
  return (
    <SnackbarProvider maxSnack={3}>
      <Notify />
    </SnackbarProvider>
  )
}
