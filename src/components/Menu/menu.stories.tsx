import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

export const defaultMenu1 = () => (
  <Menu defaultOpenSubMenus={["1"]} mode='horizontal' defaultIndex={"1"} onSelect={(index) => console.log(index)}>
    <MenuItem disabled={true}>禁用</MenuItem>
    <MenuItem>
      菜单一
    </MenuItem>
    <SubMenu title='菜单二'>
      <MenuItem>子菜单1</MenuItem>
      <MenuItem>
        子菜单2
      </MenuItem>
      <MenuItem>
        子菜单3
      </MenuItem>
    </SubMenu>
  </Menu>
)

export const defaultMenu2 = () => (
  <Menu defaultOpenSubMenus={["1"]} mode='vertical' defaultIndex={"1"} onSelect={(index) => console.log(index)}>
    <MenuItem disabled={true}>禁用</MenuItem>
    <MenuItem>
      菜单一
    </MenuItem>
    <SubMenu title='菜单二'>
      <MenuItem>子菜单1</MenuItem>
      <MenuItem>
        子菜单2
      </MenuItem>
      <MenuItem>
        子菜单3
      </MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('菜单组件', module)
.add('横向菜单', defaultMenu1 )
.add('纵向菜单', defaultMenu2 )