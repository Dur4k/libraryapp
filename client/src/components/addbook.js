import React, { useState } from "react";
import { getAuthorQuery, addBookMutation } from "../queries/queries";
import { useQuery, useMutation } from "@apollo/client";

const Addbook = () => {
  const [inputData, setInputData] = useState({ name: "", gendre: "", authorId: "" });
  const [addBookMut, { dataMutation }] = useMutation(addBookMutation);

  const { loading, error, data } = useQuery(getAuthorQuery);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;
  const author = data.authors.map((author) => {
    return <option key={author.id}> {author.name}</option>;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookMut({
      variables: {
        name: form.name,
        genre: form.genre,
        authorId: form.authorId,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input value={inputData.name} onChange={(e) => setInputData({ ...inputData, name: e.target.value })} type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input value={inputData.gendre} onChange={(e) => setInputData({ ...inputData, gendre: e.target.value })} type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select value={inputData.authorId} onChange={(e) => setInputData({ ...inputData, authorId: e.target.value })}>
            <option>Select Author</option>
            {author}
          </select>
        </div>

        <button>+</button>
      </form>
    </div>
  );
};

export default Addbook;
