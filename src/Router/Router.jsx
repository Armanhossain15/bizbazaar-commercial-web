import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserInfo from "../Pages/UserInfo/UserInfo";
import PriveatRoute from "../Routes/PriveatRoute";
import UpdateInfo from "../Pages/UpdateInfo/UpdateInfo";
import EstateDetails from "../Component/EstateDetails/EstateDetails";
// import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        // errorElement: <ErrorPage/>,
        children : [
            {
                path: '',
                loader: ()=> fetch ('/fakeData.json'),
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            
            {
                path: '/userinfo',
                element: <PriveatRoute><UserInfo/></PriveatRoute>
            },
            {
                path: '/updateinfo',
                element: <PriveatRoute><UpdateInfo/></PriveatRoute>
            },
            {
                path: '/estate/:id',
                element: <PriveatRoute><EstateDetails/></PriveatRoute> ,
                loader : () => fetch('/fakeData.json'),
            },
        ]
    }
])

export default Router;