import styled from "styled-components"
import Logo from "../../../public/mclogo.png"

export const SideMcLogo = () => {

    return(
        <Aside>
            <img src={Logo} alt="McDonalds Logo" className="McLogo" />
        </Aside>
    )
}

const Aside = styled.aside`
    background: var(--red);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .McLogo{
        width: 200px;
    }

`