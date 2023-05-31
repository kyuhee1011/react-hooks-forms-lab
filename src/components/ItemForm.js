import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [input, setInput] = useState("");
  const [itemFormCategory, setItemFormCategory] = useState("Produce");
  const [newItem, setNewItem] = useState({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: input,
    category: itemFormCategory,
  });

  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleItemFormCategory(e) {
    setItemFormCategory(e.target.value);
  }

  // function onItemFormSubmit(event) {
  //   event.preventDefault();
  //   const formData = { input: input, itemFormCategory: itemFormCategory };
  //   const dataArray = [...newItem, formData];

  //   setNewItem(dataArray);
  //   setInput("");
  //   setItemFormCategory("");
  // }
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input
          onChange={handleInput}
          value={newItem.name}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          onChange={handleItemFormCategory}
          name="category"
          value={newItem.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
