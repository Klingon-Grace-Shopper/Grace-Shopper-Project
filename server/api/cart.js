const router = require("express").Router();
const {
  models: { Cart, User, Book, Book_Cart },
} = require("../db");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    let cart = await Cart.findOne({
      where: { userId: req.body.userId },
    });
    if (!cart) cart = await Cart.create(req.body);

    const book = await Book.findByPk(req.body.bookId);

    let book_cart = await Book_Cart.findOne({
      where: { cartId: cart.id, bookId: book.id },
    });
    if (book_cart) {
      await book_cart.update({
        quantity: book_cart.quantity + req.body.quantity,
      });
    } else {
      book_cart = await Book_Cart.create({
        cartId: cart.id,
        bookId: book.id,
        quantity: req.body.quantity,
      });
    }

    res.status(201).send(cart);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ Where: { userId: req.params.id } });
    let books = await Book_Cart.findAll({
      where: { cartId: cart.id },
    });
    res.json(books);
  } catch (err) {
    next(err);
  }
});

router.put("/:userId/:bookId", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ where: { userId: req.params.userId } });
    const bookCart = await Book_Cart.findOne({
      where: { cartId: cart.id, bookId: req.params.bookId },
    });
    await bookCart.update(req.body);
    res.sendStatus(202);
  } catch (err) {
    next(err);
  }
});
router.delete("/:userId", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ where: { userId: req.params.userId } });
    await Book_Cart.destroy({ where: { cartId: cart.id } });
    res.sendStatus(202);
  } catch (error) {
    next(error);
  }
});

router.delete("/:userId/:bookId", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ where: { userId: req.params.userId } });

    const bookCart = await Book_Cart.findOne({
      where: { cartId: cart.id, bookId: req.params.bookId },
    });
    await bookCart.destroy();
    res.sendStatus(202);
  } catch (err) {
    next(err);
  }
});
