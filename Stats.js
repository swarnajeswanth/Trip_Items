import React from "react";
import { FaSuitcase } from "react-icons/fa6";

export default function Stats({ n_Items, packed }) {
  console.log(n_Items);
  if (n_Items === 0) {
    return <div id="stats">Try Adding the Trip Items......!</div>;
  }
  if (n_Items === packed) {
    return (
      <div id="stats">
        <FaSuitcase />
        You have packed Everything !
      </div>
    );
  }
  return (
    <div id="stats">
      <FaSuitcase />
      {"\u00A0"} You have {n_Items} Items on your list and you already packed
      {"\u00A0"}
      {packed} ({Math.floor(Math.abs(packed / n_Items) * 100)}
      {"\u00A0"}% )
    </div>
  );
}
