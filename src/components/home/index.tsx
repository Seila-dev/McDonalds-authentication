import styled from "styled-components"

export const Home = () => {

    return (

        <Main>
            <h1>Welcome to McDonalds' Hub</h1>
        </Main>
    )
}

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--red);
    color: var(--yellow);
    transition: 0.15s ease-in;
`