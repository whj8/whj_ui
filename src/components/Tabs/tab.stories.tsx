import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tabs from './index'

const defaultTabs = () => (
  <Tabs>
    <Tabs.Item label={"页签1 "}>111</Tabs.Item>
    <Tabs.Item label={"页签2 "}>222</Tabs.Item>
    <Tabs.Item label={"页签3 "}>333</Tabs.Item>
  </Tabs>
)


storiesOf('Tab', module)
  .add('tab', defaultTabs)