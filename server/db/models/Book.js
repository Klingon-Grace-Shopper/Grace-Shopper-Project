const Sequelize = require("sequelize");
const db = require("../db");
const axios = require("axios");

const Book = db.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    defaultValue: "Unknown",
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "Unavailable",
    allowNull: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
    allowNull: true,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  isRare: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Book;
