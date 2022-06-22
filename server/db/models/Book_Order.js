const Sequelize = require("sequelize");
const db = require("../db");
const Order = require("./Order");
const Book = require("./Book");

const Book_Order = db.define("book_order", {
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: "id",
    },
  },
  bookId: {
    type: Sequelize.INTEGER,
    references: {
      model: Book,
      key: "id",
    },
  },
  quantity: Sequelize.INTEGER,
});

module.exports = Book_Order;
