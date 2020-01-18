import gql from "graphql-tag";

export const GET_POST = gql`
  query post($post_id: ID!) {
    post(post_id: $post_id) {
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
