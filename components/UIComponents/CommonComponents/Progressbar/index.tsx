import * as React from "react";
import {useState, useEffect} from "react";
import styled from 'styled-components';

interface Props{
    color?: string;
}

const Progressbar: React.SFC<Props> = (props) => {
    const { color} = props;
    const  [progress, setProgress] = useState <number | boolean> (false);
    useEffect(()=>{
        window.addEventListener("loadstart", ()=>setProgress(0.1));
        if(typeof progress === "number" && progress <= 1){
            setInterval(()=>setProgress(progress + 0.1),200);
            window.addEventListener("load", ()=> {
                setTimeout(()=>setProgress(1),2000);
            });
        }
        else if(typeof progress === "number" && progress >1){
            setProgress(false);
        }
    });
    return (
        <>
            { !!progress && 
                <ProgressbarContainer>
                    <Progress progress = {progress} color={color}/>
                </ProgressbarContainer>
            }
        </>
  );
};

Progressbar.defaultProps={
    color: "#e45d4c"
}

const ProgressbarContainer = styled.div`
    position: fixed;
    top:0;
    width: 100%;
    height:4px;
    z-index:100000;
`;

const Progress = styled.div`
    width: ${props=>props.progress*100}%;
    height: 100%;
    background:${props=>props.color};
    transition: width 1s ease-in-out;
`;

export default Progressbar;