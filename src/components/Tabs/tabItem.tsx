import React from 'react'

export interface TabItemProps {
  /** Tab选项上面的文字 */
  label: string | React.ReactElement;
  /** Tab选项是否被禁用 */
  disabled?: boolean;
}

export const TabItem = (props:React.PropsWithChildren<TabItemProps> ) => {
  return (
    <div className="whj-tab-panel">
      {props.children}
    </div>
  )
}

export default TabItem;