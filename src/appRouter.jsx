
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";

const router = createBrowserRouter([
  
    {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage />,  
        children: [
          { path: "signup", element: <Signup /> },
          { path: "signin", element: <Signin /> }
        
        ],
      }, 
      {
        path: "/about",
        element: <About/>,
        // errorElement: <ErrorPage />, 
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        // errorElement: <ErrorPage />, 
      },
      {
        path: "/signin",
        element: <Signin/>,
        // errorElement: <ErrorPage />, 
      },
      {
        path: "/signup",
        element: <Signup />,
        // errorElement: <ErrorPage />, 
      },
      {
        path: "/project",
        element: <Project />,
        // errorElement: <ErrorPage />, 
      },
  
  ]);

  export default router