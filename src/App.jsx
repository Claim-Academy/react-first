import { useState } from "react";
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

  return (
    <>
      <Header />
      <SelectCategories categories={uniqueCategories} />
      <Products products={data} />

      {/* We want to manage the state of the UI, such that whenever the user clicks the button, this display gets updated. '0' needs to be a piece of state that we will track. Whenever it is updates, we will re-render this component. In other words, we react to changes in state by updating and re-rendering the DOM/components. */}
      <p className="text-center text-5xl font-extrabold text-red-500">
        {count}
      </p>

      <button
        className="rounded bg-green-500 px-2 py-4 text-white"
        // A callback function that is called back on click
        onClick={() => {
          setCount(
            // The callback function is passed the previous state, and returns the new state. This is the preferred way to update state when the new state depends on the previous state.
            (prevCount) => prevCount + 1
          );
        }}
      >
        Increase Count By 1
      </button>

      <button
        className="rounded bg-green-500 px-2 py-4 text-white"
        // A callback function that is called back on click
        onClick={() => {
          setCount(
            // The callback function is passed the previous state, and returns the new state. This is the preferred way to update state when the new state depends on the previous state.
            (prevCount) => prevCount - 1
          );
        }}
      >
        Decrease Count By 1
      </button>
    </>
  );
}

export default App;
