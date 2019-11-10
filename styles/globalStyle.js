import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  body {
    @import url("http://fonts.googleapis.com/earlyaccess/nanumgothic.css"); 
     font-family: 'Nanum Gothic', sans-serif;
     margin: 0;
     a {
        text-decoration: none;
        color: black;
      }
      a:focus{
        text-decoration: none;
      }
      @media screen and (min-width: 1024px ){
        font-size: 16px;
      }
      @media screen and (min-width: 764px ){
        font-size: 14px;
      }
      @media screen and (min-width: 400px ){
        font-size: 12px;
      }
  }
`;
