import { Link } from "react-router-dom"
import { MainComponent } from "../MainComponent"
import { SideMcLogo } from "../sidemclogo"
import styled from "styled-components"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod'
import { ErrorFormMessage } from "../ErrorFormMessage"

const registerUserFormSchema = z.object({
    username: z.string().nonempty('Required field').max(50, 'More than 50 characters is not allowed'),
    email: z.string().nonempty('Required field').email('Invalid E-mail address'),
    password: z.string().nonempty('Required field').min(6, 'Verifify if the password has at least 6 characters').max(20, 'More than 20 characters is not allowed'),
})

type registerUserFormData = z.infer<typeof registerUserFormSchema>

export const Register = () => {

    const { 
        register, 
        handleSubmit, 
        // setError,
        // reset,
        formState: { errors, isSubmitting }
    } = useForm({
        mode: 'onBlur',
        resolver: zodResolver(registerUserFormSchema)
    })

    const onSubmit: SubmitHandler<registerUserFormData> = (data) => {
        window.alert('User has been registered successfully')
        return data;
    }

    return (
        <MainComponent>
            <SideMcLogo />
            <Container>
                <div className="info">
                    <h1 className="title">Welcome to McDonald's</h1>
                    <p className="subtitle">Register now</p>
                    <span>And enjoy the experience</span>
                </div>
                <form 
                    className="form"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <h2>Create your account</h2>
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text" 
                    id="name"
                    placeholder="Your Name"
                    {...register('username')}
                    />
                    {errors?.username && (
                        <ErrorFormMessage>
                            {errors?.username?.message} 
                        </ErrorFormMessage>
                    )}

                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    placeholder="Your Email"
                    {...register('email')}
                    />
                    {errors?.email && (
                        <ErrorFormMessage>
                            {errors?.email?.message} 
                        </ErrorFormMessage>
                    )}

                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    id="password"
                    placeholder="Create a password"
                    {...register('password')}
                    />
                    {errors?.password && (
                        <ErrorFormMessage>
                            {errors?.password?.message} 
                        </ErrorFormMessage>
                    )}
                    
                    <input 
                    type="submit" 
                    value="Enviar"
                    className="submit"
                    disabled={isSubmitting}
                    />
                    <p className="redirectLogin">Already has an account? <Link to="/login">Login</Link></p>
                    
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