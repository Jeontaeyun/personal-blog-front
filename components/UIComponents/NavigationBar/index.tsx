import * as React from "react";
import styled from 'styled-components';

interface Props{
    title?: string;
    postlist? : string[];
};

const NavigatorBar : React.SFC<Props> = (props) => {
    return (
    <> 

    </>
    );
};

NavigatorBar.defaultProps = {
    title: "카테고리"
}


export default NavigatorBar;