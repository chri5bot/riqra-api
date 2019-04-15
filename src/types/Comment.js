import { gql } from "apollo-server-express";

export default gql`
  type Comment {
    id: ID!
    content: String
  }

  input CreateCommentInput {
    content: String!
  }

  extend type Query {
    comment(id: ID!): Comment
    comments: [Comment!]!
  }

  extend type Mutation {
    createComment(input: CreateCommentInput!): Comment
    deleteComment(id: ID!): Boolean
  }
`;
