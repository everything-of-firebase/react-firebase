import React from 'react'
import {useNavigate} from "react-router-dom"
import {useAuth} from "./hooks/useAuth"

const HomePage = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    return (
        <div>
            Hello {auth.currentUser?.displayName}!
            <br/>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={event => {
                event.preventDefault()
                navigate('/logout')
            }}>로그아웃</a>
        </div>
    )
}

export {HomePage}