import React from 'react'
import { IconProps } from './types'
import './icon.scss'

export default React.memo(function Icon (props: IconProps): JSX.Element {
  const { name = 'info', notification, onClick } = props
  const icon = require(`Assets/icon/icon_${name}.svg`)
  return (
    <div onClick={onClick} className="icon">
      <img src={icon} alt="mySvgImage" />
      {notification && <span>{notification}</span>}
    </div>
  )
})
