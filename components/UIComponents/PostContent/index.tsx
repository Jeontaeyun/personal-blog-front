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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum est per<h2>spiciatis architecto</h2> distinctio earum mollitia saepe praesentium voluptatibus ut reprehenderit facere labore non rerum, quasi et fuga illum vitae quod consequatur corrupti excepturi voluptatem? Ipsum delectus voluptatem error, laboriosam, quisquam sapiente pariatur doloremque, asperiores dicta aperiam libero. Molestiae aperiam placeat dicta vitae <h2>commodi quo eos dol</h2>ores laboriosam officiis provident, quod labore sit voluptates dolorem reprehenderit nulla explicabo accusamus. Cumque pariatur vero placeat aliquid quidem possimus sunt dignissimos? Ex dolor id fuga qui praesentium alias accusantium neque reiciendis nesciunt sed obcaecati suscipit non animi sint repudiandae consequatur, delectus quibusdam. Nobis obcaecati minima dignissimos earum culpa officia saepe. Numquam laudantium, omnis, sit eum pariatur commodi sapiente in sunt quo at quibusdam aut magnam perspiciatis voluptatum modi ipsa id suscipit quaerat neque dolorum atque, veniam dolore asperiores esse. Officiis ad et consectetur numquam eveniet corporis, nihil eaque modi fugiat ab alias laboriosam minima quaerat voluptatum, vero dicta qui esse quia aspernatur? Quidem eius modi laborum, nostrum, eveniet, accusantium at ut perspiciatis numquam expedita maxime totam dolorum placeat eos dolorem velit impedit quis? Porro odit quia, laudantium beatae voluptate molestiae, dolorem quidem magnam dicta, dignissimos eos repudiandae iste nihil praesentium expedita quae! Sapiente voluptatum eaque architecto quos. Illo inventore obcaecati soluta natus vero illum optio nisi dicta cumque corrupti impedit ad nobis porro, neque mollitia ratione accusantium facere ullam pariatur dolore ipsam consequuntur magnam ab repellat? Sapiente earum cumque ratione est sequi omnis illo veniam fugit quam, amet, deserunt porro, asperiores quia repudiandae neque quisquam ipsum consequuntur unde rem facere labore odit ad quo. Officiis itaque facilis ab, provident iusto labore, beatae et minima ullam numquam veniam quod dignissimos, obcaecati aliquam ex. Odit minus corporis maiores amet totam ullam perspiciatis, officiis unde! Ex facere deleniti quam modi fugiat reprehenderit a expedita tempore culpa corrupti.
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