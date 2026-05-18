const Hero = ({ onShopCategory }) => {
  return (
    <div className="relative bg-blue-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="/images/rugby_hero.png"
          alt="Rugby Match Background"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-start">
        <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-widest mb-4">
          New Arrivals
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 uppercase italic">
          Six Nations <br/> Official Gear
        </h1>
        <p className="mt-2 text-xl text-gray-200 max-w-lg mb-8 font-medium shadow-sm">
          Shop the latest replica shirts, training wear and fan apparel for the 2026 tournament.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={() => onShopCategory('Replica')}
            className="bg-blue-600 border border-transparent text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
          >
            Shop Replica
          </button>
          <button 
            onClick={() => onShopCategory('Clothing')}
            className="bg-white text-gray-900 px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Shop Training
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
