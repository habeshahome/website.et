/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { atom } from 'recoil'

const auth = atom({
  key: 'auth',
  default: {}
})

export const language = atom({
  key: 'language',
  default: 'en'
})

const brand = atom({
  key: 'brand',
  default: 'website.et'
})

const pageTitle = atom({
  key: 'pageTitle',
  default: 'website.et'
})

const activeTheme = atom({
  key: 'activeTheme',
  default: 'dark'
})

const themeSettings = atom({
  key: 'themeSettings',
  default: {}
})
