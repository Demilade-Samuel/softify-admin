import {createContext, useEffect, useState} from 'react'
import { getUserCookie } from '../hooks/useLogin'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const userDetails = JSON.parse(getUserCookie('userDetails'))

        if(userDetails){
            setUser(userDetails)
            setAuthenticated(userDetails.authenticated)
        }
    },[])

    return (
        <AuthContext.Provider value={{user, authenticated, setUser, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}