import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --color-first: #EFF8FF;
        --color-second: #0F9AFE;
        --color-third: #293145;
        --color-text-first: #6E7275;
        --color-text-second: #DBDBDB;
        --color-white: #fff;
        --color-hover: #0e8be5;
    }
`;

export default GlobalStyle;
