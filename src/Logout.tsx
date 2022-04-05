import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {getAuth} from "firebase/auth"
import {useAuth} from "./hooks/useAuth"

const Logout = () => {
    const navigate = useNavigate()
    const firebaseAuth = getAuth()
    const auth = useAuth()
    useEffect(() => {
        firebaseAuth.signOut().then(() => {
            auth.clearCurrentUser()
            alert('You are successfully logged out!')
            navigate('/login')
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>Bye!</div>
    )
}

export {Logout}