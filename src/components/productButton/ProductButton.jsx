import { useEffect, useState } from "react";

function ProductButton({ handleButton }) {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);

  return (
    <aside className="flex flex-col w-/12 gap-4">
      {name.map((category) => (
        <button
          className="btn"
          id={category.id}
          key={category.id}
          onClick={() => handleButton(category)}
        >
          {category.name}
        </button>
      ))}
    </aside>
  );
}

export default ProductButton;
