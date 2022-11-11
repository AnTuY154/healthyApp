import React from 'react'
import {
  Outlet
} from 'react-router-dom'
import './font.scss'
import './App.scss'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'

export function App (): JSX.Element {
  return (
    <>
      <Header />
      <div id="body" className="body">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
