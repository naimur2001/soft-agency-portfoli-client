import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../HomeElement/Home";
import Services from "../Services/Services";
import Aboutus from "../Aboutus/Aboutus";
import Contactus from "../Contactus/Contactus";
import Career from "../Career/Career";
import AdminLogin from "../../Dashboard/AdminLogin";
import PrivateRoute from "../../Dashboard/privateRoute";
import Dashboard from "../../Dashboard/Dashboard";
import ServiceManage from "../../Dashboard/ServiceManage";
import AboutManage from "../../Dashboard/AboutManage";
import ClientManage from "../../Dashboard/ClientManage";
import TeamCardEdit from "../../Dashboard/TeamCardEdit";

const router=createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'services',
        element:<Services></Services>
      },
      {
        path:"aboutus",
        element:<Aboutus></Aboutus>
      },
      {
        path:"contactus",
        element:<Contactus></Contactus>
      },
      {
        path:"career",
        element: <Career></Career>
        

      },
      {
        path:"adminlogin",
        element:<AdminLogin></AdminLogin>,
      },
      {
        path:"dashboard",
        element:<PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
        children:[
          {
            path:"/dashboard/servicemanagement",
            element:<PrivateRoute>
              <ServiceManage></ServiceManage>
            </PrivateRoute>
          },
          {
            path:"/dashboard/aboutmanagement",
            element:<PrivateRoute>
              <AboutManage></AboutManage>
            </PrivateRoute>
          },
          {
            path:"/dashboard/clientmanagement",
            element:<PrivateRoute>
              <ClientManage></ClientManage>
            </PrivateRoute>
          },
          {
            path:"/dashboard/editteamcard/:id",
            element:<PrivateRoute>
              <TeamCardEdit></TeamCardEdit>
            </PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/get/teams/${params.id}`)
          }
        ]
      }

    ]
  }
])

export default router;