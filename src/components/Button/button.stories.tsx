import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> 点我 </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> 大号按钮 </Button>
    <Button size="sm"> 小号按钮 </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary" style={{margin:10}}> primary </Button>
    <Button btnType="danger" style={{margin:10}}> danger </Button>
    <Button btnType="default" style={{margin:10}}> default </Button>
    <Button btnType="link" href="https://google.com"> link </Button>
  </>
)
storiesOf('按钮组件', module)
  // .addDecorator(withInfo)
  .add('默认样式', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)


