export default async (parent, { id }, { db }, info) => {
  return await db.comments.findOne({ where: { id } });
};
