import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useMemo } from "react"
import { useEffect } from "react"

export const PrivateRoute = ({children}) => {
    const { logged } = useContext(AuthContext)
    const { pathname, search } = useLocation()

    const lastPath = pathname + search

    useEffect(() => {
        localStorage.setItem('lastPath', lastPath)
        console.log('re-rendr')
    }, [lastPath])


    return (logged) ? children : <Navigate to='/login'/> 
}
