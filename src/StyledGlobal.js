import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none !important;
        outline: none;
        border: none;
    }
    html {
        font-size: 62.5%;
        overflow-x: hidden;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    @media screen and (max-width: 991px){
        html{
            font-size: 57.5%
        }
    }
    @media screen and (max-width:578px){
        html{
        font-size: 48%;
        }
    }
`;
