import React from "react";
import Items from "./Items";
export default function Trip({ items, delItem, doneHandler }) {
  return (
    <div id="trip_Container">
      <span id="items_Container">
        {items.map((item) => (
          <Items
            item={item}
            delItem={delItem}
            key={item.id}
            doneHandler={doneHandler}
          />
        ))}
      </span>
    </div>
  );
}
