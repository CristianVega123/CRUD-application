import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/Form'
import Dash from './components/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./styles/index.css"


const router = createBrowserRouter([{
  path: "/",
  element: <Form />
}, {
  path: "/dashboard",
  element: <Dash />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
