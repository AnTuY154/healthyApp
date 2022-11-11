import { createBrowserRouter, redirect } from 'react-router-dom'
import { App } from '../App'
import React from 'react'
import { Home } from '../pages/home/home'
import { Record } from '../pages/record/record'
import { Column } from '../pages/column/column'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/top_page',
        element: <Home />
      },
      {
        path: '/my_record',
        element: <Record />
      },
      {
        path: '/column_page',
        element: <Column />
      }
    ]
  }
])
