import { createTheme } from '@mui/material/styles'

/*
const theme_blue: ''
= '#0077ED'
const theme_blue_text: ''
= '#0066CC'
const theme_dark_blue: ''
= '#12192f'
const theme_orange: ''
= '#ff8f58'
const theme_red: ''
= '#D0102B'
*/

// creating a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark'
  },
  // palette: {
  //   mode: 'light',
  //   primary: {
  //     main: '#333333',
  //     light: '#F5F5F7',
  //     dark: '#00000',
  //     contrastText: '#ff00ff'
  //   },
  //   secondary: {
  //     main: '#0088CC',
  //     light: '#FF8F58',
  //     dark: '#12192f',
  //     contrastText: '#fff'
  //   },
  //   error: {
  //     main: '#FF8F58'
  //   },
  // text: {
  //   // primary, secondary, disabled, primaryChannel, secondaryChannel, divider
  // },
  // divider: 'rgba(0,0,0,12)',
  // background: {
  //   default: '#FFFEFC',
  //   paper: '#F5F5F7'
  // },
  // action: {
  //   /*
  //   active, hover, hoverOpacity, selected, selectedOpacity
  //    disabled, disabledBackground, disabledOpacity,
  //    focus, focusOpacity, activatedOpacity,
  //    activeChannel, selectedChannel
  //   */
  // }
  // },

  // shape: {
  //   borderRadius: 3
  // },
  // mixins: {
  //   toolbar: {
  //     minHeight: 48
  //   }
  // },
  // // ,shadows: { // 0, 1, 2, 3, 4, 5, ...}
  typography: {
    fontFamily: '"Ubuntu", Roboto, sans-serif'
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(255,255,255,0.2),0px 1px 1px 0px rgba(255,255,255,0.14),0px 1px 3px 0px rgba(255,255,255,0.12)',
    '0px 3px 1px -2px rgba(255,255,255,0.2),0px 2px 2px 0px rgba(255,255,255,0.14),0px 1px 5px 0px rgba(255,255,255,0.12)',
    '0px 3px 3px -2px rgba(255,255,255,0.2),0px 3px 4px 0px rgba(255,255,255,0.14),0px 1px 8px 0px rgba(255,255,255,0.12)',
    '0px 2px 4px -1px rgba(255,255,255,0.2),0px 4px 5px 0px rgba(255,255,255,0.14),0px 1px 10px 0px rgba(255,255,255,0.12)',
    '0px 3px 5px -1px rgba(255,255,255,0.2),0px 5px 8px 0px rgba(255,255,255,0.14),0px 1px 14px 0px rgba(255,255,255,0.12)',
    '0px 3px 5px -1px rgba(255,255,255,0.2),0px 6px 10px 0px rgba(255,255,255,0.14),0px 1px 18px 0px rgba(255,255,255,0.12)',
    '0px 4px 5px -2px rgba(255,255,255,0.2),0px 7px 10px 1px rgba(255,255,255,0.14),0px 2px 16px 1px rgba(255,255,255,0.12)',
    '0px 5px 5px -3px rgba(255,255,255,0.2),0px 8px 10px 1px rgba(255,255,255,0.14),0px 3px 14px 2px rgba(255,255,255,0.12)',
    '0px 5px 6px -3px rgba(255,255,255,0.2),0px 9px 12px 1px rgba(255,255,255,0.14),0px 3px 16px 2px rgba(255,255,255,0.12)',
    '0px 6px 6px -3px rgba(255,255,255,0.2),0px 10px 14px 1px rgba(255,255,255,0.14),0px 4px 18px 3px rgba(255,255,255,0.12)',
    '0px 6px 7px -4px rgba(255,255,255,0.2),0px 11px 15px 1px rgba(255,255,255,0.14),0px 4px 20px 3px rgba(255,255,255,0.12)',
    '0px 7px 8px -4px rgba(255,255,255,0.2),0px 12px 17px 2px rgba(255,255,255,0.14),0px 5px 22px 4px rgba(255,255,255,0.12)',
    '0px 7px 8px -4px rgba(255,255,255,0.2),0px 13px 19px 2px rgba(255,255,255,0.14),0px 5px 24px 4px rgba(255,255,255,0.12)',
    '0px 7px 9px -4px rgba(255,255,255,0.2),0px 14px 21px 2px rgba(255,255,255,0.14),0px 5px 26px 4px rgba(255,255,255,0.12)',
    '0px 8px 9px -5px rgba(255,255,255,0.2),0px 15px 22px 2px rgba(255,255,255,0.14),0px 6px 28px 5px rgba(255,255,255,0.12)',
    '0px 8px 10px -5px rgba(255,255,255,0.2),0px 16px 24px 2px rgba(255,255,255,0.14),0px 6px 30px 5px rgba(255,255,255,0.12)',
    '0px 8px 11px -5px rgba(255,255,255,0.2),0px 17px 26px 2px rgba(255,255,255,0.14),0px 6px 32px 5px rgba(255,255,255,0.12)',
    '0px 9px 11px -5px rgba(255,255,255,0.2),0px 18px 28px 2px rgba(255,255,255,0.14),0px 7px 34px 6px rgba(255,255,255,0.12)',
    '0px 9px 12px -6px rgba(255,255,255,0.2),0px 19px 29px 2px rgba(255,255,255,0.14),0px 7px 36px 6px rgba(255,255,255,0.12)',
    '0px 10px 13px -6px rgba(255,255,255,0.2),0px 20px 31px 3px rgba(255,255,255,0.14),0px 8px 38px 7px rgba(255,255,255,0.12)',
    '0px 10px 13px -6px rgba(255,255,255,0.2),0px 21px 33px 3px rgba(255,255,255,0.14),0px 8px 40px 7px rgba(255,255,255,0.12)',
    '0px 10px 14px -6px rgba(255,255,255,0.2),0px 22px 35px 3px rgba(255,255,255,0.14),0px 8px 42px 7px rgba(255,255,255,0.12)',
    '',
    ''
  ]
  // transitions { easing, duration ...}
})

export default theme
