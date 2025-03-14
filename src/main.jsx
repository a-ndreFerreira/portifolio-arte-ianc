import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Contact from './routes/Contact/Contact.jsx'
import RootLayout from './routes/Root/RootLayout.jsx'
import Projects from './routes/Projects/Projects.jsx'
import Store from './routes/Store/Store.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/store',
        element: <Store />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
