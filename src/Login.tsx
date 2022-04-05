import React, {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import {getAuth} from "firebase/auth"
import {useAuth} from "./hooks/useAuth"

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const firebaseAuth = getAuth()
    const auth = useAuth()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(firebaseAuth)

    useEffect(() => {
        console.info('currentUser:', auth.currentUser)
        if (auth.currentUser) {
            const {from}: any = location.state || {from: '/'}
            navigate(from, {replace: true})
        }
    }, [auth.currentUser])

    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={event => {
                event.preventDefault()
                signInWithGoogle().then(() => {
                    console.info('signInWithGoogle:SUCCESS')
                    const currentUser = firebaseAuth.currentUser
                    auth.saveCurrentUser(currentUser!)
                })
            }}>구글로 로그인</a>
        </div>
    )
}

export {Login}