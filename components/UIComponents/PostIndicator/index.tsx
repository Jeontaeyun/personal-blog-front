import * as React from "react";
import {useEffect, useState, useCallback} from "react";
import styled from "styled-components";

interface ListProps{
    nodeName: string;
    textContent: string;
    offsetTop: number;
    offsetTopNext?: number;
    theme?: any;
}

interface Props{

}

const IndicatorList: React.SFC<ListProps> = (props)=> {
    const {nodeName, textContent, offsetTop, offsetTopNext} = props;
    const [isSelected,setIsSelected] = useState(false);
    const scrollEvent = (e) => {
        if(document.documentElement.scrollTop >= offsetTop){
            if(offsetTopNext&&document.documentElement.scrollTop < offsetTopNext){
                setIsSelected(true);
            }else if(!offsetTopNext){
                setIsSelected(true);
            }
            else{
                setIsSelected(false);
            }
        }
        else{
            setIsSelected(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll',scrollEvent);
    }, []);
    const moveTitleAction = useCallback((point)=>(e)=>{
        return window.scrollTo({top: point , behavior: 'smooth'});
    },[]);
    return(
        <>
            {nodeName === "H1" ? 
            <IndicatorListP point={isSelected} onClick={moveTitleAction(offsetTop)}>{textContent}</IndicatorListP> :
            <IndicatorListP point={isSelected} onClick={moveTitleAction(offsetTop)} style={{paddingLeft:"1.5rem"}}>{textContent}</IndicatorListP>}
        </>
    );
}

const PostIndicator : React.SFC<Props> = (props) => {
    const [titleList, setTitleList] = useState([]);
    useEffect(() => {
        const title : any[] = Array.from(document.querySelectorAll("h1,h2"));
        const titleArray = title.map(item=>({ offsetTop : item.offsetTop, nodeName: item.nodeName, textContent : item.textContent}));
        for(let i = 0 ; i < titleArray.length-1; i++){
            titleArray[i]["offsetTopNext"] = titleArray[i+1]["offsetTop"];
        }
        setTitleList(titleList.concat(titleArray));
    }, []);
   
    return (
        <>
            <Container>
                <Title>Content</Title>
                <PostIndicatorContainer>
                    {titleList.map((item,idx) => (<IndicatorList key={idx} nodeName={item.nodeName} offsetTop={item.offsetTop} offsetTopNext={item.offsetTopNext} textContent={item.textContent}/>))}
                </PostIndicatorContainer>
            </Container>
        </>
    );
};

PostIndicator.defaultProps = {
    
}

const Container = styled.div`
    position: fixed;
    font-weight: 600;
    top: 5rem;
    right:1rem;
    width: 15%;
    @media (max-width: 800px){
        display: none;
    }
`;

const Title = styled.div`
    margin-left: -0.5rem;
    font-size: 1rem;
    margin-bottom:1rem;

`;

const PostIndicatorContainer = styled.div`
    
    font-size: 0.5rem;
    color: ${props => props.theme.subColor};
    font-weight: 550;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-left: 2px solid ${props=>props.theme.subColor};
`;

const IndicatorListP = styled.div`
    padding:0.2rem 1rem;
    margin:0;
    color: ${props => props.point && props.theme.pointColor};
    cursor:pointer;
    &:hover{
        background: ${props => props.theme.gradetionSecond};
        color: white;
        transition: all 0.3s ease-in-out;
    }
`;

export default PostIndicator;