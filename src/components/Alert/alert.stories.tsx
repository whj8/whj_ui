import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Alert from './index'

const defaultTabs = () => (
  <div>
    <Alert title={"警告"} onClose={() => {}} description="今天降温，记得保暖o" closable={false}/>
    <Alert title={"警告"} onClose={() => {}} description="今天降温，记得保暖o" type='success'/>
    <Alert title={"警告"} onClose={() => {}} description="今天降温，记得保暖o" type='warning'/>
    <Alert title={"警告"} onClose={() => {}} description="今天降温，记得保暖o" type='danger'/>
    <Alert title={"警告"} onClose={() => {}} description="今天降温，记得保暖o" type='default'/>

  </div>
)


storiesOf('提示条', module)
  .add('alert', defaultTabs)