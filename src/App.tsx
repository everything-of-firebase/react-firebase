import React, {useEffect} from 'react'
import {Route, Routes, useLocation, useNavigationType} from 'react-router-dom'
import {HomePage} from "./HomePage"
import {Logout} from "./Logout";
import {RequireAuth} from "./components/RequireAuth";
import {Login} from "./Login";

const App = () => {
    console.info('App.render')

    let location = useLocation()
    let navigationType = useNavigationType()
    console.log('basename is: ' + process.env.REACT_APP_ROUTER_BASENAME)
    useEffect(() => {
        console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
        console.log(`The last navigation action was ${navigationType}`)
    }, [location, navigationType])

    return (
        <>
            <Routes>
                <Route element={<RequireAuth/>}>
                    <Route path="/" element={<HomePage/>}/>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="logout" element={<Logout/>}/>
            </Routes>
        </>
    )
}

export {App}