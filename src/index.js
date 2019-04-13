import { ApolloServer } from "apollo-server";

import schema from "./schema";
import db from "./models";

import { API_PORT } from "./config";

const server = new ApolloServer({
  schema,
  context: { db }
});

server.listen(API_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);

  // db.sequelize
  //   .authenticate()
  //   .then(() => {
  //     console.log("Connection has been established successfully.");
  //   })
  //   .catch(err => {
  //     console.error("Unable to connect to the database:", err);
  //   });
});
