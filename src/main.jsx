import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider ,
} from 'react-router-dom'
import Root, {
  loader as rootLoader,
} from './routes/root'
import Issue from './routes/issue'
import './index.css'
import Electronics, {
  loader as electronicLoader,
} from "./routes/electronics"
import Jewelery, {
  loader as jeweleryLoader,
} from "./routes/jewelery"
import Mens from "./routes/mens"
import Womens from "./routes/womens"



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    errorElement: <Issue />,
    // whatever is inside the children array is what's loaded in the <Outlet />
    children: [
      {
        path: '/electronics',
        element: <Electronics />,
        loader: electronicLoader,
      },
      {
        path: '/jewelery',
        element: <Jewelery />,
        loader: jeweleryLoader,
      },
      {
        path: '/mens-section',
        element: <Mens />
      },
      {
        path: '/womens',
        element: <Womens />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);