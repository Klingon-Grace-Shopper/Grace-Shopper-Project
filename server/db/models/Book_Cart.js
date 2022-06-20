const Sequelize = require("sequelize");
const db = require("../db");
const Cart = require("./Cart");
const Book = require("./Book");

const Book_Cart = db.define("book_cart", {
  cartId: {
    type: Sequelize.INTEGER,
    references: {
      model: Cart,
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

module.exports = Book_Cart;
