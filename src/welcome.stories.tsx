import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('安装', module)
  .add('安装', () => {
    return (
      <>
        <h1>welcome</h1>
        <p>自定义的一套组件库，做的比较粗糙，持续完善中</p>
        <h3>安装:</h3>
        <code>
          npm install whj_ui --save
        </code>
        <br/>
        <code>
          微信: wumei298
        </code>
      </>
    )
  }, { info : { disable: true }})