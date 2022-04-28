import React, { FC } from 'react'
import Tabs, { TabsProps } from './tabs'
import TabItem, { TabItemProps } from './tabItem'

export type ITabsComponent = FC<React.PropsWithChildren<TabsProps>> & {
  Item: FC<React.PropsWithChildren<TabItemProps>>
}
const TransTabs = Tabs as ITabsComponent
TransTabs.Item = TabItem

export default TransTabs