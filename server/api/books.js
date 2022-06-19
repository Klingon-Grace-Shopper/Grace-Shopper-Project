const router = require("express").Router();
const {
  models: { Book },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.send(book);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).send(Book.findByPk(req.params.id));
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body)
    res.send(newBook)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const edittedBook = await Book.findByPk(req.params.id)
    res.send(await edittedBook.update(req.body))
  } catch (error) {
    next(error)
  }
})

