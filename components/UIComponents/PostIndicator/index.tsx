import * as React from "react";
import {useEffect, useState, useCallback} from "react";
import styled from "styled-components";

interface Props{
    
}

const PostIndicator : React.SFC<Props> = (props) => {
    const [titleList, setTitleList] = useState([]);
    useEffect(() => {
        let title = document.querySelectorAll("h1,h2");
        setTitleList(titleList.concat(Array.from(title)));
    }, []);
    const moveTitleAction = useCallback((point)=>(e)=>{
        return window.scrollTo({top: point , behavior: 'smooth'});
    },[]);
    return (
        <>
        <PostIndicatorContainer>
        <Title>Content</Title>
            {titleList.map((item) => (
                item.nodeName === "H1" ? 
                <p key={item.textContent} onClick={moveTitleAction(item.offsetTop)}>{item.textContent}</p> 
                : <span key={item.textContent} onClick={moveTitleAction(item.offsetTop)}>{item.textContent}</span>))}
            </PostIndicatorContainer>
        </>
    );
};

PostIndicator.defaultProps = {
    
}

const Title = styled.div`
    font-size: 1rem;
`;

const PostIndicatorContainer = styled.div`
    position: fixed;
    font-size: 0.5rem;
    color: ${props => props.theme.subColor};
    font-weight: 550;
    top: 5rem;
    right:1rem;
    width: 15%;
    padding: 0 0.8rem;
    border-left: 2px solid ${props=>props.theme.subColor};
    @media (max-width: 800px){
        display: none;
    }
    p, span {
        padding:0.2rem 0.3rem;
        cursor:pointer;
    }
    p:hover, span:hover{
        background: ${props => props.theme.gradetionSecond};
        color: white;
        transition: all 0.3s ease-in-out;
    }
    span {
        display: block;
        padding: 0.2rem 1rem;
    }
`;

export default PostIndicator;