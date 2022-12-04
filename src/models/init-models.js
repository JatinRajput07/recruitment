var DataTypes = require("sequelize").DataTypes;
var _page = require("./page");

function initModels(sequelize) {
  var page = _page(sequelize, DataTypes);


  return {
    page,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
