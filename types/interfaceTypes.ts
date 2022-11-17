import { ReactNode } from 'react'

export interface LayoutProps {
  options?: Array<{}>
  children?: any
}

export interface GlobalNavProps {
  options?: Array<{}>
  brand?: string
  title?: string
  items?: Array<{ name: string, slug: string, img: string }>
  children?: any
}

export interface ChapterNavProps {
  options?: Array<{}>
  chapter?: string
  title?: string
  items?: Array<{ name: string, slug: string, img: string }>
  children?: ReactNode
}

export interface ButtonProps {
  variant?: Text
  color?: Text
  label: string
  children?: any
}

export interface GlobalPageProps {
  props?: any
  children?: any
}
