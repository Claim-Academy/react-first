import { useState } from "react";
import Button from "./components/button";
import Header from "./components/header";
import Products from "./components/products";
import SelectCategories from "./components/select-categories";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const uniqueCategories = [...new Set(data.map((item) => item.category))];

function App() {
  // useState is a hook that allows us to manage state in a function component. It returns an array with two elements. The first element is the state, and the second element is a function that allows us to update the state. The argument passed to useState is the initial state.
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Fruits");
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  return (
    <>
      <Header />
      <SelectCategories
        categories={uniqueCategories}
        onChange={(event) => {
          // 'event.target.value' is the value of the selected option.
          setSelectedCategory(event.target.value);
        }}
      />
      <Products
        products={data
          .filter((item) => item.category === selectedCategory)
          .filter((item) =>
            // TODO: Find out about about ternary operator that is an alternative to if/else statements.
            // If showInStockOnly is true, then we want to filter out the items that are not in stock. If showInStockOnly is false, then we want to return all items.
            showInStockOnly ? item.stocked : true
          )}
      />

      {/* We want to manage the state of the UI, such that whenever the user clicks the button, this display gets updated. '0' needs to be a piece of state that we will track. Whenever it is updates, we will re-render this component. In other words, we react to changes in state by updating and re-rendering the DOM/components. */}
      <p className="text-center text-5xl font-extrabold text-red-500">
        {count}
      </p>

      {/* TODO: Move this to its own component */}
      <label htmlFor="show-in-stock-only">Show in stock only</label>
      <input
        type="checkbox"
        onChange={(event) => setShowInStockOnly(event.target.checked)}
        id="show-in-stock-only"
      />

      <Button
        text="Increase Count"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      />

      <Button
        text="Decrease Count"
        onClick={() => setCount((prev) => prev - 1)}
      />
    </>
  );
}

export default App;
