import { GraphQLUpload } from "apollo-server";

export const typeDefs = /* GraphQL */ `
  scalar Upload
`;

export const resolvers = {
  Upload: GraphQLUpload
};
