import { createGlobalStyle } from "styled-components";

import "./font.css";
import "./iconStyle.css";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
    }
    
    .container {
        max-width: 1555px;
        padding: 0px 15px;
        margin: 0 auto; 

        @media (max-width: 1700px) {
            max-width: 1280px;
        }
    }

    ul {
        list-style: none;
    }
    
`;
