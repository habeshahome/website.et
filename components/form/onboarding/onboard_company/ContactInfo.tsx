import { FormControl, Input, InputLabel } from '@mui/material'
import FormWrapper from '../../FormWrapper'

interface FieldProps {
  contactPerson: string
  contactPhone: string
}

type ContactInfoProps = FieldProps & {
  updateFields: (fields: Partial<FieldProps>) => void
}

const ContactInfo = ({ contactPerson, contactPhone, updateFields }: ContactInfoProps): JSX.Element => {
  return (
    <FormWrapper title='Contact Info'>
        <FormControl
          variant="standard"
          sx={{
            m: 1,
            width: '39ch',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            gap: '1em',
            color: 'inherit'
          }}
            >
              <InputLabel htmlFor="contact-person"> Contact Person </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                id='contact-person'
                type='text'
                value={ contactPerson }
                onChange={ (e) => updateFields({ contactPerson: e.target.value }) }
                placeholder=''
                inputProps={{ tabIndex: 1 }}
                required
                fullWidth={ true }
              />

              <InputLabel htmlFor="contact-phone"> Contact Person </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                id='contact-phone'
                type='text'
                value={ contactPhone }
                onChange={ (e) => updateFields({ contactPhone: e.target.value }) }
                placeholder=''
                inputProps={{ tabIndex: 1 }}
                required
                fullWidth={ true }
              />
            </FormControl>
    </FormWrapper>
  )
}

export default ContactInfo
