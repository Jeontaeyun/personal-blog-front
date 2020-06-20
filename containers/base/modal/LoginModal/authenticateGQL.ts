import gql from "graphql-tag";

export const AUTHENTICATE_OAUTH = gql`
    mutation AuthenticateOauth($accessToken: String!, $platform: String) {
        authenticateOauth(accessToken: $accessToken, platform: $platform) {
            token
        }
    }
`;

export const AUTHENTICATE_LOCAL = gql`
    mutation AuthenticateOauth($accessToken: String!, $platform: String) {
        authenticateOauth(accessToken: $accessToken, platform: "GOOGLE") {
            token
        }
    }
`;
