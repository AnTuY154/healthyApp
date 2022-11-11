import React, { useEffect, useState } from 'react'
import './header.scss'
import Logo from 'Assets/img/logo.jpg'
import { HeaderItem } from './headerItem/headerItem'
import { HeaderItemType, HeaderMenuItemType } from './type'
import { HeaderMenu } from './headerMenu/headerMenu'
import { Link } from 'react-router-dom'

export function Header (): JSX.Element {
  const [headerData, setHeaderData] = useState<HeaderItemType[]>([])
  const [headerMenu, setHeaderMenu] = useState<HeaderMenuItemType[]>([])

  useEffect(() => {
    // call api header
    setHeaderData([
      {
        icon: {
          name: 'memo'
        },
        text: '自分の記録',
        path: 'my_record'
      },
      {
        icon: {
          name: 'challenge'
        },
        text: 'チャレンジ',
        path: ''
      },
      {
        icon: {
          name: 'info',
          notification: 1
        },
        text: 'お知らせ',
        path: ''
      }
    ])

    setHeaderMenu([
      {
        label: '自分の記録',
        path: 'menu1'
      },
      {
        label: '体重グラフ',
        path: 'menu2'
      },
      {
        label: '目標',
        path: 'menu3'
      },
      {
        label: '選択中のコース',
        path: 'menu4'
      },
      {
        label: 'コラム一覧',
        path: 'column_page'
      },
      {
        label: '設定',
        path: 'menu6'
      }
    ])
  }, [])

  return (
    <div id="header" className="header">
      <div className="container">
      <div className="header-logo">
        <Link to="top_page">
          <img src={Logo} />
        </Link>
      </div>

      <div className="header-items">
        {headerData?.map((item, index) => (
          <HeaderItem
            key={index}
            icon={item.icon}
            text={item.text}
            path={item.path}
          />
        ))}
        <HeaderMenu menu={headerMenu} />
      </div>
      </div>

    </div>
  )
}
