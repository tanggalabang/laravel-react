import { Outlet, Navigate } from "react-router-dom";
import { sessionToken } from "../constant/localStorage";
import { routeSignin } from "../constant/routeName";

export default function Guard () {
    if(localStorage.getItem(sessionToken) == null) {
        return <Navigate to ={routeSignin} />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}