import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addBookThunk } from "../store/Books";
import { fetchBook } from "../store/Books";
import { editBookThunk } from "../store/Books";
export const EditBook = (props) => {
  const history = useHistory();
  const { id } = useParams()

  const { book } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newBook)
    dispatch(editBookThunk(book[0].id, newBook))
    setTimeout(function() {
      history.push("/home")
    }, 15)
  };

  const [title, setTitle] = useState(book[0].title);
  const [author, setAuthor] = useState(book[0].author);
  const [description, setDescription] = useState(book[0].description);
  const [imageUrl, setImageUrl] = useState(book[0].imageUrl);
  const [price, setPrice] = useState(book[0].price);
  const [inventory, setInventory] = useState(book[0].inventory);
  const [isRare, setIsRare] = useState(book[0].isRare);

  let newBook = {title: title, author: author, description: description, imageUrl: imageUrl, price: price, inventory: inventory, isRare: isRare}
  return (
    <div className="main">
      <form id="book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          defaultValue={book[0].title || ''}
        />
        <label htmlFor="author">Author:</label>
        <input
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          defaultValue={book[0].author}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows="4"
          cols="50"
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={book[0].description}
        />
        <label htmlFor="imageUrl">imageUrl:</label>
        <input
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          defaultValue={book[0].imageUrl}
        />
        <label htmlFor="price">Price:</label>
        <input
          name="Price"
          min={1}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          defaultValue={book[0].price}
        />
        <label htmlFor="inventory">inventory:</label>
        <input
          name="inventory"
          min={1}
          onChange={(e) => setInventory(e.target.value)}
          type="number"
          defaultValue={book[0].inventory}
        />
        <label htmlFor="isRare">Rare?:</label>
        <select
          name="isRare"
          onChange={(e) => setIsRare(e.target.value)}
          type="boolean">
            <option value={true}>yes</option>
            <option value={false}>no</option>
        </select>
        <div></div>
        <button type="submit">Submit</button>
        <img src={book[0].imageUrl} className="singleBookImg" />
      </form>
    </div>
  );
};
