import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import About from "./pages/About"
import React from "react";
import ReactDOM  from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/css/style.css";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import Restromenupage from './pages/Restromenupage';
import Contact from "../src/pages/Contact"

const APP = () => {
  return (
    <>
     <Header/>
    <Outlet/>
    </>
  )
}
const Approuter=createBrowserRouter(
  [
    {
      path:"/",
      element:<APP/>,
      children:[
        {path:"/",
        element:<Body/>,
        },
        {
          path:'/about',
          element:<About/>,
        },
        { path:'/contact',
        element:<Contact/>,

        },
        {
          path:'/restmenu/:resid',
          element:<Restromenupage/>
        }
      ],
      errorElement:<Error/>
    }
  ]
)
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />)