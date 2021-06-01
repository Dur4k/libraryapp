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
  // const { loading, error, data } = useQuery(getBooksQuery);
  // if (loading) return <p>Loading....</p>;
  // if (error) return <p>Something went wrong</p>;
  // const books = data.books.map((book) => {
  //   return <li key={book.id}> {book.name}</li>;
  // });

  // console.log(data);

  return (
    <div>
      <ul id="book-list"></ul>
    </div>
  );
};

export default BookList;
