const WorkspaceSetup = () => {
  return (
    <section className="py-24 bg-black text-white" id="training">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
              The Ultimate Training Kit.
            </h2>
            <p className="text-xl text-gray-400 font-medium mb-8">
              Pair your Pro Elite ball with precision kicking tees, agility cones, and resistance bands to build the ultimate practice environment.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors duration-300">
              Explore Accessories
            </button>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544716834-0373ab1a3a30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Rugby Training Setup" 
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">Elite Training Bundle</h3>
                  <p className="text-gray-300">Pro Elite Ball + Kicking Tee + Agility Ladder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSetup;
