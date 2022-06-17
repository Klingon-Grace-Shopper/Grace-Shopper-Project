import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBook, deleteBookThunk } from "../store/Books";
import { fetchBookIntoCart } from "../store/cart";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [isRare, setIsRare] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };

  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div className="main">
      <form id="book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label htmlFor="author">Author:</label>
        <input
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows="4"
          cols="50"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="imageUrl">imageUrl:</label>
        <input
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
        />
        <label htmlFor="price">Price:</label>
        <input
          name="Price"
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
        <label htmlFor="inventory">inventory:</label>
        <input
          name="inventory"
          onChange={(e) => setInventory(e.target.value)}
          type="number"
        />
        <label htmlFor="isRare">Rare?:</label>
        <input
          name="isRare"
          onChange={(e) => setIsRare(e.target.value)}
          type="boolean"
        />
        <div></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
