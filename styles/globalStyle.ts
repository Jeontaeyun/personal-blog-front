import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    @font-face { 
      font-family: 'Eoe_Zno_M'; 
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/Eoe_Zno_M.woff') format('woff');
      font-weight: normal; 
      font-style: normal; 
    }

  }
  body {

    font-family : "Eoe_Zno_M"; 
    margin: 0;
    a {
      text-decoration: none;
      color: black;
    }
    a:focus{
      text-decoration: none;
    }
    @media screen and (min-width: 1024px){
      font-size: 16px;
    }
    @media screen and (min-width: 764px ){
      font-size: 14px;
    }
    @media screen and (min-width: 420px ){
      font-size: 12px;
    }
  }
`;
