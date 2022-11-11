import React from 'react'
import { getImageSrc } from '../../common/common'
import './record_box.scss'
import { RecordBoxType } from './type'

export function RecordBox ({ description, title, image }: RecordBoxType): JSX.Element {
  return (
    <div className="record_box">
      <img src={getImageSrc(image)} />
      <div className="record_box-mask"></div>
      <div className="record_box-detail">
        <p className="record_box-title">{title}</p>
        <div className="record_box-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
