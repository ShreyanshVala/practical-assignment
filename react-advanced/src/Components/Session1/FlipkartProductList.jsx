import useFetchData from "../../Hooks/useFetchData";

function FlipkartProductList() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products",
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Flipkart Products</h1>

      {data.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default FlipkartProductList;
