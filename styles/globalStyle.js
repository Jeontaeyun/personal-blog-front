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
  }
`;
