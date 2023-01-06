import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        outline: none;
        border: none;
    }
    html{
        font-size: 62.5%;
        overflow-x: hidden;
    }
`;
