import { React, useState } from "react";
import { CiFaceSmile } from "react-icons/ci";

export default function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function onClickHandler(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      done: false,
    };
    setQuantity(1);
    setDescription("");
    addItem(newItem);
  }
  return (
    <div id="form">
      <p>
        What do you need for your <CiFaceSmile /> Trip?
      </p>
      <form>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item..."
        ></input>
        <button onClick={(e) => onClickHandler(e)}>Add</button>
      </form>
    </div>
  );
}
