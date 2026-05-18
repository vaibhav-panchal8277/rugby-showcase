const Brands = () => {
  const brands = ['Canterbury', 'Gilbert', 'adidas', 'Macron', 'Under Armour', 'Mizuno'];
  
  return (
    <div className="bg-white border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Shop Top Brands</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          {brands.map(brand => (
            <div key={brand} className="text-2xl font-extrabold text-gray-800 italic">
              {brand.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
