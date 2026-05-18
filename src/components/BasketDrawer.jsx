import { X, Trash2 } from 'lucide-react';

const BasketDrawer = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.price.replace('£', ''));
  }, 0);

  return (
    <>
      {/* Dark Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      ></div>
      
      {/* Sliding Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col shadow-2xl`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-extrabold text-gray-900 uppercase italic">
            Your Basket ({cartItems.length})
          </h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-400 mt-20 flex flex-col items-center">
              <span className="text-6xl mb-4">🛒</span>
              <p className="font-bold uppercase tracking-wider">Your basket is empty.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} className="flex gap-4 border border-gray-200 p-2 bg-white shadow-sm group">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain bg-gray-50" />
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">{item.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{item.brand}</p>
                  <p className="text-red-600 font-extrabold mt-1">{item.price}</p>
                </div>
                <button 
                  onClick={() => onRemoveItem(idx)} 
                  className="text-gray-300 hover:text-red-600 p-2 self-center transition-colors"
                  title="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>
        
        {/* Footer & Checkout */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6 font-extrabold text-2xl text-gray-900">
            <span className="uppercase italic">Total:</span>
            <span className="text-red-600">£{total.toFixed(2)}</span>
          </div>
          <button 
            className="w-full bg-blue-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={cartItems.length === 0}
            onClick={() => alert("Proceeding to secure checkout...")}
          >
            Secure Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketDrawer;
