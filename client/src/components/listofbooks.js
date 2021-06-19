import React from "react";

const ListofBooks = ({ books }) => {
  return (
    <div className="flex-grow-0 px-5 py-3 bg-blue-200 w-3/5  rounded-xl flex flex-wrap flex-row mr-4 mb-4 ">
      <ul className="flex flex-row  flex-wrap" id="book-list   ">
        {books}
      </ul>
    </div>
  );
};

export default ListofBooks;
