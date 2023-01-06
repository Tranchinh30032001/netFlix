import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0 !important;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        list-style: none !important;
        text-decoration: none !important;
    }
    html{
        font-size: 62.5%;
        overflow-x: hidden;
    }
`;
