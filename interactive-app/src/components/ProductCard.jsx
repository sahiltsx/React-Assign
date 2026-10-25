export default function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p className={inStock ? "in-stock" : "out-of-stock"}>
        {inStock ? "In stock" : "Out of stock"}
      </p>
    </div>
  );
}