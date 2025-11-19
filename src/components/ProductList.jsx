import ProductCard from "./ProductCard";
import {useProducts} from "../context/ProductContext.jsx";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading products...</p>;
  if (error) return <div className="text-red-500"> {error}</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {loading && <p>Loading products...</p>}
      {error && <div className="text-red-500"> {error}</div>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
