const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/books", require("./books"));
router.use("/cart", require("./cart"));
router.use("/orders", require("./orders"));
router.use("/bookOrders", require("./bookOrder"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
