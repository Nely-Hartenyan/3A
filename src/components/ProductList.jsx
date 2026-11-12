import { products } from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({onAddToCart}) {
  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Products
        </h2>

        <p className="mt-2 text-gray-500">
          Choose the perfect product for you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;