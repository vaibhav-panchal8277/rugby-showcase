import { Search, ShoppingBasket, User, Heart, Menu } from 'lucide-react';

const Navbar = ({ cartCount, activeCategory, onCategoryChange, onOpenBasket, onOpenAccount }) => {
  const categories = ['Replica', 'Boots', 'Clothing', 'Equipment', 'Protection', 'Clearance'];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Promo Bar */}
      <div className="bg-red-700 text-white text-center py-2 text-xs font-bold tracking-wider uppercase">
        Free UK Delivery on orders over £50 | Next Day Delivery Available
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <button className="md:hidden mr-4" onClick={() => alert("Menu opened!")}>
              <Menu size={24} className="text-gray-700" />
            </button>
            <button onClick={() => onCategoryChange('Home')} className="flex-shrink-0 text-3xl font-extrabold tracking-tighter text-blue-900 italic">
              rugbystore<span className="text-red-600">.</span>
            </button>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for boots, shirts, brands..." 
                className="w-full border-2 border-gray-300 bg-gray-50 h-10 px-4 pr-10 rounded-sm focus:outline-none focus:border-blue-900"
              />
              <button 
                onClick={() => alert("Search submitted!")}
                className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-blue-900"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-gray-700">
            <button onClick={onOpenAccount} className="hidden sm:flex flex-col items-center hover:text-blue-900">
              <User size={22} />
              <span className="text-[10px] uppercase font-bold mt-1">Account</span>
            </button>
            <button onClick={() => alert("Redirecting to Wishlist...")} className="hidden sm:flex flex-col items-center hover:text-blue-900">
              <Heart size={22} />
              <span className="text-[10px] uppercase font-bold mt-1">Wishlist</span>
            </button>
            <button onClick={onOpenBasket} className="flex flex-col items-center hover:text-blue-900 relative">
              <div className="relative">
                <ShoppingBasket size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] uppercase font-bold mt-1">Basket</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-blue-900 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-8 text-sm font-bold uppercase tracking-wider py-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button 
                  onClick={() => onCategoryChange(cat)}
                  className={`transition-colors ${activeCategory === cat ? 'text-white border-b-2 border-red-600' : 'text-blue-200 hover:text-white'}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
