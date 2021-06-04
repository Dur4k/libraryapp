import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./bookdetails";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState({ selected: null });
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;
  const books = data.books.map((book) => {
    return (
      <li onClick={() => setSelected({ selected: book.id })} key={book.id}>
        {book.name}
      </li>
    );
  });

  console.log(data);

  return (
    <div>
      <ul id="book-list">{books}</ul>
      <BookDetails bookID={selected.selected} />
    </div>
  );
};

export default BookList;
