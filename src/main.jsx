import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Plan from './Components/Plan';
import About from './Components/About';
import Contact from './Components/Contact';
import Team from './Components/Team';
import Education from './Components/Education';
import Portfolio from './Components/Portfolio';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Login from './Components/Login';
import Error from './Components/Error';
AOS.init();



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/plan',
        element: <Plan></Plan>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/team',
        element: <Team></Team>
      },
      {
        path: '/edu',
        element: <Education></Education>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
