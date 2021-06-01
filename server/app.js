const express = require("express");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
// mongo "mongodb+srv://cluster0.zkaiu.mongodb.net/myFirstDatabase" --username jan
mongoose.connect("mongodb+srv://jan:defence99@cluster0.zkaiu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
const { ApolloServer } = require("apollo-server-express");
const app = express();
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
