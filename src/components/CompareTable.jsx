import { useState } from 'react';
import productsData from '../data/products.json';

const CompareTable = () => {
  const [selectedProducts, setSelectedProducts] = useState([
    productsData[0]?.id || 1, 
    productsData[1]?.id || 2
  ]);

  const handleSelect = (index, productId) => {
    const newSelected = [...selectedProducts];
    newSelected[index] = parseInt(productId, 10);
    setSelectedProducts(newSelected);
  };

  const itemsToCompare = selectedProducts.map(id => 
    productsData.find(p => p.id === id) || productsData[0]
  );

  return (
    <section className="py-24 bg-white" id="compare">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Compare Equipment.
          </h2>
          <p className="text-xl text-apple-gray-500 font-medium">
            Find the right gear for your position.
          </p>
        </div>
        
        <div className="overflow-x-auto rounded-xl border border-apple-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse table-fixed min-w-[600px]">
            <thead>
              <tr className="bg-[#f5f5f7] border-b border-apple-gray-200">
                <th className="p-6 font-semibold text-apple-gray-500 w-1/3 uppercase tracking-wider text-xs">Specification</th>
                {itemsToCompare.map((product, index) => (
                  <th key={`header-${index}`} className="p-6 w-1/3">
                    <div className="flex flex-col items-center text-center">
                      <select 
                        value={product.id}
                        onChange={(e) => handleSelect(index, e.target.value)}
                        className="mb-4 bg-white border border-apple-gray-300 text-black font-semibold text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2 outline-none uppercase tracking-wider"
                      >
                        {productsData.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                      <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg mb-3 shadow-sm border border-apple-gray-200" />
                      <span className="font-bold text-black text-lg">{product.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-apple-gray-200">
              <tr className="hover:bg-apple-gray-100/50 transition-colors">
                <td className="p-6 font-medium text-apple-gray-600">Material</td>
                {itemsToCompare.map((product, index) => (
                  <td key={`material-${index}`} className="p-6 text-center text-black font-semibold">{product.material}</td>
                ))}
              </tr>
              <tr className="hover:bg-apple-gray-100/50 transition-colors">
                <td className="p-6 font-medium text-apple-gray-600">Durability</td>
                {itemsToCompare.map((product, index) => (
                  <td key={`durability-${index}`} className="p-6 text-center text-black">{product.durability}</td>
                ))}
              </tr>
              <tr className="hover:bg-apple-gray-100/50 transition-colors">
                <td className="p-6 font-medium text-apple-gray-600">Key Features</td>
                {itemsToCompare.map((product, index) => (
                  <td key={`features-${index}`} className="p-6 text-center text-black">{product.features}</td>
                ))}
              </tr>
              <tr className="hover:bg-apple-gray-100/50 transition-colors">
                <td className="p-6 font-medium text-apple-gray-600">Weight</td>
                {itemsToCompare.map((product, index) => (
                  <td key={`weight-${index}`} className="p-6 text-center text-black">{product.weight}</td>
                ))}
              </tr>
              <tr className="hover:bg-apple-gray-100/50 transition-colors">
                <td className="p-6 font-medium text-apple-gray-600">Price</td>
                {itemsToCompare.map((product, index) => (
                  <td key={`price-${index}`} className="p-6 text-center text-black font-bold text-xl">{product.price}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareTable;
