import React from 'react'
import './recommended_card.scss'
import { RecommendedCardType } from './type'

export function RecommendedCard ({
  title,
  description,
  onClick
}: RecommendedCardType): JSX.Element {
  return (
      <div onClick={onClick} className="recommended_card">
        <p className="recommended_card-title">{title}</p>
        <div className="recommended_card-line" />
        <p className="recommended_card-description">{description}</p>
      </div>
  )
}
