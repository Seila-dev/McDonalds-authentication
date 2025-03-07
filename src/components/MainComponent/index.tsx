import styled from "styled-components"

interface MainProp {
    children: React.ReactNode;
}

export const MainComponent = ({ children }: MainProp) => {

    return (
        <MainElement>
            {children}
        </MainElement>
    )
}

const MainElement = styled.main`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: white;

    @media(max-width: 768px){
        grid-template-columns: 1fr;
    }
`