const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    tag:{
      type: DataTypes. INTEGER,
      allowNull: false,
      primaryKey: true,
      autoincrement: true
    },
    :{
      type: DataTypes. INTEGER,
      allowNull:false,
      defaultValue:10,
      validate:{isNumeric: true}
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
