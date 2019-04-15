"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define("comments", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Comments;
};
