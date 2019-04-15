const connect = require("connect");
import { ApolloServer } from "apollo-server-express";
const query = require("qs-middleware");

import schema from "./schema";
import db from "./models";

import { PORT } from "./config";

const server = new ApolloServer({
  schema,
  context: { db }
});

const app = connect();
const path = "/graphql";

app.use(query());
server.applyMiddleware({ app, path });

app.listen(PORT, () => {
  console.log(`🚀 Server ready at ${PORT}${server.graphqlPath}`);
  db.sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
});
