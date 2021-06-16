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
        <div className="px-5 py-3 bg-blue-200 rounded-xl">
          <h2 className="text-4xl font-mono">{data.book.name}</h2>
          <div className="flex mt-2 ">
            Genre <div className="ml-2 italic font-semibold">{data.book.genre}</div>
          </div>{" "}
          {!data.book.author ? (
            <div className="mt-2 italic">...no additional data</div>
          ) : (
            <>
              <div className="flex ">
                Written by <div className="ml-1 italic font-semibold">{data.book.author.name}</div>
              </div>
              <p className="text-lg font-semibold mt-3 mb-1 border-b border-black">All books by this author:</p>
              <ul className="other-books">
                {data.book.author.books.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </>
          )}
        </div>
      );
    } else {
      return <div className="italic"> 👈 select book for more info</div>;
    }
  };

  return <div>{displayDetails()}</div>;
};

export default BookDetails;
