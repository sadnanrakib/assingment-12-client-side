import { createBrowserRouter } from "react-router-dom";
import AllCategory from "../../AllCategorys/AllCategory";
import Main from "../../Layout/Main";
import AddPhone from "../../Pages/AddBook/AddPhone";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";
// import AddPhone from"../../Pages/AddBook/AddPhone";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/addphone',
                element: <AddPhone></AddPhone>
            },
            {
                path:'/allcategory',
                element:<AllCategory></AllCategory>
            },
            {
                path:'/allcategory/:category',
                element: <AllCategory></AllCategory>,
                loader:({params})=>fetch(`http://localhost:5000/allcategory/${params.category}`)
            },
           
          
            {
                path:'/login',
                element:<Login></Login> 
           },
           {
            path:'/singup',
            element:<SingUp></SingUp>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'/addphone',
            element:<AddPhone></AddPhone>
           },
        //    {
        //     path:'/categoris/:id',
        //     element:<Category></Category>,
        //     loader:({params})=>fetch(`http://localhost:5000/categoris/${params.id}`)
        //    },
        //    {
        //     path:'/categories',
        //     element:<Categories></Categories>
        //    }
        ]
    }
])


// {
//     path:'/allcategory',
//     element:<AllCategory></AllCategory>
// },
// {
//     path:'/allcategory/:category',
//     loader:({params}) => fetch(`http://localhost:5000/allcategory/${params.category}`),
//     element:<AllCategory></AllCategory>
// },