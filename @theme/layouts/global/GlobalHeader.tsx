import React from 'react'
import Link from 'next/link'
import { GlobalNavProps } from '../../../types/interfaceTypes'
import theme from '../../theme'

// components
import {
  AppBar, Box, IconButton, MenuItem,
  Menu, ButtonGroup, Button, Container, Toolbar, Switch
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import BrandLogo from './BrandLogo'

const GlobalNav = ({ brand, items }: GlobalNavProps): JSX.Element => {
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [anchorElMobile, setAnchorElMobile] = React.useState<null | HTMLElement>(null)

  const menuItems = items?.map((item): JSX.Element => {
    return (
      <MenuItem
        component='div'
        key={ item.name }
        sx={{
          paddingY: 1,
          fontSize: '14px'
        }}
        autoFocus={ true }
        divider={ false }
        disableGutters= { false }
      >
          <Link href={ item.slug }>
            { item.name }
          </Link>
      </MenuItem>
    )
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAuth(event.target.checked)
  }

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

  return (
    <Box sx={{ minWidth: 'sm' }}>
    <Box
      sx={{
        width: 1,
        minWidth: 'sm'
      }}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          width: 1,
          flexShrink: 0,
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
                      <MenuItem
                        key={ item.name }
                        sx={{
                          width: '100%',
                          paddingRight: 1,
                          paddingY: 1
                        }}
                        autoFocus={ true }
                        divider={ true }
                        disableGutters= { false }
                      >
                        <Link href={ item.slug }>
                          {item.name }
                        </Link>
                      </MenuItem>
                    ))
                  }
                  <Box
                    sx={{
                      marginY: 2,
                      paddingInline: 1
                    }}
                    >
                    <ButtonGroup variant="text" color="primary" aria-label="">
                      <Button> Settings </Button>
                      <Button> Language </Button>
                    </ButtonGroup>
                  </Box>
                </Box>
              </Menu>
          </Box>

          {/** Brand Name */}
          <Box sx={{ mx: 'auto', flexGrow: { xs: 1, md: 0 }, display: 'flex', justifyContent: 'center' }} component='div'>
            <Link href='/'>
              <BrandLogo width={136} height={18} roast={true}/>
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

            <Switch
              checked={auth}
              onChange={handleChange}
              sx={{
                background: theme.palette.secondary.light,
                position: 'absolute',
                top: '3rem',
                right: '0px',
                zIndex: 99999
              }}
            />

          {/** Profile/Signin Buttons */}
          {
            !auth && (
              <Button variant='contained' color='success'>
                Sign in
              </Button>
            )
          }
          {auth && (
            <Box style={{ marginLeft: 'auto' }}>
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
          )}
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  </Box>
  )
}

export default GlobalNav
