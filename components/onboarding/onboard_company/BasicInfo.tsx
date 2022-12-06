import { FormControl, Input, InputLabel } from '@mui/material'
import FormWrapper from '../../form/FormWrapper'

interface FieldProps {
  companyName: string
}

type BasicInfoProps = FieldProps & {
  updateFields: (fields: Partial<FieldProps>) => void
}

const BasicInfo = ({ companyName, updateFields }: BasicInfoProps): JSX.Element => {
  return (
    <FormWrapper title='Basic Info'>
        <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="username-input"> Company Name </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                type='text'
                value={ companyName }
                onChange={ (e) => updateFields({ companyName: e.target.value }) }
                placeholder=''
                inputProps={{ tabIndex: 1 }}
                required
                fullWidth={ true }
              />
            </FormControl>
    </FormWrapper>
  )
}

export default BasicInfo
