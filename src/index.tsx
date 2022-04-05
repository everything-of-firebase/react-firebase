import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom"
import {App} from "./App"
import initFirebaseApp from "./firebase/FirebaseApp"
import {FirebaseApp} from "firebase/app"
import {createRoot} from "react-dom/client"

const firebaseApp: FirebaseApp = initFirebaseApp()

console.info('Root.render')
const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
        <App/>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
