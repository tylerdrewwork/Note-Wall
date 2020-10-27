module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define("Note", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255]
      }
    },
    views: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  });
  return Note;
};

// Note.sync();
