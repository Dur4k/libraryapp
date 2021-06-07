import React from "react";
import { getBookQuery } from "../queries/queries";
import { useQuery } from "@apollo/client";

const BookDetails = ({ bookID }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookID },
  });
  if (loading) return <p>Loading....</p>;
  //   if (error) return <p>Something went wrong</p>;
  const displayDetails = () => {
    if (data.book) {
      return (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {data.book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>no data</div>;
    }
  };

  return <div>{displayDetails()}</div>;
};

export default BookDetails;
