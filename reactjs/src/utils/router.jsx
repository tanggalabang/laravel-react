import { createBrowserRouter } from "react-router-dom";
import Guest from "../skins/Guest";
import Guard from "../skins/Guard";
import { routeHome, routeRegister, routeSignin } from "../constant/routeName";
import Signin from "../pages/Signin";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Layout from "../skins/Layout";

const router = createBrowserRouter([
    {
        element: <Guest />,
        children: [
            {
                path: routeRegister,
                element: <Register />
            },
            {
                path: routeSignin,
                element: <Signin />
            },

        ]
    },
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // {
            //     path: '/',
            //     element: <Home />
            // },
        ]
    }
])

export default router