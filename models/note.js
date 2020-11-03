// Creating and exporting object model that will be utilized to create the table of Note within our database
// The Note table will have properties of text, views, and author_id
module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define("Note", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255]
      }
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    author_id: DataTypes.INTEGER
  });
  return Note;
};
