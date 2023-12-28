import { Outlet, Navigate } from "react-router-dom";
import { sessionToken } from "../constant/localStorage";
import { routeDashboard, routeHome } from "../constant/routeName";
import '../assets/css/style.css?version=4.1'



export default function Guest () {
    // if(localStorage.getItem(sessionToken) != null) {
    //     return <Navigate to ={routeHome} />
    // }

    return (
        <div>
    
            <Outlet />

        </div>
    )
}