import { MainComponent } from "../MainComponent"
import { SideMcLogo } from "../sidemclogo"
import styled from "styled-components"

export const Register = () => {

    return (
        <MainComponent>
            <SideMcLogo />
            <Container>
                <div className="info">
                    <h1 className="title">Welcome to McDonald's</h1>
                    <p className="subtitle">Register now</p>
                    <span>And enjoy the experience</span>
                </div>
                <form className="form">

                </form>
            </Container>

        </MainComponent>
    )
}

const Container = styled.section`
    .info .title{
        font-size: 30px;
        font-weight: 700;
    }
    .info .subtitle{
        font-size: 15px;
        font-weight: 700;
    }
    .info span{
        font-weight: 400;
    }
`