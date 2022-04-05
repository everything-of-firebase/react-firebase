import {useState} from "react"
import {User} from "firebase/auth"

let cachedUser: User | undefined
try {
    cachedUser = JSON.parse(localStorage.getItem('currentUser') as string) as User
} catch (e) {
    console.warn('Parsing \'currentUser\' property from Local Storage failed.')
    localStorage.removeItem('currentUser')
}

export const useAuth: () => {
    currentUser: User | null,
    saveCurrentUser: (user: User) => void,
    clearCurrentUser: () => void,
} = () => {
    console.info('useAuth')

    const [currentUser, setCurrentUser] = useState<User | null>(cachedUser || null)

    const saveCurrentUser: (user: User) => void = (user) => {
        if (!user) {
            throw new Error('Parameter `user` doesn\'t exists.')
        }
        cachedUser = user
        localStorage.setItem('currentUser', JSON.stringify(user))
        setCurrentUser(user)
    }

    const clearCurrentUser: () => void = () => {
        cachedUser = undefined
        localStorage.removeItem('currentUser')
        setCurrentUser(null)
    }

    return {
        currentUser,
        saveCurrentUser,
        clearCurrentUser
    }
}