import { useEffect } from "react";

function ProductList() {
  const products = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 5000),
  }));

  useEffect(() => {
    console.time("Render Time");

    return () => {
      console.timeEnd("Render Time");
    };
  }, []);

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
