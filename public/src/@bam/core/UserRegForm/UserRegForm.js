import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import _ from '@lodash';
import clsx from 'clsx';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { DateTimePicker } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import axios from 'axios'

const Input = styled('input')({
  display: 'none',
});

let renderCount = 0;
 
const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  avatar: ''
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  firstName: yup.string().required('You must enter a Name'),
  firstName: yup.string().required('You must enter a Last Name'),
  email: yup.string().email().required('You must enter valid Email'),
  username: yup.string().lowercase("Use Only Lowecase").required('Invalid Username'),
});

function UserRegForm(props) {
   
  const { handleSubmit, register, reset, control, watch, formState } = useForm({
    defaultValues,
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors, touchedFields } = formState;

  renderCount += 1;

  const data = watch();

  const handleRegistration = async (data) => {
    console.log(data)
    const res = await axios.post("https://62bb78d37bdbe01d529e13c5.mockapi.io/api/users", data)
    console.log(res)
    reset(defaultValues);
    props.close();
  }


  return (
    <>
    <div className="flex flex-col w-full max-w-screen-md justify-start items-start">
      <div className="w-full flex h-96 bg-gray-100 text-center items-center justify-center shadow-sm"> 
        <div> 
          <p>  </p>
        </div>
        <div className="fixed top-12 right-24 cursor-pointer"> 
          <h1 onClick={props.close()}> 
            <CloseIcon /> 
          </h1>
        </div>
      </div>
      
      <form className="w-full p-36" onSubmit={handleSubmit((_data) => handleRegistration(_data))}>
        
        <div className="text-center"> 
            <h2 className="font-bold"> Add User </h2>
        </div>

        {/** MUI Text Field */}
        <div className="mt-36 mb-16">
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                error={!!errors.TextField}
                helperText={errors?.TextField?.message}
                required
                fullWidth
              />
            )}
            name="firstName"
            control={control}
          />
        </div>

        <div className="mt-36 mb-16">
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                error={!!errors.TextField}
                helperText={errors?.TextField?.message}
                required
                fullWidth
              />
            )}
            name="lastName"
            control={control}
          />
        </div>

        <div className="mt-36 mb-16">
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Username"
                variant="outlined"
                error={!!errors.TextField}
                helperText={errors?.TextField?.message}
                required
                fullWidth
              />
            )}
            name="username"
            control={control}
          />
        </div>

        <div className="mt-36 mb-16">
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                label="Email"
                variant="outlined"
                error={!!errors.EmailField}
                helperText={errors?.EmailField?.message}
                required
                fullWidth
              />
            )}
            name="email"
            control={control}
          />
        </div>
        
        <div className="mt-36 mb-16 mx-auto"> 
          <Stack direction="row" alignItems="center" spacing={8}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" name="avatar"/>
              <Button variant="contained" component="span">
                Upload Avatar
              </Button>
            </label>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" name="avatar"/>
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </Stack>
        </div>

        <div className="flex w-full flex-row justify-between my-48 items-center">
          <Button
            className="mx-8"
            variant="contained"
            color="primary"
            type="submit"
            disabled={_.isEmpty(dirtyFields) || !isValid}
          >
            Add User
          </Button>

          <Button
            className="mx-8"
            type="button"
            onClick={() => {
              reset(defaultValues);
            }}
          >
            Clear
          </Button> 
        </div>
      </form>

    </div>

    </>
  );
}

export default UserRegForm;



/**
 * 


      <div className="w-1/2 my-48 p-24">
        <div className="mb-12">
          <Typography>Is Valid: {isValid ? 'true' : 'false'}</Typography>
        </div>

        <div className="mb-12">
          <Typography>Form data</Typography>
        </div>

        <div className="mb-12">
          <pre className="language-js p-24 w-400">{JSON.stringify(data, null, 2)}</pre>
        </div>

        <div className="mb-12">
          <Typography>Touched fields</Typography>

          <pre className="language-js p-24 w-400">{JSON.stringify(touchedFields, null, 2)}</pre>
        </div>

        <div className="mb-12">
          <Typography className="mt-16 font-medium text-12 italic" color="text.secondary">
            Render Count: {renderCount}
          </Typography>
        </div>
      </div> 
      
const options = [
  {
    value: 'chocolate',
    label: 'Chocolate',
  },
  {
    value: 'strawberry',
    label: 'Strawberry',
  },
  {
    value: 'vanilla',
    label: 'Vanilla',
  },
];
 const defaultValues = {
  Native: '',
  TextField: '',
  Select: '',
  Autocomplete: [],
  Checkbox: false,
  Switch: false,
  RadioGroup: '',
  DateTimePicker: '',
};

 const schema = yup.object().shape({
  TextField: yup.string().required('You must enter a value'),
  EmailField: yup.string().required('You must enter valid email'),
  Native: yup.string().required('You must enter a value'),
  Select: yup.string().required('You must select a value').oneOf(['20', '30'], 'Select 20 or 30.'),
  Checkbox: yup.boolean().oneOf([true], 'You must check.'),
  Switch: yup.boolean().oneOf([true], 'You must turn it on.'),
  RadioGroup: yup.string().oneOf(['female'], 'You must select female.'),
  Autocomplete: yup.array().min(2, 'Select at least two.'),
  DateTimePicker: yup.string().nullable().required('You must select a date'),
});

 <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">Native Input:</Typography>

          <input
            className={clsx('border-1 outline-none rounded-8 p-8', !!errors.Native && 'border-red')}
            {...register('Native')}
            required
          />

          {!!errors.Native && (
            <Typography className="px-4 py-8 font-medium text-14" color="error">
              {errors?.Native?.message}
            </Typography>
          )}
        </div>

        <div className="mt-48 mb-16">
          <Controller
            name="Checkbox"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <FormControl error={!!errors.Checkbox} required>
                <FormLabel className="font-medium text-14" component="legend">
                  MUI Checkbox
                </FormLabel>
                <FormControlLabel
                  label="I agree"
                  control={
                    <Checkbox
                      checked={value}
                      onBlur={onBlur}
                      onChange={(ev) => onChange(ev.target.checked)}
                      inputRef={ref}
                      required
                    />
                  }
                />
                <FormHelperText>{errors?.Checkbox?.message}</FormHelperText>
              </FormControl>
            )}
          />
        </div>

        <div className="mt-48 mb-16">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.RadioGroup} required>
                <FormLabel className="font-medium text-14" component="legend">
                  Radio Group
                </FormLabel>
                <RadioGroup {...field} aria-label="gender" name="gender1">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                <FormHelperText>{errors?.RadioGroup?.message}</FormHelperText>
              </FormControl>
            )}
            name="RadioGroup"
            control={control}
          />
        </div>

                <div className="mt-48 mb-16">
          <Controller
            name="Switch"
            type="checkbox"
            control={control}
            render={({ field: { onChange, value, ref, onBlur } }) => (
              <FormControl required error={!!errors.Switch}>
                <FormLabel className="font-medium text-14" component="legend">
                  MUI Switch
                </FormLabel>
                <Switch
                  checked={value}
                  onBlur={onBlur}
                  onChange={(ev) => onChange(ev.target.checked)}
                  inputRef={ref}
                  required
                />
                <FormHelperText>{errors?.Switch?.message}</FormHelperText>
              </FormControl>
            )}
          />
        </div>


             <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">Autocomplete</Typography>
          <Controller
            name="Autocomplete"
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, value, onBlur, ref } }) => (
              <Autocomplete
                className="mt-8 mb-16"
                multiple
                freeSolo
                options={options}
                value={value}
                onChange={(event, newValue) => {
                  onChange(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select multiple tags"
                    label="Tags"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={!!errors.Autocomplete}
                    helperText={errors?.Autocomplete?.message}
                    onBlur={onBlur}
                    inputRef={ref}
                  />
                )}
              />
            )}
          />
        </div>


   

        <div className="mt-48 mb-16">
          <Typography className="mb-24 font-medium text-14">DateTimePicker</Typography>

          <Controller
            name="DateTimePicker"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <DateTimePicker
                value={value}
                onChange={onChange}
                required
                renderInput={(_props) => (
                  <TextField
                    className="w-full"
                    {..._props}
                    onBlur={onBlur}
                    error={!!errors.DateTimePicker}
                    helperText={errors?.DateTimePicker?.message}
                  />
                )}
                className="w-full"
              />
            )}
          />
        </div>


                <div className="mt-48 mb-16">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                <FormLabel className="font-medium text-14" component="legend">
                  MUI Select
                </FormLabel>
                <Select {...field} variant="outlined" fullWidth>
                  <MenuItem value="Staff">Staff</MenuItem>
                  <MenuItem value="Member">Member</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="SuperAdmin">Super Admin</MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
 */