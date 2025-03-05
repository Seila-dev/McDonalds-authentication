import { Link } from "react-router-dom"
import { MainComponent } from "../MainComponent"
import { SideMcLogo } from "../sidemclogo"
import styled from "styled-components"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from 'zod'
import { ErrorFormMessage } from "../ErrorFormMessage"

const signInUserFormSchema = z.object({
    email: z.string().nonempty('Required field').email('Please provide a valid email address'),
    password: z.string().nonempty('Required field').min(6, 'Verifify if the password has at least 6 characters')
})

type signInUserFormData = z.infer<typeof signInUserFormSchema>;

export const Login = () => {

    const { 
        register, 
        handleSubmit, 
        // reset,
        // setError,
        formState: { errors, isSubmitting },
     } = useForm({
        mode: 'onBlur',
        resolver: zodResolver(signInUserFormSchema)
     })

     const onSubmit: SubmitHandler<signInUserFormData> = (data) => {
        console.log(data);
        window.alert("User has been logged successfully.");
        return data;
     }

    return (
        <MainComponent>
            <SideMcLogo />
            <Container>
                <div className="info">
                    <h1 className="title">Welcome back to McDonald's</h1>
                    <p className="subtitle">We are glad you're back. </p>
                    <span>Sign up and enjoy the experience.</span>
                </div>
                <form 
                    className="form"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <h2 className="">Sign up to your account</h2>

                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email"
                    maxLength={50}
                    placeholder="Your Email"
                    {...register("email")}
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
                    maxLength={20}
                    placeholder="Password"
                    {...register("password")}
                    />
                    {errors?.password && (
                        <ErrorFormMessage>
                            {errors?.password?.message}
                        </ErrorFormMessage>
                    )}
                    
                    <input 
                    type="submit" 
                    value="Submit"
                    className="submit"
                    disabled={isSubmitting}
                    />
                    <p className="redirectLogin">Doesn't have an account? <Link to="/register">Create account</Link></p>
                    
                </form>
            </Container>
        </MainComponent>
    )
}

const Container = styled.section`
    padding: 50px;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
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
        border-top: 1px solid #ccc;
        max-width: 600px;
    }

`