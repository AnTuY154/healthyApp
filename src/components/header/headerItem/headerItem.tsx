import React from 'react'
import Icon from '../../icon/icon'
import '../header.scss'
import { HeaderItemType } from '../type'
import { Link } from 'react-router-dom'

export function HeaderItem ({ icon, text, path }: HeaderItemType): JSX.Element {
  return (
    <Link className="header-item" to={path}>
      <Icon name={icon.name} notification={icon.notification} />
      <p>{text}</p>
    </Link>
  )
}
