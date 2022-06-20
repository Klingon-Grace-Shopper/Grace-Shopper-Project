const router = require("express").Router();
const {
  models: { Cart, User, Book, Book_Cart },
} = require("../db");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    console.log("body", req.body);
    let cart = await Cart.findOne({
      where: { userId: req.body.userId },
    });
    if (!cart) cart = await Cart.create(req.body);

    const book = await Book.findByPk(req.body.bookId);
    const user = await User.findByPk(req.body.userId);

    let book_cart = await Book_Cart.findOne({
      where: { cartId: cart.id, bookId: book.id },
    });
    if (book_cart) {
    }
    // let book_cart = await Book_Cart.create({
    //   cartId: cart.id,
    //   bookId: book.id,
    //   quantity: 1,
    // });
    console.log(book_cart);

    res.status(201).send(cart);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const books = await Cart.findAll({
      where: { userId: req.params.id },
      include: { model: Book },
    });
    res.json(books);
  } catch (err) {
    next(err);
  }
});
