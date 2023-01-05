import React, { useState, useEffect, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
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
import { signinUser } from '../../services/auth/SignInService'
import Head from 'next/head'
import Link from 'next/link'
import theme from '../../@theme/theme'
import AuthContext from '../../context/AuthProvider'

const EMAIL_REGX = /^([a-zA-Z0-9_.-]+)@([\da-zA-Z.-]+)\.([a-zA-Z.]{2,63})$/
const PASSWORD_REGX = /^.{8,24}$/

const SignIn = (): JSX.Element => {
  const { setAuth } = useContext(AuthContext)
  const router = useRouter()
  const { setIsLoggedIn } = useContext(AuthContext)

  const emailRef = useRef()
  const [email, setEmail] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailFocus, setEmailFocus] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  const [pwd, setPwd] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pwdFocus, setPwdFocus] = useState(false)
  const [validPwd, setValidPwd] = useState(false)

  // Singin Function
  const handleSignIn = async (): Promise<Object> => {
    try {
      await signinUser(email, pwd)
        .then((res) => {
          setAuth(res)
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, no-prototype-builtins
          if (res.hasOwnProperty('accessToken')) {
            console.log('Signin Successfull')
            setIsLoggedIn(true)
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            router.push('/console')
          }
        })
    } catch (err) {
      console.error('No Server Response. ERROR: www.website.et')
      console.error(err)
    } finally {
      console.log('Finally Sign in Process Exited')
    }
    return {}
  }

  const handleKeyDownSignin = async (event: React.KeyboardEvent): Promise<Object> => {
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
          marginInline: 'auto'
        }}>
          <FormGroup>
            <Typography
              variant='h4'
              component='h1'
              align='center'
              sx={{ mb: 9, display: 'inline' }}
            >
              Sign in to &nbsp;
              <Typography
                color='text.secondary'
                variant='inherit'
                sx={{ display: 'inline-block' }}
              > website.et </Typography>
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
                      <FormControl sx={{ width: '32ch' }} variant="standard">
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
                        <FormControl sx={{ width: '32ch' }} variant="standard">
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
                                      // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                      onClick={ handleSignIn }
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
            <Box sx={{ mt: 9 }}>
              <Link href='/account/register'> or Create new Account </Link>
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
