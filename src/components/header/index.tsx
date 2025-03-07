import styled from 'styled-components'
import logo from '../../assets/mclogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export const Header = () => {

    const { isAuthenticated, user } = useContext(AuthContext)

    return (
        <HeaderElement>
            <img src={logo} alt="McDonalds Logo" className='logo' />
            { isAuthenticated ? (
                <div className="user">
                    <p className='username'>{user?.username}</p>
                </div>
            ) : (
                <Link to="/login" className='signUpBtn'>Sign up</Link>
            )}
        </HeaderElement>
    )
}

const HeaderElement = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px 0;
    min-height: 100%;

    .logo{
        width: 50px;
    }
    .signUpBtn{
        border: none;
        border-radius: 3px;
        font-size: 15px;
        cursor: pointer;
        padding: 10px 25px;
        color: var(--almost-black);
        background: var(--yellow);
    }
    a{
        color: var(--almost-black);
    }
    .username{
        font-size: 20px;
    }
`