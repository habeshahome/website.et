import { FormControl, Input, InputLabel } from '@mui/material'
import FormWrapper from '../../form/FormWrapper'

interface FieldProps {
  serviceType: string
}

type ServiceInfoProps = FieldProps & {
  updateFields: (fields: Partial<FieldProps>) => void
}

const ServiceInfo = ({ serviceType, updateFields }: ServiceInfoProps): JSX.Element => {
  return (
    <FormWrapper title='Service Info'>
        <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="username-input"> Service Info </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                type='text'
                value={ serviceType }
                onChange={ (e) => updateFields({ serviceType: e.target.value }) }
                placeholder=''
                inputProps={{ tabIndex: 1 }}
                required
                fullWidth={ true }
              />
            </FormControl>
    </FormWrapper>
  )
}

export default ServiceInfo
