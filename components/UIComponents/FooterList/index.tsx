import * as React from "react";
import styled from 'styled-components';
import Link from "next/link";

interface Props{
    title?: string;
    footerList? : string;
}

const FooterList: React.SFC<Props> = (props) => {
  const {title, footerList} = props;
  return (
    <>
      <FooterContainer>
      <FooterTitle>{title}</FooterTitle>
            <FooterContents>{footerList}</FooterContents>
      </FooterContainer>
    </>
  );
};

FooterList.defaultProps={
    title:"타이틀",
    footerList: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sit quos corrupti voluptas iusto natus cumque suscipit, id ad temporibus quo eos possimus aliquid exercitationem maiores earum excepturi repudiandae, magnam itaque cum dolorem dolorum animi modi quasi! Error sed dignissimos ipsa. Odio ab aspernatur animi repudiandae, quo odit dicta provident, exercitationem aut id sint! Ex voluptates cum quae! Nulla iste, similique maxime veniam sed nihil perspiciatis itaque rerum dolores illum, accusamus magni corrupti, nesciunt iusto! Praesentium dolorum exercitationem impedit nemo asperiores delectus perspiciatis itaque, molestiae hic aperiam quia ipsa numquam nobis? Eaque, nihil dolorem velit asperiores culpa assumenda quasi quas quod, beatae labore aut at ullam repellendus explicabo deleniti nulla amet. Debitis, accusamus dolores nobis rerum quaerat deserunt, facere, magni aliquam vitae voluptatum eaque atque voluptatibus minus numquam dolorem eius perferendis praesentium illum quae eum ducimus vel corporis expedita! Hic, libero quos. Vitae earum deserunt fugit dolorem magni reiciendis tempora ut obcaecati ipsam a accusamus aliquam hic, corrupti iure nobis perferendis cupiditate ad nemo. Optio, ipsam. Voluptatem, animi? Aperiam sunt sequi quisquam maiores, in vero! Soluta excepturi ipsam sapiente id vero odit animi vel maxime? Natus enim reiciendis impedit reprehenderit veniam rem quae eveniet nostrum ut quaerat, temporibus illum quisquam quam facilis, odio accusantium iusto in laudantium quibusdam dignissimos vitae distinctio, libero nobis. Minima aperiam aliquam quae modi atque quo, molestiae quas consequuntur quibusdam nemo voluptas consectetur debitis, eveniet excepturi dignissimos, cumque minus. Quis, reprehenderit soluta quae fuga tempora perferendis ipsa repudiandae, ullam voluptatem aliquid porro maiores? Minima rem consequatur perferendis sit corporis quibusdam quasi. Quasi, fugit eveniet dolore harum quo odit repellendus. Soluta id officiis odio ad eaque quibusdam reprehenderit tempore, voluptate tenetur quod dicta possimus cum? Minus recusandae corporis dicta aperiam autem quas, nesciunt cumque assumenda quos nemo, deserunt non voluptatum veritatis. Accusantium ducimus cumque totam quisquam pariatur?"
}

const FooterContainer = styled.div`
  display: inline-block;
  width: 30%;
  margin: 1.5%;
  margin-top: 3rem;
  @media(max-width:800px){
    display: block;
    width: 80%;
    margin: 2rem auto;
  }
`;



const FooterTitle = styled.div`
  font-size : 1.2rem;
  color : white;
  margin-bottom : 2rem;
`;

const FooterContents = styled.div`
  color : white;
  width: 100%;
  margin: 0 atuo;
  font-size:1em;
  overflow:hidden;
  text-overflow:ellipsis;
  line-height:1.5;
  height:4.5em;
	word-wrap:break-word;
  display:-webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient:vertical;
  margin-bottom: 3rem;
`;

export default FooterList;