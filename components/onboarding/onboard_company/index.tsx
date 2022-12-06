import { Box, Button, FormGroup, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { FormEvent, useState } from 'react'
import useMultiStepForm from '../../../hooks/useMultiStepForm'
import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import PaymentInfo from './PaymentInfo'
import ServiceInfo from './ServiceInfo'

interface FormData {
  companyName: string
  contactPerson: string
  serviceType: string
  paymentInfo: string
}

const initFormData: FormData = {
  companyName: '',
  contactPerson: '',
  serviceType: '',
  paymentInfo: ''
}

const OnboardCompany = (): JSX.Element => {
  const [formData, setFormData] = useState(initFormData)
  // I love TS
  function updateFields (fields: Partial<FormData>): void {
    setFormData(prev => {
      return { ...prev, ...fields }
    })
  }
  const steps = [
      <BasicInfo key={1} { ...formData } updateFields={ updateFields } />,
      <ContactInfo key={2} { ...formData } updateFields={ updateFields } />,
      <ServiceInfo key={3} { ...formData } updateFields={ updateFields } />,
      <PaymentInfo key={4} { ...formData } updateFields={ updateFields } />
  ]

  const {
    step, item, back, next, isLastStep, isFirstStep
  } =
    useMultiStepForm({
      steps
    })

  function onSubmit (e: FormEvent): void {
    e.preventDefault()
    if (isLastStep === false) next()
  }

  return (
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>

      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 'max-content',
          maxHeight: 'max-content',
          background: 'transparent',
          borderRadius: 6,
          p: 3,
          mx: 'auto',
          my: 'auto'
        }}
      >
        <p> { String(formData.companyName) }  </p>
        <p> { String(formData.contactPerson) }  </p>
        <p> { String(formData.paymentInfo) }  </p>
        <p> { String(formData.serviceType) }  </p>
        <Typography variant='h5'> Progress { (step / (steps.length - 1)) * 100 } </Typography>
        <Typography variant='h5'> { step } { String(isLastStep) } </Typography>

        <FormGroup onSubmit={onSubmit}>
          { item }

        <Box sx={{ display: 'inline-flex', gap: 3, py: 6, justifyContent: 'flex-end' }}>
          { isFirstStep === false && <Button variant='contained' color='info' size='large' onClick={ back }> Back </Button> }
          <Button variant='contained' color='info' size='large' onClick={onSubmit} sx={{ ml: 'auto' }}>
            { isLastStep === true ? 'Finish' : 'Next' }
          </Button>
        </Box>

        </FormGroup>
      </Paper>

    </Container>
  )
}

export default OnboardCompany
