const express = require("express");
import { ApolloServer } from "apollo-server-express";

import schema from "./schema";
import db from "./models";

import { PORT } from "./config";

const server = new ApolloServer({
  schema,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(query());
server.applyMiddleware({ app, path });

app.listen({ port: PORT }, () => {
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
