import React, { useState } from "react";
import { getBooksQuery, deleteBookMutation } from "../queries/queries";
import { useQuery, useMutation } from "@apollo/client";
import ListofBooks from "./listofbooks";
import BookDetails from "./bookdetails";

const BookList = () => {
  const [deleteBookMut] = useMutation(deleteBookMutation);
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState({ selected: null });

  const submitDeleteBook = (id) => {
    deleteBookMut({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: getBooksQuery }],
    })
      .then((v) => console.log(v))
      .catch((e) => console.log(e));
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;
  const books = data.books.map((book) => {
    return (
      <li
        className="bg-blue-100 py-1 px-2 rounded-xl border-black border m-1 flex flex-row h-10 items-center  "
        onClick={() => setSelected({ selected: book.id })}
        key={book.id}
      >
        {book.name}
        <button className="ml-2 w-5 h-5 self-center text-center    bg-red-400 rounded-full" onClick={() => submitDeleteBook(book.id)}>
          <div className=" p-1 -mt-2 text-white">x</div>
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="px-5 py-2 text-2xl text-bold">List of my Books :</div>
      <div className="p-5 w-full flex-wrap items-start flex   	 ">
        <ListofBooks books={books} />
        <BookDetails className="  w-2/5 h-auto" bookID={selected.selected} />
      </div>
    </>
  );
};

export default BookList;
