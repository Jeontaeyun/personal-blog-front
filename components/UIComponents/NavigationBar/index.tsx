import * as React from "react";
import styled from 'styled-components';

interface Props{
    list? : string[]
};

const NavigatorBar : React.SFC<Props> = (props) => {
    const {list} = props;
    return (
    <> 
        <List>
            {list.map(item=><li>{item}</li>)}
        </List>
    </>
    );
};

NavigatorBar.defaultProps = {
  list: ["프론트 엔드", "백 엔드", "컴퓨터 공학"]
}

const List = styled.ul`
    list-style-type : none;
    padding-left: -40px;
    &:li{
        float:left;
    }
`;

export default NavigatorBar;