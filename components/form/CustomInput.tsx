// import { Visibility, VisibilityOff } from "@mui/icons-material"
// import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material"

// interface InputProps {
//   label: string
//   type: string
//   errMsg: string
//   regx: RegExp
//   states: {
//     value: string
//     focus: boolean
//     valid: boolean
//     onChange: void
//     onFocus: void
//     onBluer: void
//   }
// }

// const CustomInput = (props: InputProps) => {
//   return (
//     <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
//               <InputLabel htmlFor="password-input">Password </InputLabel>
//               <Input
//                 sx={{
//                   fontSize: '1.3rem'
//                 }}
//                 id='password-input'
//                 type={ showPwd ? 'text' : 'password' }
//                 placeholder=''
//                 value={ pwd }
//                 onChange={ (e) => setPwd(e.target.value) }
//                 autoFocus= { pwdFocus }
//                 onFocus={ () => setPwdFocus(true)}
//                 onBlur={ () => setPwdFocus(false)}
//                 fullWidth={ true }
//                 endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={ () => setShowPwd(true) }
//                         onMouseDown={ () => setShowPwd(false) }
//                         edge="end"
//                       >
//                         {showPwd ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//               />
//               {
//                 (!validPwd && !pwdFocus) &&
//                    <FormHelperText error={ !validPwd }>
//                     Must contain Capital Letter/s, Small Letters, Special Characters, Numbers for maximum security
//                   </FormHelperText>
//               }
//             </FormControl>
//   )
// }

// export CustomInput
export {}
