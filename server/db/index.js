//this is the access point for all things database related!
const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./models/User");
const Book = require("./models/Book");
const Cart = require("./models/Cart");
const Book_Cart = require("./models/Book_Cart");

//associations could go here!

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Book, { through: Book_Cart });
Book.belongsToMany(Cart, { through: Book_Cart });

module.exports = {
  db,
  models: {
    User,
    Book,
    Cart,
    Book_Cart,
  },
};
