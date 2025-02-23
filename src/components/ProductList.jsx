import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  // products are filtered based on the search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-600">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-6 mt-4">Our Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 mb-4 w-full rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <p className="text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
