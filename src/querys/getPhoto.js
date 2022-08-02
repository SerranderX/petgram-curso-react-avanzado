import { gql } from "@apollo/client";

export const getPhoto = gql`
  query getPhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;