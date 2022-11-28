import { createBrowserRouter } from "react-router-dom";
import AllCategory from "../../AllCategorys/AllCategory";
import Main from "../../Layout/Main";
import AddPhone from "../../Pages/AddBook/AddPhone";
import Blog from "../../Pages/Blog/Blog";
import Dasboard from "../../Pages/Dasboard/Dasboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import AddPhone from"../../Pages/AddBook/AddPhone";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addphone",
        element: <AddPhone></AddPhone>,
      },
      {
        path: "/allcategory",
        element: <AllCategory></AllCategory>,
      },
      {
        path: "/allcategory/:category",
        element: <AllCategory></AllCategory>,
        loader: ({ params }) =>
          fetch(
            `https://resale-assingment-server.vercel.app/allcategory/${params.category}`
          ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addphone",
        element: <AddPhone></AddPhone>,
      },
    ],
  },
  // {
  //     path:'/dashboard',
  //     element:<PrivateRoute><Dasboard></Dasboard></PrivateRoute>
  //    }
]);

// {
//     path:'/allcategory',
//     element:<AllCategory></AllCategory>
// },
// {
//     path:'/allcategory/:category',
//     loader:({params}) => fetch(`https://resale-assingment-server.vercel.app/allcategory/${params.category}`),
//     element:<AllCategory></AllCategory>
// },
