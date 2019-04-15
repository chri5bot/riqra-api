import { GraphQLUpload } from "apollo-server-express";

export const typeDefs = /* GraphQL */ `
  scalar Upload
`;

export const resolvers = {
  Upload: GraphQLUpload
};
