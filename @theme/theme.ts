import { createTheme } from '@mui/material/styles'

/*
const theme_blue: string = '#0077ED'
const theme_blue_text: string = '#0066CC'
const theme_dark_blue: string = '#12192f'
const theme_orange: string = '#ff8f58'
const theme_red: string = '#D0102B'
*/

// creating a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark'
  }
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
  // typography: {
  //   htmlFontSize: 16,
  //   fontFamily: '"Ubuntu", sans-serif',
  //   h1: {
  //     fontFamily: '"Roboto"',
  //     fontWeight: 400,
  //     fontSize: '6rem',
  //     lineHeight: 1.167,
  //     letterSpacing: '-0.01562em'
  //   }
  // }
  // transitions { easing, duration ...}
})

export default theme
