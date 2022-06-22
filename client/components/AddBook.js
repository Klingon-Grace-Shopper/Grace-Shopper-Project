import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBookThunk } from "../store/Books";

export const AddBook = () => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(1);
  const [inventory, setInventory] = useState(1);
  const [isRare, setIsRare] = useState(false);

  let newBook = {
    title: title,
    author: author,
    description: description,
    imageUrl: imageUrl,
    price: price,
    inventory: inventory,
    isRare: isRare,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookThunk(newBook));
    setTimeout(function () {
      history.push("/home");
    }, 1);
  };

  const dispatch = useDispatch();

  return (
    <div className="main">
      <form id="book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter a Title Here"
        />
        <label htmlFor="author">Author:</label>
        <input
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Enter the Author Name Here"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows="4"
          cols="50"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter the Book Description Here"
        />
        <label htmlFor="imageUrl">imageUrl:</label>
        <input
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          defaultValue="https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
        />
        <label htmlFor="price">Price:</label>
        <input
          name="Price"
          min={1}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          defaultValue={1}
        />
        <label htmlFor="inventory">inventory:</label>
        <input
          name="inventory"
          min={1}
          onChange={(e) => setInventory(e.target.value)}
          type="number"
          defaultValue={1}
        />
        <label htmlFor="isRare">Rare?:</label>
        <select
          name="isRare"
          onChange={(e) => setIsRare(e.target.value)}
          type="boolean"
          defaultValue="false"
        >
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <div></div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
