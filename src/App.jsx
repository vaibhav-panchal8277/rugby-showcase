import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import ProductCollection from './components/ProductCollection';
import Footer from './components/Footer';
import BasketDrawer from './components/BasketDrawer';
import AccountModal from './components/AccountModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Home');
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setIsBasketOpen(true); // Automatically open the basket drawer
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-red-600 selection:text-white scroll-smooth">
      <Navbar 
        cartCount={cartItems.length} 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
        onOpenBasket={() => setIsBasketOpen(true)}
        onOpenAccount={() => setIsAccountModalOpen(true)}
      />
      
      <BasketDrawer 
        isOpen={isBasketOpen} 
        onClose={() => setIsBasketOpen(false)} 
        cartItems={cartItems} 
        onRemoveItem={handleRemoveFromCart}
      />
      
      <AccountModal 
        isOpen={isAccountModalOpen} 
        onClose={() => setIsAccountModalOpen(false)} 
      />
      
      <main>
        {activeCategory === 'Home' ? (
          <>
            <Hero onShopCategory={setActiveCategory} />
            <Brands />
            
            {/* Promotional Banner Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-gray-900 h-64 overflow-hidden group">
                  <img src="/images/rugby_boots.png" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Rugby Boots" />
                  <div className="relative h-full flex flex-col justify-center p-8">
                    <h3 className="text-3xl font-extrabold text-white uppercase italic mb-2">New Boot Releases</h3>
                    <p className="text-gray-200 mb-4 font-medium">Explore the latest SG & FG boots.</p>
                    <button onClick={() => setActiveCategory('Boots')} className="inline-block bg-white text-black font-bold uppercase text-xs px-4 py-2 w-max group-hover:bg-red-600 group-hover:text-white transition-colors">Shop Boots</button>
                  </div>
                </div>
                <div className="relative bg-gray-900 h-64 overflow-hidden group">
                  <img src="/images/rugby_protection.png" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Protection" />
                  <div className="relative h-full flex flex-col justify-center p-8">
                    <h3 className="text-3xl font-extrabold text-white uppercase italic mb-2">Protection Gear</h3>
                    <p className="text-gray-200 mb-4 font-medium">Headguards, mouthguards & pads.</p>
                    <button onClick={() => setActiveCategory('Protection')} className="inline-block bg-white text-black font-bold uppercase text-xs px-4 py-2 w-max group-hover:bg-red-600 group-hover:text-white transition-colors">Shop Protection</button>
                  </div>
                </div>
              </div>
            </section>

            <ProductCollection onAddToCart={handleAddToCart} title="Trending Now" />
            
            {/* Info Banner */}
            <section className="bg-blue-900 text-white py-12 mt-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-extrabold uppercase italic mb-4">Why Shop With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Next Day Delivery</h3>
                    <p className="text-sm text-blue-200">Order by 9pm for next day UK delivery.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Free UK Returns</h3>
                    <p className="text-sm text-blue-200">60-day hassle-free returns policy.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Advice</h3>
                    <p className="text-sm text-blue-200">Our customer service team are rugby experts.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="pt-8 pb-24 min-h-[60vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
              <button onClick={() => setActiveCategory('Home')} className="text-sm font-bold text-gray-500 hover:text-blue-900 uppercase tracking-wider">
                &larr; Back to Home
              </button>
            </div>
            <ProductCollection 
              onAddToCart={handleAddToCart} 
              categoryFilter={activeCategory} 
              title={`${activeCategory} Collection`} 
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
