const FeatureSection = ({ title, headline, description, image, align = 'left' }) => {
  const isLeft = align === 'left';
  
  return (
    <section className="py-24 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-16 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
          <div className="w-full md:w-1/2">
            <img 
              src={image} 
              alt={title} 
              className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
            />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-apple-gray-500 font-semibold tracking-wide uppercase text-sm mb-3">
              {title}
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 text-balance leading-tight">
              {headline}
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
