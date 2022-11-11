import { IconProps } from '../icon/types'

interface HeaderItemType {
  icon: IconProps
  text: string
  path: string
}

interface HeaderMenuItemType {
  label: string
  path: string
}

interface HeaderMenuListType {
  menu: HeaderMenuItemType[]
}

export type { HeaderItemType, HeaderMenuListType, HeaderMenuItemType }
