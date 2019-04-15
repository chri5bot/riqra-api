import uuidv4 from "uuid/v4";

export default async (parent, { id }, { db }, info) => {
  return db.comments.destroy({
    where: {
      id: id
    }
  });
};
