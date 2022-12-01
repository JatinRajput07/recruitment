const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    family_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0 = User , 1 => Admin",
      defaultValue:0
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    citizenship: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue:''
    },
    date_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue:''
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue:''
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:''
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    created: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    updated: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:''
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'updatedAt'
    }
  },
    {
      tableName: 'users',
      hooks: {
        beforeCreate: (record, options) => {
          record.dataValues.created = Math.round(new Date().getTime() / 1000);
          record.dataValues.updated = Math.round(new Date().getTime() / 1000);
        },
        beforeUpdate: (record, options) => {
          record.dataValues.updated = Math.round(new Date().getTime() / 1000);
        },
        beforeBulkCreate: (records, options) => {
          if (Array.isArray(records)) {
            records.forEach(function (record) {
              record.dataValues.created = Math.round(new Date().getTime() / 1000);
              record.dataValues.updated = Math.round(new Date().getTime() / 1000);
            });
          }
        },
        beforeBulkUpdate: (records, options) => {
          if (Array.isArray(records)) {
            records.forEach(function (record) {
              record.dataValues.updated = Math.round(new Date().getTime() / 1000);
            });
          }
        }
      }
    });

  User.associate = models => {

  };

  return User;
};
