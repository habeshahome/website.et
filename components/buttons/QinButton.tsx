import { Button } from '@mui/material'
import React from 'react'
import { ButtonProps } from '../../types/interfaceTypes'

const QinButton = ({ label = '' }: ButtonProps): JSX.Element => {
  return (
    <Button>
      { label.length > 0 ? label : 'Qin Button' }
    </Button>
  )
}

export default QinButton
