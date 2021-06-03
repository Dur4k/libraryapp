import { gql, useQuery } from "@apollo/client";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

// const addBookMutation = gql`
//   mutation {
//     addBook(name: "", genre: "", authorId: "") {
//       name
//       id
//     }
//   }
// `;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export { getAuthorQuery, getBooksQuery, addBookMutation };
