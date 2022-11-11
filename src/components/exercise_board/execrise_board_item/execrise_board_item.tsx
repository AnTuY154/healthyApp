import React from 'react'
import '../execrise_board.scss'
import { ExecriseItemType } from '../type'

export function ExecriseBoardItem ({
  description,
  energy,
  time,
  type
}: ExecriseItemType): JSX.Element {
  return (
    <div className="execrise_board-item">
      <div className="execrise_board-item-info">
        <div>{`${description} (${type})`}</div>
        <div>{time}</div>
      </div>
      <div>{energy}</div>
    </div>
  )
}
