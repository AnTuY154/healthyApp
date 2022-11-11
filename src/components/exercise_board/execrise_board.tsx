import React, { useState } from 'react'
import './execrise_board.scss'
import { ExecriseBoardItem } from './execrise_board_item/execrise_board_item'
import { ExecriseBoardType } from './type'

export function ExecriseBoard ({
  execriseData,
  time,
  title,
  loadingData
}: ExecriseBoardType): JSX.Element {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handleScroll = (event: any): void => {
    const scrollTop = event.currentTarget.scrollTop
    if (scrollTop >= 48) {
      const offsetHeight = event.currentTarget.offsetHeight
      const someThing =
        scrollTop > offsetHeight
          ? scrollTop % offsetHeight
          : offsetHeight % scrollTop

      if (someThing % 48 === 0 && scrollTop > lastScrollTop) {
        setLastScrollTop(scrollTop)
        setCurrentPage((page) => page + 1)
        loadingData(currentPage)
      }
    }
  }

  return (
    <div className="execrise_board">
      <div className="execrise_board-info">
        <div className="myChart-info-title">
          {title.split(' ')?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <p className="myChart-info-time">{time}</p>
      </div>
      <div className="execrise_board-data" onScroll={handleScroll}>
        {execriseData?.map((item, index) => (
          <ExecriseBoardItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
