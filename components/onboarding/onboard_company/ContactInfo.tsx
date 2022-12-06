import { FormControl, Input, InputLabel } from '@mui/material'
import FormWrapper from '../../form/FormWrapper'

interface FieldProps {
  contactPerson: string
}

type ContactInfoProps = FieldProps & {
  updateFields: (fields: Partial<FieldProps>) => void
}

const ContactInfo = ({ contactPerson, updateFields }: ContactInfoProps): JSX.Element => {
  return (
    <FormWrapper title='Contact Info'>
        <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="username-input"> Contact Person </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                type='text'
                value={ contactPerson }
                onChange={ (e) => updateFields({ contactPerson: e.target.value }) }
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
