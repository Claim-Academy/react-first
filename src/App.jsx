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
  return (
    <>
      <Header />
      <SelectCategories categories={uniqueCategories} />
      <Products products={data} />
    </>
  );
}

export default App;
