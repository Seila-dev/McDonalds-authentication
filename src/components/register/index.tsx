import { Link } from "react-router-dom"
import { MainComponent } from "../MainComponent"
import { SideMcLogo } from "../sidemclogo"
import styled from "styled-components"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import z from 'zod'

export const Register = () => {

    // const { register, handleSubmit, errors } = useForm()

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
                    <h2 className="">Create your account</h2>
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name"
                    maxLength={50}
                    placeholder="Your Name"
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    maxLength={50}
                    placeholder="Your Email"
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    maxLength={20}
                    placeholder="Create a password"
                    />
                    
                    <input 
                    type="submit" 
                    value="Enviar"
                    className="submit"
                    />
                    <p className="redirectLogin">Já tem uma conta? <Link to="/login">Faça login</Link></p>
                    
                </form>
            </Container>
        </MainComponent>
    )
}

const Container = styled.section`
    padding: 50px;
    display: flex;
    flex-direction: column; 
    gap: 50px;

    .title{
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .subtitle{
        font-size: 15px;
        font-weight: 700;
    }
    .info span{
        font-size: 15px;
        font-weight: 400;
    }
    .form{
        display: flex;
        flex-direction: column;
    }
    .form input{
        padding: 10px 20px;
        width: 100%;
        max-width: 600px;
        outline: none;
        font-size: 16px;
    }
    .form label{
        margin: 20px 0 10px 0;
    }
    .form .submit{
        background: var(--yellow);
        margin-top: 30px;
        border: none;
        cursor: pointer;
    }
    .redirectLogin{
        margin-top: 30px;
        padding-top: 10px;
        border-top: 1px solid black;
        max-width: 600px;
    }

`