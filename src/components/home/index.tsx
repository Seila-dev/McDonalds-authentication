import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { Header } from "../header"

export const Home = () => {

    const { isAuthenticated, user } = useContext(AuthContext)

    return (

        <Main>
            <section className="container">

                <div className="mainHeader">
                    <Header />
                    <h1 className="title">Welcome to McDonalds' Hub, {user ? user.username : 'Sir'}</h1>
                    {isAuthenticated ? (
                        <></>
                    ) : (
                        <p>If you just logged in and your informations aren't there, please refresh the page or <Link to="/login" className="links">Login</Link></p>
                    )}
                    {user &&
                        <p>Would you like to order something, {user.username}?</p>
                    }
                </div>

                {isAuthenticated ? (
                    <Content>
                        <section className="foodSection">
                            <h3>Food Section</h3>
                            <div className="flex-container">
                                <p>Products List here</p>
                            </div>
                        </section>
                    </Content>
                ) : (
                    <></>
                )}

            </section>

        </Main>
    )
}

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: white;
    color: var(--yellow);
    align-items: center;
    transition: 0.15s ease-in;
    .links{
        color: var(--almost-black);
        border-bottom: 1px solid black;
    }
    .container{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background: var(--red);
    }
    .mainHeader{
        max-width: 1200px;
        width: 100%;
        padding: 0 20px 50px 20px;
    }
    .title{
        font-size: 40px;
    }
`

const Content = styled.section`
    width: 100%;
    background: white;
    color: var(--almost-black);
    display: flex;
    align-items: center;
    justify-content: center;
    .foodSection{
        max-width: 1200px;
        width: 100%;
        padding: 20px;
    }
`