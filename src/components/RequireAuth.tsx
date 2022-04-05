import * as React from "react"
import {Navigate, Outlet} from "react-router-dom"
import {useAuth} from "../hooks/useAuth";

// SOURCE: https://gist.github.com/mjackson/d54b40a094277b7afdd6b81f51a0393f
export const RequireAuth = () => {
    console.info('RequireAuth');

    const auth = useAuth()
    console.info('currentUser:', auth.currentUser)
    if (!auth.currentUser) {
        console.info('currentUser doesn\'t exists.')
        // NOTE: 로그인 된 상태가 아닐 경우 Login 페이지로 리다이렉트 한다.
        return <Navigate to={'/login'}/>
    }

    return <Outlet/>
}