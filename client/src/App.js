import React from "react";
import "./App.css";
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
      <div className="App">
        <BookList />
        <Addbook />
      </div>
    </ApolloProvider>
  );
}

export default App;
