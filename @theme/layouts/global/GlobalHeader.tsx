import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { language } from '../../../store'
import { GlobalNavProps } from '../../../types/interfaceTypes'
// components
import {
  AppBar, Box, IconButton, MenuItem,
  Menu, Container, Toolbar, ToggleButtonGroup, ToggleButton
} from '@mui/material'
// icons
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import BrandLogo from './BrandLogo'
import { useSnackbar } from 'notistack'

const GlobalNav = ({ brand, items }: GlobalNavProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter()

  // const [auth, setAuth] = useState(true)
  const [locale, setLocale] = useRecoilState(language)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [anchorElMobile, setAnchorElMobile] = React.useState<null | HTMLElement>(null)
  const { enqueueSnackbar } = useSnackbar()

  function handleLocal (e: React.MouseEvent<HTMLElement>, lang: string): void {
    try {
      router.push(router.route, router.route, { locale })
        .then((res) => {
          setLocale(lang)
          localStorage.setItem('locale', lang)
          const language = lang === 'en'
            ? 'Language is set to English'
            : 'ቋንቋው፥ ወደ አማርኛ ተቀይሯል'
          enqueueSnackbar(language, { variant: 'info' })
        })
        .catch(err => console.log(err))
    } catch (err) {
      console.log(err)
      console.log('Unable to set locale')
    }
  }

  const menuItems = items?.map((item): JSX.Element => {
    return (
      <Link
        href={ item.slug }
        key={ item.name }
      >
        <MenuItem
          component='div'
          sx={{
            paddingY: 1,
            fontSize: '14px'
          }}
          autoFocus={ true }
          divider={ false }
          disableGutters= { false }
        >
            { item.name }
        </MenuItem>
      </Link>
    )
  })

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setAuth(event.target.checked)
  // }

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleMobileMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElMobile(event.currentTarget)
  }

  const handleMobileClose = (): void => {
    setAnchorElMobile(null)
    console.log('mobile menu closed')
  }

  useEffect(() => {
    setLocale(localStorage.getItem('locale') ?? 'en')
  }, [])

  return (
    <Box sx={{ minWidth: 'sm' }}>
    <Box
      sx={{
        width: 1,
        minWidth: 'sm'
      }}>
      <AppBar
        component='div'
        position="sticky"
        color="transparent"
        sx={{
          width: 1,
          flexShrink: 0,
          px: 1,
          backdropFilter: 'blur(20px)'
        }}>
        <Container maxWidth='lg' disableGutters sx={{ mx: 'auto' }}>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
            {/** Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              {/** Mobile Menu Button */}
              <IconButton
                size="large"
                aria-label="mobile menu"
                aria-controls="mobile-menu-appbar"
                aria-haspopup="true"
                onClick={handleMobileMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              {/** Mobile Menu Dropdown */}
              <Menu
                id="mobile-menu-appbar"
                sx={{ background: 'rgba(0,0,0,0.3)' }}
                anchorEl={anchorElMobile}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElMobile)}
                onClose={handleMobileClose}
              >
                <Box sx={{}}>
                  {
                    items?.map(item => (
                      <Link
                        key={ item.name }
                        href={ item.slug }
                      >
                      <MenuItem
                        sx={{
                          width: '100%',
                          paddingRight: 1,
                          paddingY: 1
                        }}
                        autoFocus={ true }
                        divider={ true }
                        disableGutters= { false }
                      >
                          {item.name }
                      </MenuItem>
                    </Link>
                    ))
                  }
                  <Box
                    sx={{
                      marginY: 2,
                      paddingInline: 1
                    }}
                    >
                      <ToggleButtonGroup
                        color="primary"
                        value={ locale }
                        exclusive
                        size='small'
                        onChange={handleLocal}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <ToggleButton value="en" disabled={(locale === 'en')}>
                          EN
                        </ToggleButton>
                        <ToggleButton value="am" disabled={(locale === 'am')}>
                          አማ
                        </ToggleButton>
                      </ToggleButtonGroup>
                  </Box>
                </Box>
              </Menu>
          </Box>

          {/** Brand Name */}
          <Box sx={{ mx: 'auto', flexGrow: { xs: 1, md: 0 }, display: 'flex', justifyContent: 'center' }} component='div'>
            <Link href='/'>
              <BrandLogo width={136} height={18} roast={false}/>
            </Link>
          </Box>

          {/** Desktop Menu */}
          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'row',
            mx: 'auto',
            gap: 1,
            flexWrap: 'nowrap'
          }}>
            {
              menuItems
            }
          </Box>

            {/* <Switch
              checked={auth}
              onChange={handleChange}
              sx={{
                background: theme.palette.secondary.light,
                position: 'absolute',
                top: '3rem',
                right: '0px',
                zIndex: 99999
              }}
            /> */}

          {/** Profile/Signin Buttons */}
          {/* {
            !auth && (
              <Button
                variant='contained'
                size='small'
                color='info'
              >
                Sign in
              </Button>
            )
          } */}
            <Box style={{ marginLeft: 'auto' }}>
              {/** Localization Preference */}
              <ToggleButtonGroup
                color="primary"
                value={ locale }
                exclusive
                size='small'
                onChange={handleLocal}
                sx={{
                  display: { xs: 'none', sm: 'inline-block' },
                  mr: { sm: 3 }
                }}
              >
                <ToggleButton value="en" disabled={(locale === 'en')}>
                  EN
                </ToggleButton>
                <ToggleButton value="am" disabled={(locale === 'am')}>
                  አማ
                </ToggleButton>
              </ToggleButtonGroup>

              {/** Account Profile BUtton */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              {/** Account Profile Dropdown */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  autoFocus={ true }
                  divider={ true }
                  disableGutters= { false }
                >
                 <Link href='/account/signin'>  Signin </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  autoFocus={ true }
                  divider={ true }
                  disableGutters= { false }
                >
                  Preferences
                </MenuItem>
              </Menu>
            </Box>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  </Box>
  )
}

export default GlobalNav
