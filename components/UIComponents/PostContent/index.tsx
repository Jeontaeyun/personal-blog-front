import * as React from "react";
import styled from "styled-components";
import PostIndicator from "../PostIndicator";

interface Props{
    
};

const PostContent : React.SFC<Props> = (props) => {
    return (
        <>
            <PostContainer>
            <h1>Lorem ipsum</h1><h2>dolor sit ametsdfsdsfdfdsfdsfsd consectetur</h2><h1>adipisicing</h1> elit. Asperiores, pariatur temporibus? Quidem officiis aperiam ipsa ipsum explicabo harum asperiores sapiente et quasi perferendis esse fuga odit deleniti dolorem cum incidunt dicta, exercitationem nobis eius libero ab? Asperiores<h1> maiores explicabo modi</h1> possimus quisquam reiciendis ratione perferendis, at exercitationem adipisci molestiae inventore nostrum temporibus cumque laudantium dolores impedit dolor ipsam nisi, veritatis dicta enim! Necessitatibus aspernatur repellendus at perspiciatis reprehenderit dolores nisi optio eaque quasi labore hic exercitationem, recusandae laboriosam dolorem deleniti magni earum ipsa facere! Recusandae libero eligendi dolore, minus accusamus itaque labore? Mollitia eius debitis, corporis amet, necessitatibus exercitationem voluptate at pariatur totam vero, deserunt animi id numquam modi earum obcaecati laudantium facilis odio atque vitae deleniti eos tempore quis? Velit at earum ratione quos nam id impedit dolor inventore sint ipsa soluta perferendis, et voluptas blanditiis? Beatae sequi laboriosam voluptates doloribus excepturi blanditiis laborum unde necessitatibus animi eum soluta optio accusantium nesciunt suscipit non quos, eos quod cupiditate obcaecati molestiae illo! Repellat ipsum tempore, dolorum reprehenderit, blanditiis velit unde magni, dolore cum qui aut illum ut? Impedit ipsam aliquid tempore magni dicta atque fuga suscipit modi accusantium labore quo ratione maiores enim vel rem, vitae adipisci. Accusantium, amet eveniet.
            </PostContainer>
            <PostIndicator/>
        </>
    );
};

PostContent.defaultProps = {
    
}

const PostContainer = styled.div`
    width:60%;
    margin: 1rem auto;
    @media (max-width: 800px){
        width: 80%;
    }
`;

export default PostContent;