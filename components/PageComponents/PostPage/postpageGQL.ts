import gql from "graphql-tag";

export const GET_POST = gql`
    query post($postId: ID!) {
        post(postId: $postId) {
            id
            title
            description
            createdAt
            User {
                id
                nickname
            }
            Tags {
                id
                name
            }
            Category {
                id
                name
            }
            Liker {
                id
            }
        }
    }
`;
