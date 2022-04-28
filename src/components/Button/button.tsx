import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// button标签的所有属性
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
// a标签的所有属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// 交叉类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


const Button: React.FC<ButtonProps> = (props) => {
  const {className, size, href, children, disabled = false, btnType = 'default', ...restProps} = props;
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  return (
    (btnType === 'link' && !!href) ?
      <a className={classes} href={href} {...restProps}>{children}</a> :
      <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  )
}


export default Button
