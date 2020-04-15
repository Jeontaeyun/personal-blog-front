import React, { createContext, useEffect, useCallback, useRef, useState, TouchEvent, MouseEvent } from "react";
import styled from "styled-components";
import SliderCard from "components/UIComponents/base/SliderCard/SliderCard";

export interface ISlideContext {
    swiperRef: React.MutableRefObject<HTMLDivElement>;

    mouseDown: boolean;
    moving: boolean;
    moveStart: { x: number; y: number } | null;
    movePosition: { deltaX: number; deltaY: number } | null;

    setMoving: (moving: boolean) => void;
    setMouseDown: (mouseDown: boolean) => void;
    setMoveStart: (position: { x: number; y: number }) => void;
    setMovePosition: (movePosition: { deltaX: number; deltaY: number }) => void;

    _onHandleSwipeStart: (event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => void;
    _onHandleSwipeMove: (event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => void;
    _onHandleSwipeEnd: (event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => void;

    getPosition: (event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => { x: number; y: number };
}

export const SliderContext = createContext<ISlideContext | undefined>(undefined);

export enum SLIDER_STATUS {
    CENTER = "CENTER",
    RIGHT = "RIGHT",
    LEFT = "LEFT",
    ETC = "ETC"
}

const { Provider } = SliderContext;

const dummyData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface IProps {}

const Slider: React.FC<IProps> = props => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<ISlideContext>();

    const getPosition = (event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
        if ("touches" in event) {
            const { pageX, pageY } = event.touches[0];
            return { x: pageX, y: pageY };
        }
        const { screenX, screenY } = event;
        return { x: screenX, y: screenY };
    };

    const setMouseDown = (mouseDown: boolean) => {
        setValue(prevState => {
            return {
                ...prevState,
                mouseDown
            };
        });
    };

    const setMouseMoving = (moving: boolean) => {
        setValue(prevState => {
            return {
                ...prevState,
                moving
            };
        });
    };

    const setMoveStart = (position: { x: number; y: number }) => {
        setValue(prevState => {
            return {
                ...prevState,
                moveStart: position
            };
        });
    };

    const setMoving = (moving: boolean) => {
        setValue(prevState => {
            return { ...prevState, moving };
        });
    };

    const setMovePosition = (movePosition: { deltaX: number; deltaY: number }) => {
        setValue(prevState => {
            return { ...prevState, movePosition };
        });
    };

    const _onHandleSwipeStart = useCallback((event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
        const { x, y } = getPosition(event);
        setMoveStart({ x, y });
    }, []);

    const _onHandleSwipeMove = useCallback(
        (event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
            if (!value.moveStart) {
                return;
            }

            const { x, y } = getPosition(event);
            setMoveStart({ x, y });
            const deltaX = x - value.moveStart.x;
            const deltaY = y - value.moveStart.y;

            setMovePosition({ deltaX, deltaY });
        },
        [value]
    );

    const _onHandleSwipeEnd = useCallback(
        (event: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
            if (!value.moveStart) {
                return;
            }
            if (value.moving && value.movePosition) {
                /**
                 * TODO: onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown 구현
                 */
            }

            console.log(value.movePosition);

            setMoveStart(null);
            setMovePosition(null);
            setMoving(false);
        },
        [value]
    );

    const onMouseDown = useCallback((event: MouseEvent<HTMLDivElement>) => {
        setMouseDown(true);

        document.addEventListener<any>("mouseup", onMouseUp);
        document.addEventListener<any>("mousemove", onMouseMove);

        _onHandleSwipeStart(event);
    }, []);

    const onMouseMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
        _onHandleSwipeMove(event);
    }, []);

    const onMouseUp = useCallback((event: MouseEvent<HTMLDivElement>) => {
        setMouseDown(false);

        document.removeEventListener<any>("mouseup", onMouseUp);
        document.removeEventListener<any>("mousemove", onMouseMove);

        _onHandleSwipeEnd(event);
    }, []);

    const initialContext = {
        swiperRef,

        moving: false,
        mouseDown: false,
        moveStart: null,
        movePosition: null,

        setMoving,
        setMouseDown,
        setMoveStart,
        setMovePosition,

        _onHandleSwipeStart,
        _onHandleSwipeMove,
        _onHandleSwipeEnd,
        getPosition
    };

    useEffect(() => {
        if (value) {
            setValue(initialContext);
        }
        if (swiperRef && swiperRef.current) {
            swiperRef.current.addEventListener<any>("touchmove", _onHandleSwipeMove, {
                capture: true
            });
            return () => {
                swiperRef.current.removeEventListener<any>("touchmove", _onHandleSwipeMove, {
                    capture: true
                });
            };
        }
    }, [value, initialContext]);

    const renderSlider = dummyData.map((item: number, index: number) => {
        return <SliderCard key={index} />;
    });

    return (
        <Provider value={value}>
            <Container
                ref={swiperRef}
                onTouchStart={_onHandleSwipeStart}
                onTouchEnd={_onHandleSwipeEnd}
                onMouseDown={onMouseDown}
            >
                {renderSlider}
            </Container>
        </Provider>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export default Slider;
