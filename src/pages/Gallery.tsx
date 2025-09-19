const GalleryPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Community Gallery</h1>
        <p className="text-gray-300">Discover and download amazing loading screen packs</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search packs..."
              className="w-full bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <select className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none">
            <option>All Categories</option>
            <option>Alliance Themed</option>
            <option>Horde Themed</option>
            <option>Nature</option>
            <option>Fantasy</option>
          </select>
          <select className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Most Downloaded</option>
          </select>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder pack cards */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800/70 transition-colors">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Sample Pack {i}</h3>
              <p className="text-gray-400 text-sm mb-3">A beautiful collection of themed loading screens</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>⭐ 4.5</span>
                  <span>•</span>
                  <span>123 downloads</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors">
          Load More Packs
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;