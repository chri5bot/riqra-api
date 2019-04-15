export default async (parent, args, { db }, info) => {
  return await db.comments.findAll();
};
