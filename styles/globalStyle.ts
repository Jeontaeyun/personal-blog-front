import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  @import url("http://fonts.googleapis.com/earlyaccess/notosanskr.css");
  body {
    font-family: "Noto Sans KR", sans-serif !important;
    margin: 0;
    a {
        text-decoration: none;
        &:focus{
          text-decoration: none;
        }
    }
    div{
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
`;
