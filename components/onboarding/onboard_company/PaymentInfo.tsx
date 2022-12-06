import { FormControl, Input, InputLabel } from '@mui/material'
import FormWrapper from '../../form/FormWrapper'

interface FieldProps {
  paymentInfo: string
}

type PaymentInfoProps = FieldProps & {
  updateFields: (fields: Partial<FieldProps>) => void
}

const PaymentInfo = ({ paymentInfo, updateFields }: PaymentInfoProps): JSX.Element => {
  return (
    <FormWrapper title='Payment Info'>
        <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="username-input"> Payment Info </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                type='text'
                value={ paymentInfo }
                onChange={ (e) => updateFields({ paymentInfo: e.target.value }) }
                placeholder=''
                inputProps={{ tabIndex: 1 }}
                required
                fullWidth={ true }
              />
            </FormControl>
    </FormWrapper>
  )
}

export default PaymentInfo
