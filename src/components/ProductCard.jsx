import { useState } from 'react';
import { ShoppingBasket, Heart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    
    if (!isWishlisted) {
      const notification = document.createElement('div');
      notification.textContent = `${product.name} saved to Wishlist! ❤️`;
      notification.className = 'fixed bottom-4 left-4 bg-gray-900 text-white px-6 py-3 rounded-sm font-bold shadow-lg z-50 transform transition-all duration-300';
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
      }, 2000);
    }
  };

  return (
    <div className="group flex flex-col bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 relative">
      {product.originalPrice && (
        <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
          Sale
        </div>
      )}
      
      {/* Wishlist Button */}
      <button 
        onClick={toggleWishlist}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors group/heart"
        title="Add to Wishlist"
      >
        <Heart 
          size={18} 
          className={`transition-colors ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-400 group-hover/heart:text-red-400'}`} 
        />
      </button>

      <div className="relative aspect-square overflow-hidden bg-white p-4 flex items-center justify-center border-b border-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{product.brand}</span>
        <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-2 hover:text-blue-600 cursor-pointer">{product.name}</h3>
        
        <div className="mt-auto pt-2 flex items-end justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
            )}
            <span className="font-extrabold text-lg text-red-600">{product.price}</span>
          </div>
        </div>
        
        <button 
          onClick={onAddToCart}
          className="mt-4 w-full bg-blue-900 hover:bg-blue-800 text-white py-2 flex items-center justify-center gap-2 text-sm font-bold uppercase transition-colors"
        >
          <ShoppingBasket size={16} />
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
