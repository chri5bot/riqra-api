import uuidv4 from "uuid/v4";

export default async (parent, { input: { content } }, { db }, info) => {
  return db.comments.create({
    id: uuidv4(),
    content
  });
};
