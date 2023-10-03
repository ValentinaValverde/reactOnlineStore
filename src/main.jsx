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
import Electronics from "./routes/electronics"
import Jewelery from "./routes/jewelery"
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
        element: <Electronics />
      },
      {
        path: '/jewelery',
        element: <Jewelery />
      },
      {
        path: '/mens',
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