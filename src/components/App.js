import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearItems = () => {
    const confirmed = window.confirm(
      "Are you sure,want to delete all the items?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggle={handleToggleItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
