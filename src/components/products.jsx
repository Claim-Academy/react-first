export default function Products({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li
          // The key is a special prop that React uses to keep track of which items have changed, are added, or are removed.
          // Use any unique identifier (such as ids, names, etc.)
          key={product.name}
        >
          {product.name}-{product.price}
        </li>
      ))}
    </ul>
  );
}
