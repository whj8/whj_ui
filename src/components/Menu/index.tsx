import { FC,PropsWithChildren } from 'react'
import Menu, { MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuItem'

export type IMenuComponent = FC<PropsWithChildren<MenuProps>> & {
  Item: FC<PropsWithChildren<MenuItemProps>>,
  SubMenu: FC<PropsWithChildren<SubMenuProps>>
}
const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu