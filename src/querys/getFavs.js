import { gql } from "@apollo/client";

export const getFavs = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`;
