import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

interface IListProps {
    nodeName: string;
    textContent: string;
    offsetTop: number;
    offsetTopNext?: number;
    theme?: any;
}

interface IProps {}

const IndicatorList: React.FunctionComponent<IListProps> = props => {
    const { nodeName, textContent, offsetTop, offsetTopNext } = props;
    const [isSelected, setIsSelected] = useState<boolean | null>(false);
    const scrollEvent = (eveny: any) => {
        // For Cross Browsing It's Important cuz Safari find body srcoll and firsfox and chrome detect documentElement
        const crossBrowsingSroolTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (crossBrowsingSroolTop >= offsetTop) {
            if (offsetTopNext && crossBrowsingSroolTop < offsetTopNext) setIsSelected(true);
            else if (!offsetTopNext) setIsSelected(true);
            else setIsSelected(false);
        } else setIsSelected(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
    }, []);

    const moveTitleAction = useCallback(
        point => (event: React.MouseEvent<HTMLParagraphElement>) => {
            return window.scrollTo({ top: point, behavior: "smooth" });
        },
        []
    );

    const isH1Tag = nodeName === "H1";

    if (isH1Tag) {
        return (
            <IndicatorListP point={isSelected} onClick={moveTitleAction(offsetTop)}>
                <a>{textContent}</a>
            </IndicatorListP>
        );
    } else {
        return (
            <IndicatorListP point={isSelected} onClick={moveTitleAction(offsetTop)} style={{ paddingLeft: "1.5rem" }}>
                <a>{textContent}</a>
            </IndicatorListP>
        );
    }
};

const PostIndicator: React.FC<IProps> = props => {
    const [titleList, setTitleList] = useState<Array<IListProps> | null>([]);
    const [isView, setIsView] = useState<boolean>(false);
    const scrollEvent = e => {
        const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (crossBrowsingTop > 400) setIsView(true);
        else setIsView(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        window.addEventListener("load", scrollEvent);
    }, []);
    useEffect(() => {
        const title: any[] = Array.from(document.querySelectorAll("h1,h2"));
        const titleArray: Array<IListProps> = title.map(item => ({
            offsetTop: item.offsetTop,
            nodeName: item.nodeName,
            textContent: item.textContent
        }));

        for (let i = 0; i < titleArray.length - 1; i++) {
            titleArray[i]["offsetTopNext"] = titleArray[i + 1]["offsetTop"];
        }
        setTitleList(titleList.concat(titleArray));
    }, []);
    return (
        <>
            {isView && (
                <Container>
                    <Title>카탈로그</Title>
                    <PostIndicatorContainer>
                        {titleList.map((item, idx) => (
                            <IndicatorList
                                key={idx}
                                nodeName={item.nodeName}
                                offsetTop={item.offsetTop}
                                offsetTopNext={item.offsetTopNext}
                                textContent={item.textContent}
                            />
                        ))}
                    </PostIndicatorContainer>
                </Container>
            )}
        </>
    );
};

const Container = styled.div`
    position: fixed;
    font-weight: 600;
    top: 8rem;
    right: 1rem;
    width: 15%;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: none;
    }
`;

const Title = styled.div`
    margin-left: -0.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const PostIndicatorContainer = styled.div`
    color: ${props => props.theme.subColor};
    font-weight: 550;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-left: 1px solid ${props => props.theme.achromaticColor};
`;

const IndicatorListP = styled.div<{ point: boolean }>`
    position: relative;
    font-size: 0.5rem;
    padding-top: 0.2rem;
    overflow-wrap: break-word;
    padding-bottom: 0.2rem;
    padding-left: 1rem;
    margin: 0;
    color: ${props => props.point && props.theme.mainColor};
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.achromaticColor};
        color: ${props => props.theme.mainColor};
        transition: all 0.3s ease-in-out;
    }
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        font-size: 0.3rem;
    }
    ${props =>
        props.point &&
        `& > a::before{
        content: "";
        display:block;
        width: 1px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-left: 1px solid ${props.theme.mainColor};
    }`}
`;

export default PostIndicator;
