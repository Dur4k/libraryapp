import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);

  return (
    <div>
      <ul id="book-list">
        <li>book name</li>
      </ul>
    </div>
  );
};

export default BookList;
