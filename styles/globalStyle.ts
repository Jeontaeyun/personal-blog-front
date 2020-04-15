import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}
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
  }
`;
