import React from "react";

import { gql, useQuery } from "@apollo/client";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const Addbook = () => {
  const { loading, error, data } = useQuery(getAuthorQuery);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;
  const author = data.authors.map((author) => {
    return <option key={author.id}> {author.name}</option>;
  });

  console.log(data);
  return (
    <div>
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            {author}
          </select>
        </div>

        <button></button>
      </form>
    </div>
  );
};

export default Addbook;
