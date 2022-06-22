const router = require("express").Router();
const {
  models: { Book_Order },
} = require("../db");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    let bookOrder = await Book_Order.create(req.body);
    res.send(bookOrder);
  } catch (error) {
    next(error);
  }
});

router.get("/:orderId", async (req, res, next) => {
  try {
    let booksOrder = await Book_Order.findAll({
      where: { orderId: req.params.orderId },
    });
    res.send(booksOrder);
  } catch (error) {
    next(error);
  }
});
