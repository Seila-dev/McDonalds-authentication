import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body, html{
        font-family: "Poppins", serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    :root{
        --yellow: #FFC72C;
        --red: #DA291C;
        --almost-black: #27251F;
    }
`