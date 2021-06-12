import React, { useState } from "react";
import { getAuthorQuery, addBookMutation, getBooksQuery, addAuthorMutation } from "../queries/queries";
import { useQuery, useMutation } from "@apollo/client";

const Addbook = () => {
  const [inputData, setInputData] = useState({ name: "", gendre: "", authorId: "" });
  const [inputData2, setInputData2] = useState({ name: "", age: 0 });

  const { loading, error, data } = useQuery(getAuthorQuery);

  const [addBookMut] = useMutation(addBookMutation);
  const [addAuthorMut] = useMutation(addAuthorMutation);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Something went wrong</p>;
  const author = data.authors.map((author) => {
    return (
      <option value={author.id} key={author.id}>
        {author.name}
      </option>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookMut({
      variables: {
        name: inputData.name,
        genre: inputData.gendre,
        authorId: inputData.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    })
      .then((v) => console.log(v))
      .catch((e) => console.log(e));
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    addAuthorMut({
      variables: {
        name: inputData2.name,
        age: inputData2.age,
      },
      refetchQueries: [{ query: getAuthorQuery }],
    })
      .then((v) => console.log(v))
      .catch((e) => console.log(e));
  };
  console.log(inputData2);
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
      <form onSubmit={handleSubmit2} id="add-book">
        <div className="field">
          <label>Author NAme:</label>
          <input value={inputData2.name} onChange={(e) => setInputData2({ ...inputData2, name: e.target.value })} type="text" />
        </div>

        <div className="field">
          <label>Age:</label>
          <input value={inputData2.age} onChange={(e) => setInputData2({ ...inputData2, age: parseInt(e.target.value) })} type="number" />
        </div>

        <button>+</button>
      </form>
    </div>
  );
};

export default Addbook;
