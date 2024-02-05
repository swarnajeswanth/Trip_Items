import { React, useState } from "react";
import { GiCrossMark } from "react-icons/gi";

export default function Items({ item, delItem, doneHandler }) {
  const [done, setDone] = useState(item.done);
  function changeHandler() {
    setDone(!done);
    doneHandler(item.id);
  }
  return (
    <div
      className="item"
      style={done ? { textDecoration: "line-through" } : {}}
    >
      <input type="checkbox" checked={done} onChange={changeHandler}></input>
      <span>{item.quantity}</span> <span>{item.description}</span>
      <GiCrossMark className="cross" onClick={() => delItem(item.id)} />
    </div>
  );
}
