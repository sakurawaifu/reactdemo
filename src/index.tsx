import { createRoot } from 'react-dom/client'

import './styles/global.scss'

import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import router from './route/router'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <RouterProvider router={router}></RouterProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
