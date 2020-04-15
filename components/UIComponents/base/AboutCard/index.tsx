import * as React from "react";
import styled from "styled-components";

interface IProps {
    title?: string;
    description?: string;
    date?: string;
    postlist?: string[];
}

const AboutCard: React.FC<IProps> = props => {
    const { title, description } = props;
    return (
        <>
            <Card>
                <CardImage />
                <Pattern />
                <Title>{title}</Title>
                <HalfBackground>
                    <Descriptoin>
                        {/*How to create \n in React*/
                        description.split("\n").map(line => {
                            return (
                                <span>
                                    {line}
                                    <br />
                                </span>
                            );
                        })}
                    </Descriptoin>
                </HalfBackground>
            </Card>
        </>
    );
};

AboutCard.defaultProps = {
    title: `Lorem, ipsum.`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Corrupti maxime repellendus impedit pariatur quaerat fugiat 
                  ut minima illo sint facilis consequatur earum excepturi est 
                  nisi veniam incidunt delectus consequuntur nobis exercitatio
                  nem porro harum tempore, dolorum similique laboriosam. Voluptatem,
                  consectetur ducimus. Dolorem, tempore. Ad, illum obcaecati. Tenetu
                  r quos, natus voluptatibus ea sed aliquam cupiditate dolorum optio 
                  nemo veniam. Distinctio unde est ullam fuga exercitationem. Enim, 
                  saepe? Fugit molestias, placeat tempora obcaecati necessitatibus 
                  maiores nostrum. Asperiores nihil reiciendis iure obcaecati quos, 
                  molestiae doloremque magni? Unde adipisci sint sapiente doloremque 
                  atque fuga, quis maiores, officiis architecto beatae ipsum nostrum 
                  expedita alias repellat ratione nemo quisquam cupiditate ullam molli
                  tia molestias, placeat minima! Rem molestiae enim eum aspernatur r
                  epellendus ratione impedit incidunt provident, perspiciatis possimus v
                  esciunt dignissimos iure dolores quae neque veritatis, molestias laborum 
                  soluta perferendis. Dignissimos iste, doloremque natus quidem incidunt 
                  impedit porro similique eaque nostrum pariatur commodi ratione. Esse odit,
                  dicta commodi corporis quasi! Hic in cumque minus consequatur nostrum? 
                  Qui quia recusandae repellat ratione minima ad, quas excepturi adipisci
                  libero doloribus, cum incidunt exercitationem quam quibusdam. Tempore 
                  unde officia tempora aliquid vero ea quibusdam dolorum odio 
                  iure hic! Modi, vitae. Iusto pariatur quos aliquam sed solut
                  a necessitatibus, placeat assumenda ad.`,
    date: "2017년 8월 1일"
};

const Card = styled.div`
    position: relative;
    width: 70%;
    height: 400px;
    margin: 0 auto;
    background: ${props => props.theme.color.background};
    margin-bottom: 3rem;
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover {
        transform: rotate(-1deg);
        transition: transform 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);
    }
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 90%;
    }
`;
const Title = styled.div`
    position: absolute;
    font-weight: 700;
    font-size: 2rem;
    right: 0.5em;
    top: 45%;
    color: ${props => props.theme.color.sub};
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        font-size: 1.5rem;
        top: 47%;
    }
`;

const Descriptoin = styled.div`
    position: absolute;
    letter-spacing: 0.1rem;
    text-align: right;
    width: 40%;
    height: 80%;
    overflow: hidden;
    font-size: 0.8rem;
    right: 1.5em;
    top: 2rem;
    color: ${props => props.theme.color.sub};
    z-index: 120;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 4.6em;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        font-size: 0.7rem;
        top: 1.3rem;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        line-height: 1.2em;
        height: 7em;
    }
`;

const Pattern = styled.div`
    position: absolute;
    top: -0.1rem;
    right: 1rem;
    width: 20px;
    height: 30px;
    border-radius: 0.2rem 0 1rem 1rem;
    background: ${props => props.theme.color.main};
`;

const CardImage = styled.div`
    position: absolute;
    z-index: 100;
    bottom: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 90%;
    width: 300px;
    left: 2%;
    background: url("/dummy.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 250px;
    }
    @media screen and (max-width: ${props => props.theme.smallPoint}) {
        width: 50%;
    }
`;

const HalfBackground = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: ${props => props.theme.color.main};
`;

export default AboutCard;
