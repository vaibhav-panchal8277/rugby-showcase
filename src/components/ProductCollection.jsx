import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductCollection = ({ onAddToCart, categoryFilter, title }) => {
  const displayProducts = categoryFilter && categoryFilter !== 'Home'
    ? productsData.filter(p => p.category === categoryFilter)
    : productsData;

  return (
    <section className="py-16 bg-gray-50" id="collection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 uppercase italic">
            {title || "Trending Now"}
          </h2>
          {(!categoryFilter || categoryFilter === 'Home') && (
            <button onClick={() => alert("Viewing all products...")} className="text-sm font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider flex items-center gap-1">
              View All <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
        
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={() => onAddToCart(product)} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold text-gray-400 uppercase">No items found in this category.</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCollection;
