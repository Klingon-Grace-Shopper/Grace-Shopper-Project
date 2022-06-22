//this is the access point for all things database related!
const Sequelize = require("sequelize");
const db = require("./db");

const User = require("./models/User");
const Book = require("./models/Book");
const Cart = require("./models/Cart");
const Book_Cart = require("./models/Book_Cart");
const Order = require("./models/Order");
const Book_Order = require("./models/Book_Order");

//associations could go here!

User.hasOne(Cart);
User.hasOne(Order);
Cart.belongsTo(User);
Cart.hasMany(Book_Cart);
Book.hasMany(Book_Cart);
Book.hasMany(Book_Order);
Book_Cart.belongsTo(Cart);
Book_Cart.belongsTo(Book);
Order.belongsTo(User);
Order.hasMany(Book_Order);
Book_Order.belongsTo(Book);
Book_Order.belongsTo(Order);

module.exports = {
  db,
  models: {
    User,
    Book,
    Cart,
    Book_Cart,
    Book_Order,
    Order,
  },
};
