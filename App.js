import { React, useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import Trip from "./Trip";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([
    // {
    //   id: 1,
    //   description: "passport",
    //   quantity: 2,
    //   done: false,
    // },
    // {
    //   id: 2,
    //   description: "Toothbrush",
    //   quantity: 1,
    //   done: true,
    // },
    // {
    //   id: 3,
    //   description: "charger",
    //   quantity: 2,
    //   done: true,
    // },
  ]);
  const n_Items = items.length;
  const packed = items.filter((item) => item.done).length;

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  function delItem(id) {
    const filtered = items.filter((item) => {
      return item.id !== id;
    });
    setItems(filtered);
  }

  function doneHandler(id) {
    const updatedItems = items.map((currentItem) => {
      if (currentItem.id === id) {
        currentItem.done = !currentItem.done;
        return currentItem;
      }
      return currentItem;
    });
    setItems(updatedItems);
  }
  return (
    <div id="Container">
      <Logo />
      <Form addItem={addItem} />
      <Trip
        setItems={setItems}
        items={items}
        delItem={delItem}
        doneHandler={doneHandler}
      />
      <Stats n_Items={n_Items} packed={packed} />
    </div>
  );
}
