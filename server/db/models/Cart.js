const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = Cart;
