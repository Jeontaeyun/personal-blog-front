import React, { useEffect, useState, useRef, TouchEvent, MouseEvent } from "react";

interface ISwiperHandler {}

interface ISwiperConfig {
    tolerance?: number;
}

export const useSwiper = (handelr: ISwiperHandler, config: ISwiperConfig) => {
    const swiperRef = useRef();
    const [mouseDown, setMouseDown] = useState();
    const [mouseMoving, setMouseMoving] = useState();
    const [mouseStart, setMouseStart] = useState();
    const [mousePosition, setMousePosition] = useState();

    const getPosition = (event: TouchEvent<any> | MouseEvent<any>) => {
        if ("touches" in event) {
            const { pageX, pageY } = event.touches[0];
            return { x: pageX, y: pageY };
        }
        const { screenX, screenY } = event;
        return { x: screenX, y: screenY };
    };
};
