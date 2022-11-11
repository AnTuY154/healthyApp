import React from 'react'
import './button_show_more.scss'
import { ButtonType } from './type'

export function ButtonShowMore ({ onClick, text, className = '' }: ButtonType): JSX.Element {
  return (
    <div className={`button_show_more ${className}`}>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}
