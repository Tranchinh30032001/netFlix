import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0 !important;
        padding: 0 ;
        box-sizing: border-box !important;
        outline: none !important;
        border: none ;
        list-style: none !important;
        text-decoration: none !important;
    }
    html{
        font-size: 62.5% !important;
        overflow-x: hidden !important;;
    }
`;
