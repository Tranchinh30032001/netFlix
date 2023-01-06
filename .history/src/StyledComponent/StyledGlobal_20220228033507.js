import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0 ;
        padding: 0 ;
        box-sizing: border-box !important;
        outline: none !important;
        border: none ;
        list-style: none !important;
        text-decoration: none !important;
    }
    html{
        font-size: 62.5% ;
        overflow-x: hidden ;
    }
`;
