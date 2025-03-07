import { createContext, useState, useEffect, useCallback } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { useNavigate } from "react-router-dom";



type FormData = {
    email: string
    password: string
}

type FormDataRegister = {
    email: string
    password: string
    username: string
}

type User = {
    id: number
    email: string
    username: string
}

type authContextType = {
    isAuthenticated: boolean
    user: User | null
    signIn: (data: FormData) => Promise<void>
    registerAccount: (data: FormDataRegister) => Promise<void>
    signOut: () => void
}

export const AuthContext = createContext({} as authContextType)

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)

    console.log(user)

    const isAuthenticated = !!user

    useEffect(() => {
        const { 'mcdonalds.token': token } = parseCookies()

        if(token) {
            fetch('https://mcdonalds-server.onrender.com/users', {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
            }).then((response) => response.json())
            .then((userData) => setUser(userData))
            .catch((error) => {
                console.error('Error during user data', error)
            })
        }
    }, [])

    const navigate = useNavigate()

    const signIn = async ({ email, password }: FormData) => {
        const url = 'https://mcdonalds-server.onrender.com/users/login'

        console.log(email, password)

 
        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
    
            if(!request.ok) {
                const error = await request.json()
                throw new Error(error.message || "Invalid email or password")
            }
    
            const response = await request.json()
    
            setCookie(response, 'mcdonalds.token', response.token, {
                maxAge: 60 * 60 * 1 // 1h
            })
    
            setUser(response.user)
    
            navigate("/")
    
        } catch (error: any) {
            console.error('esse djanhooo', error)
            throw error;
        }
    }

    const registerAccount = async ({ email, password, username }: FormDataRegister) => {
        const url = 'https://mcdonalds-server.onrender.com/users/'

        console.log(email, password, username)

 
        try {
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, username })
            })
    
            if(!request.ok) {
                const error = await request.json()
                throw new Error(error)
            }
    
            const response = await request.json()
    
            setCookie(response, 'mcdonalds.token', response.token, {
                maxAge: 60 * 60 * 1 // 1h
            })
    
            setUser(response.user)
    
            navigate("/login")
    
        } catch (error: any) {
            console.error('esse djanhooo', error)
        }
    }

    const signOut = useCallback(() => {
        destroyCookie(null, 'mcdonalds.token')
        setUser(null)

        window.location.reload()
    }, [])


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, registerAccount, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}