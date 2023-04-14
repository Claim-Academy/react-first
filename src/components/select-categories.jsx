export default function SelectCategories({ categories }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="categories" className="font-bold">
        Categories
      </label>
      <select
        id="categories"
        name="categories"
        className="w-full rounded-md border border-gray-400 p-2"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}