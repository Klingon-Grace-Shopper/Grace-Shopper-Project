const router = require("express").Router();
const {
  models: { Cart, User, Book, Book_Cart, Order },
} = require("../db");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    let order = await Order.create(req.body);
    res.send(order);
  } catch (error) {
    next(error);
  }
});
