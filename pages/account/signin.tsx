import
{
  FormGroup, Typography, Input, ButtonGroup, Button, InputAdornment, IconButton,
  FormControl
} from '@mui/material'
import { Box } from '@mui/system'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { GlobalFooter, GlobalNav } from '../../@theme/layouts/global'
import React, { useState, useEffect, useRef } from 'react'
import { signinUser } from '../../services/auth/SignInService'
import Head from 'next/head'
import Link from 'next/link'
import theme from '../../@theme/theme'

const EMAIL_REGX = /^([a-zA-Z0-9_.-]+)@([\da-zA-Z.-]+)\.([a-zA-Z.]{2,63})$/
const PASSWORD_REGX = /^.{8,24}$/

const SignIn = (): JSX.Element => {
  const emailRef = useRef()
  const [email, setEmail] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailFocus, setEmailFocus] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  const [pwd, setPwd] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pwdFocus, setPwdFocus] = useState(false)
  const [validPwd, setValidPwd] = useState(false)

  async function handleSignIn (): Promise<Object> {
    try {
      await signinUser(email, pwd)
    } catch (err) {
      console.error(err)
    } finally {
      console.log('Sign in Process Exited')
    }
    return {}
  }
  async function handleKeyDownSignin (event: React.KeyboardEvent): Promise<Object> {
    if (event.key === 'Enter') {
      console.log('Signing via Keyboard...')
      await handleSignIn()
    }
    return {}
  }

  useEffect(() => {
    // emailRef.current.focus()
  }, [])

  useEffect(() => {
    const result = EMAIL_REGX.test(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    const result = PASSWORD_REGX.test(pwd)
    setValidPwd(result)
  }, [pwd])

  return (
    <Box>
      <Head>
          <title> Sign in - website.et </title>
      </Head>
      <GlobalNav
        brand='Account'
        items={[{
          name: 'Contact',
          slug: '/',
          img: ''
        }]}
        />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
        <Box sx={{
          marginTop: '12rem',
          marginInline: 'auto'
        }}>
          <FormGroup>
            <Typography
              variant='h5'
              component='h1'
              align='center'
              sx={{ marginBottom: 2 }}
            >
              Sign in to website.et
            </Typography>
            <ButtonGroup
              component={'div'}
              size='medium'
              orientation='vertical'
              variant='outlined'
              disableRipple
            >
              <Button
                component={'div'}
                sx={{ paddingInline: 1 }}
                >
                <ButtonGroup
                    component={'div'}
                    size='large'
                    orientation='horizontal'
                    variant='text'
                    disableElevation
                    disableRipple
                    color='inherit'
                  >
                    <Button
                      component={'div'}
                      sx={{
                        paddingInline: 1
                      }}
                    >
                      <FormControl sx={{ width: '39ch' }} variant="standard">
                        <Input
                          id='email'
                          type='email'
                          autoFocus= { true }
                          value={ email }
                          onChange={ (e) => setEmail(e.target.value) }
                          onFocus={ () => setEmailFocus(true) }
                          onBlur={ () => setEmailFocus(false) }
                          placeholder='Email'
                          disableUnderline
                          required
                          fullWidth
                          inputRef={ emailRef }
                          sx={{
                            fontSize: '1.3rem',
                            paddingInline: 1
                          }}
                          inputProps={{ tabIndex: 1 }}
                        />
                        </FormControl>
                    </Button>

                  </ButtonGroup>
              </Button>

              { validEmail &&
              <Button
                component={'div'}
                sx={{ paddingInline: 1 }}
              >
                <ButtonGroup
                    component={'div'}
                    size='large'
                    orientation='horizontal'
                    variant='text'
                    disableElevation
                    disableRipple
                    color='inherit'
                    >
                      <Button
                      component={'div'}
                      sx={{
                        paddingInline: 1
                      }}
                      >
                        <FormControl sx={{ width: '39ch' }} variant="standard">
                          <Input
                            id='password'
                            type='password'
                            value={ pwd }
                            onChange={ (e) => setPwd(e.target.value) }
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onKeyDown= { handleKeyDownSignin }
                            onFocus={ () => setPwdFocus(true) }
                            onBlur={ () => setPwdFocus(false) }
                            placeholder='Password'
                            disableUnderline
                            required
                            fullWidth
                            sx={{
                              fontSize: '1.2rem'
                            }}
                            inputProps={{ tabIndex: 1 }}
                            endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={ () => handleSignIn }
                                      edge="end"
                                    >
                                      <ArrowCircleRightOutlinedIcon
                                        sx={{
                                          fontSize: '2rem',
                                          opacity: validPwd ? '1' : '0.3',
                                          color: theme.palette.action.active
                                        }}
                                        />
                                    </IconButton>
                                  </InputAdornment>
                                }
                            />
                          </FormControl>
                      </Button>
                    </ButtonGroup>
              </Button>
              }
            </ButtonGroup>
            <Box sx={{ mt: 3 }}>
              <Link href='/account/register'> Register </Link>
            </Box>
          </FormGroup>
        </Box>

        <Box
          sx={{
            marginInline: 'auto',
            marginTop: '3rem',
            paddingY: '3rem'
          }}
        >
          <Typography
            variant='h6'
            sx={{ marginBottom: 2 }}
          >
            Sign-in options
          </Typography>
          <ButtonGroup
            size='large'
            color='inherit'
            orientation='horizontal'
            variant='text'
            disableElevation
            disableRipple
            classes={{ }}
          >
            <Button startIcon={<FacebookIcon />}> Facebook </Button>
            <Button startIcon={<GoogleIcon />}> Google </Button>
            <Button startIcon={<FingerprintIcon />}> Qintot </Button>
          </ButtonGroup>
        </Box>

      </Box>

      <GlobalFooter />
    </Box>
  )
}

export default SignIn
