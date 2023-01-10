import { ReactNode } from 'react'

export interface LayoutProps {
  options?: Array<{}>
  children?: any
  header?: ReactNode
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

// Deep Dive
export interface MarketPlaceCardProps {
  items: Array<{
    title: string
    caption: string
    tag: string
    img: string
  }>
  leadHeader?: string
  mainHeader?: string
}

export interface DynamicCardProps {
  items: Array<{
    title: string
    caption: string
    tag: string
    img: string
  }>
  leadHeader?: string
  mainHeader?: string
  width?: string
  height?: string
  opacity1?: string
  opacity2?: string
}

export interface ProductCardProps {
  items: Array<{
    title: string
    caption: string
    tag: string
    img: string
  }>
  leadHeader?: string
  mainHeader?: string
  width?: string
  height?: string
}

export interface ServiceCardProps {
  items: Array<{
    title: string
    caption: string
    tag: string
    img: string
  }>
  leadHeader?: string
  mainHeader?: string
  width?: string
  height?: string
}

export interface MarketPlaceBannerProps {
  items?: Array<{ name: string, slug: string, desc: string, img: ReactNode }>
  leadHeader?: string
  mainHeader?: string
}
