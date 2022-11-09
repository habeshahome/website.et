import { atom } from "recoil";

const brand = atom({
  key: 'brand',
  default: 'website.et'
})

const page_title = atom({
  key: 'page_title',
  default: 'website.et'
})

const active_theme = atom({
  key: 'active_theme',
  default: 'dark'
})

const theme_settings = atom({
  key: 'theme_settings',
  default: {
    
  }
})