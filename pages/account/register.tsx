import React, { useState, useEffect, useRef } from 'react'
import
{
  FormControl, IconButton, InputAdornment, Input,
  Typography, InputLabel, ButtonGroup, Button, FormHelperText, Container
} from '@mui/material'
import { Box } from '@mui/system'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import CheckIcon from '@mui/icons-material/Check'
import theme from '../../@theme/theme'
import axios from '../../@config/axios'
import { useSnackbar, VariantType } from 'notistack'
import Link from 'next/link'
// import axios from '../../@config/axios'

// configuring regex for inputs
const USERNAME_REGX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/
const EMAIL_REGX = /^([a-zA-Z0-9_.-]+)@([\da-zA-Z.-]+)\.([a-zA-Z.]{2,63})$/
const PASSWORD_REGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const Register = (): JSX.Element => {
  // const { auth, setAuth } = useContext(AuthContext)
  // declaring references
  const userRef = useRef() // to focus on username

  // declaring input states (aka, Controlled Inputs)
  const [user, setUser] = useState('')
  const [userFocus, setUserFocus] = useState(false)
  const [validUsername, setValidUsername] = useState(false)

  const [email, setEmail] = useState('')
  const [emailFocus, setEmailFocus] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  const [pwd, setPwd] = useState('')
  const [pwdFocus, setPwdFocus] = useState(false)
  const [validPwd, setValidPwd] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [matchFocus, setMatchFocus] = useState(false)
  const [validMatch, setValidMatch] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const [showPwd, setShowPwd] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const { enqueueSnackbar } = useSnackbar()

  const Notify = (msg: string, variant: VariantType): void => {
    enqueueSnackbar(msg, { variant })
  }

  function resetForm (): void {
    setUser('')
    setValidUsername(false)
    setPwd('')
    setValidPwd(false)
    setMatchPwd('')
    setValidMatch(false)
  }
  // const saveForLater() -- to save data in local storage

  const handleSubmit = async (): Promise<any> => {
    setIsLoading(true) // show some loading animation
    Notify('Registration Form Submitted', 'success')
    const REGISTER_URL = '/register'
    console.log('Handling Form Submission')
    try {
      await axios.post(
        REGISTER_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
        .then((response) => {
          console.log(response.data)
        })
        .then((data) => {
          setSuccess(true)
          console.log(success)
          console.log(data)
          resetForm()
          return data
        })
        .catch((err) => {
          setErrMsg(err.response.data)
          console.error(errMsg)
        })
    } catch (err) {
      console.log(err)
      console.error('Something went wrong')
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    }
  }

  useEffect(() => {
    // focus on user input on start of application
    // userRef.current.focus()
    console.log(userRef.current)
  }, [])

  useEffect(() => {
    const result = EMAIL_REGX.test(email)
    result ? setValidEmail(true) : setValidEmail(false)
  }, [email])

  useEffect(() => {
    const result = USERNAME_REGX.test(user)
    result ? setValidUsername(true) : setValidUsername(false)
  }, [user])

  useEffect(() => {
    const result = PASSWORD_REGX.test(pwd)
    result ? setValidPwd(true) : setValidPwd(false)
    // validate for password match
    const match = pwd === matchPwd // check match returns
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('') // clearing errors
  }, [user, pwd, matchPwd])

  return (
    <Box sx={{ width: 1 }}>
      {/** Custom Navigation */}
    {/* <GlobalNav brand='website.et'/> */}

    <Container maxWidth='xl' disableGutters>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >

        {/** Register Page Marketing Section */}
        <Box
          sx={{
            order: 2,
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant='h1' align='center'>
            Safe & Secure
          </Typography>
        </Box>

        {/** Registration Form */}
        <Box
            component="form"
            sx={{
              order: 1,
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              height: '100vh',
              gap: 1,
              marginInline: 'auto',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            noValidate
            autoComplete="off"
          >
            <Box
              component='div'
              sx={{
                mt: 6,
                mb: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 1
              }}
            >
              <Typography variant='h3' align='center'>
                Create Account
              </Typography>

              <Typography variant='caption' component='div' align='center' sx={{ mb: 3 }}>
                One Qintot ID is all you need to access all Qintot services.
              </Typography>

              <Typography align='center' component='span'> Already have Qintot ID?
                <Typography sx={{ px: 2, color: theme.palette.secondary.main }}>
                  <Link href='/account/signin'> Sign in here </Link>
                </Typography>
              </Typography>
            </Box>

            <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="username-input">Username </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                id='username-input'
                type='text'
                value={ user }
                inputRef={ userRef }
                onChange={ (e) => setUser(e.target.value) }
                onFocus={ () => setUserFocus(true)}
                onBlur={ () => setUserFocus(false)}
                placeholder=''
                inputProps={{ tabIndex: 1 }}
                required
                fullWidth={ true }
                endAdornment={
                  validUsername &&
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={ () => {}}
                        onMouseDown={ () => {}}
                        edge="end"
                      >
                        <CheckIcon />
                      </IconButton>
                    </InputAdornment>
                  }
              />
              {
                (!validUsername && userFocus) &&
                  <FormHelperText error={ !validUsername }>
                    Minimun 3 characters, Special Characters are not valid, except underscore _
                  </FormHelperText>
              }
            </FormControl>

            <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="email-input">Email </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                id='email-input'
                type='email'
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                onFocus={ () => setEmailFocus(true)}
                onBlur={ () => setEmailFocus(false)}
                placeholder=''
                inputProps={{ tabIndex: 2 }}
                required
                fullWidth={ true }
                endAdornment={
                  validEmail &&
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={ () => {}}
                        onMouseDown={ () => {}}
                        edge="end"
                      >
                        <CheckIcon />
                      </IconButton>
                    </InputAdornment>
                  }
              />
              {
                (!validEmail && emailFocus) &&
                  <FormHelperText error={ !validEmail }>
                    Invalid Email
                  </FormHelperText>
              }
            </FormControl>

            <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="password-input">Password </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                id='password-input'
                type={ showPwd ? 'text' : 'password' }
                placeholder=''
                value={ pwd }
                onChange={ (e) => setPwd(e.target.value) }
                autoFocus= { pwdFocus }
                onFocus={ () => setPwdFocus(true)}
                onBlur={ () => setPwdFocus(false)}
                fullWidth={ true }
                endAdornment={
                  /** this is nonsense - review this logic! */
                  (pwdFocus || showPwd || !showPwd) &&
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={ () => setShowPwd(true) }
                        onMouseDown={ () => setShowPwd(false) }
                        edge="end"
                      >
                        { showPwd ? <VisibilityOff /> : <Visibility /> }
                      </IconButton>
                    </InputAdornment>
                  }
              />
              {
                (!validPwd && pwdFocus) &&
                   <FormHelperText error={ !validPwd }>
                    Must contain Capital Letter/s, Small Letters, Special Characters, Numbers for maximum security
                  </FormHelperText>
              }
            </FormControl>

            <FormControl sx={{ m: 1, width: '39ch' }} variant="standard">
              <InputLabel htmlFor="repeat-password-input">Repeat Password </InputLabel>
              <Input
                sx={{
                  fontSize: '1.3rem'
                }}
                id='repeat-password-input'
                type={ showPwd ? 'text' : 'password' }
                placeholder=''
                value={ matchPwd }
                onChange={ (e) => setMatchPwd(e.target.value)}
                onFocus={ (e) => setMatchFocus(true)}
                onBlur={ (e) => setMatchFocus(false)}
                endAdornment={
                  (validPwd && validMatch) &&
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={ () => {}}
                        onMouseDown={ () => {}}
                        edge="end"
                      >
                        <CheckIcon />
                      </IconButton>
                    </InputAdornment>
                  }

              />
               {
                (!validMatch && matchFocus) &&
                  <FormHelperText error={ !validMatch }>
                    Password didn&apos;t match
                  </FormHelperText>
              }
              <Button
                sx={{ mt: 9, p: 2 }}
                variant='contained'
                size='large'
                color='success'
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={ handleSubmit }
                disabled={ (!validUsername || !validEmail || !validPwd || !validMatch || isLoading) }
              >
                 { isLoading ? 'Processing...' : 'Register'}
              </Button>
            </FormControl>

            <Box sx={{ mt: 3, py: 3 }}>
              <Typography
                variant='h6'
                sx={{ marginBottom: '1rem' }}
                > Register with</Typography>
              <ButtonGroup
                size='large'
                color='inherit'
                orientation='horizontal'
                variant='text'
                disableElevation
                disableRipple
                classes={{ }}
                >
                <Button fullWidth startIcon={<FacebookIcon />}> Facebook </Button>
                <Button fullWidth startIcon={<GoogleIcon />}> Google </Button>
                <Button fullWidth startIcon={<FingerprintIcon />}> Qintot </Button>
              </ButtonGroup>
          </Box>
        </Box>
      </Box>

      </Container>
    </Box>
  )
}

export default Register
