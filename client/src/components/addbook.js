import React, { useState } from "react";
import { getAuthorQuery, addBookMutation, getBooksQuery, addAuthorMutation } from "../queries/queries";
import { useQuery, useMutation } from "@apollo/client";

const Addbook = () => {
  const [inputData, setInputData] = useState({ name: "", gendre: "", authorId: "60c9ed9e004a603a52db7737" });
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
  return (
    <>
      <div className="px-5 text-xl">Add what are you reading 📚</div>

      <div className="p-5 w-auto flex-wrap items-start flex   ">
        <form
          className="flex-grow-0 px-5 py-3 bg-blue-200 w-auto  rounded-xl flex flex-wrap flex-col space-y-2 mr-4 mb-4 "
          onSubmit={handleSubmit}
          id="add-book"
        >
          <div className="field">
            <label>Book name:</label>
            <input
              className="bg-gray-200 rounded-xl ml-2 pl-2"
              required
              value={inputData.name}
              onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
              type="text"
            />
          </div>

          <div className="">
            <label>Genre:</label>
            <input
              className="bg-gray-200 rounded-xl ml-2 pl-2"
              required
              value={inputData.gendre}
              onChange={(e) => setInputData({ ...inputData, gendre: e.target.value })}
              type="text"
            />
          </div>

          <div className="field">
            <label>Author:</label>
            <select
              className="bg-gray-200 rounded-xl ml-2 pl-2"
              required
              value={inputData.authorId}
              onChange={(e) => setInputData({ ...inputData, authorId: e.target.value })}
            >
              <option>Select Author</option>
              {author}
            </select>
          </div>

          <button className="bg-green-400 rounded-xl border border-black">+add Book</button>
        </form>
        {/* add author */}
        <form
          onSubmit={handleSubmit2}
          className="space-y-2 flex-grow-0 px-5 py-3 bg-blue-200 w-auto  rounded-xl flex flex-wrap flex-col"
          id="add-book"
        >
          <div className="field">
            <label>Author NAme:</label>
            <input
              className="bg-gray-200 rounded-xl ml-2 pl-2"
              required
              value={inputData2.name}
              onChange={(e) => setInputData2({ ...inputData2, name: e.target.value })}
              type="text"
            />
          </div>

          <div className="field">
            <label>Age:</label>
            <input
              className="bg-gray-200 rounded-xl ml-2 pl-2"
              required
              value={inputData2.age}
              onChange={(e) => setInputData2({ ...inputData2, age: parseInt(e.target.value) })}
              type="number"
            />
          </div>

          <button className="bg-green-400 rounded-xl border border-black">+add Author</button>
        </form>
      </div>
    </>
  );
};

export default Addbook;
