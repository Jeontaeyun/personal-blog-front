import React, { useContext, useCallback, useEffect, useState, TouchEvent, MouseEvent } from "react";
import styled from "styled-components";
import { SliderContext, SLIDER_STATUS } from "containers/home/Slider";

interface IProps {}

const SliderCard: React.FC<IProps> = props => {
    useEffect(() => {}, []);

    return <Container></Container>;
};

const Container = styled.div`
    display: inline-block;
    width: 50px;
    height: 60px;
    background: red;
`;

export default SliderCard;
