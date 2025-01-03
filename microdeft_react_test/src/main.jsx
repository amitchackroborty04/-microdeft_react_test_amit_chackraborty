import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.jsx'

import CourseFrom from './Pages/CourseFrom.jsx'
import Fetch_data from './Pages/Fetch_data.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/coursefrom',
    element: <CourseFrom/>,
  },
  {
    path: '/featchdata',
    element: <Fetch_data/>,
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
