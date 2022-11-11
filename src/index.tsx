import React from 'react'
import ReactDOM from 'react-dom'
import './App.scss'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {
  RouterProvider
} from 'react-router-dom'
import { router } from './routes/root'
import './assets/fonts/Inter/Inter-ExtraBold.ttf'

const appElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
     <RouterProvider router={router}/>
  </Provider>,
  appElement
)
