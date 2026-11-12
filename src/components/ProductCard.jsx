function ProductCard({ product,onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <img
        src={product.image}
        alt={product.title}
        className="h-58 w-full object-cover"
      />

      <div className="p-7">

        <p className="mb-2 text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mb-5 text-xl font-bold text-blue-600">
          {product.price.toLocaleString()} AMD
        </p>

        <button 
        onClick={onAddToCart}
        className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800">
          Add to Cart
        </button>

      </div>
    </article>
  );
}

export default ProductCard;