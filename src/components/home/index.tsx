import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export const Home = () => {

    const { isAuthenticated, user } = useContext(AuthContext) 

    return (

        <Main>
            <h1>Welcome to McDonalds' Hub, { user ? user.username: 'Sir'}</h1>
            {isAuthenticated ? (
                <></>
            ) : (
                <p>If you just logged in and your informations aren't there, please refresh the page or <Link to="/register" className="links">Sign up</Link></p>
            )}
            { user &&
                <p>Would you like to order something, {user.username}?</p>
            }
        </Main>
    )
}

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--red);
    color: var(--yellow);
    transition: 0.15s ease-in;

    .links{
        color: var(--almost-black);
        border-bottom: 1px solid black;
    }
`