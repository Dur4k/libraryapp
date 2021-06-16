import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import BookList from "./components/booklist";
import Addbook from "./components/addbook";

const client = new ApolloClient({
  uri: "http://localhost:4000/Graphql",

  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-blue-300 w-full h-screen">
        <BookList />
        <div className="px-5 text-xl">Add what are you reading 📚</div>
        <Addbook />
      </div>
    </ApolloProvider>
  );
}

export default App;
