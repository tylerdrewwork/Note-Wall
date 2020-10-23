module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define("Note", {
    text: DataTypes.STRING,
    views: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  });
  return Note;
};
