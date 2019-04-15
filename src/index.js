import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import express from "express";
import cors from "cors";
import path from "path";

import schema from "./schema";
import db from "./models";

import { PORT } from "./config";

const app = express();
app.use(cors());

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const server = new ApolloServer({
  schema,
  context: { db }
});

server.applyMiddleware({ app });

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
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
