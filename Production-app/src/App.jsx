import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  const products = [
    { id: 1, name: "Notebook", price: 50, inStock: true },
    { id: 2, name: "Pen", price: 10, inStock: true },
    { id: 3, name: "Backpack", price: 800, inStock: false },
  ];

  return (
    <div className="container">
      <Header title="Our Store" subtitle="Items available today" />
      <ProductList products={products} />
    </div>
  );
}