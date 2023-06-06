import { useState } from "react";
import AppbarComp from "../appBar/AppbarComp";
import DrawerComp from "../dawer/DrawerComp";
import { Navigate, Outlet } from "react-router";
import { Box } from "@mui/material";

export default function ProtectedRouter(props: any) {
    const [isAuth, setIsAuth] = useState(true)

    return isAuth ? (
        <>
            <AppbarComp routes={props.routes} />
            <Outlet />
        </>
    ) : (
        <Navigate to="/" />
    )
}