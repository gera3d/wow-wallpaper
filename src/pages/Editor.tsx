const EditorPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Loading Screen Editor</h1>
        <p className="text-gray-300">Create and customize your loading screen pack</p>
      </div>

      {/* Placeholder for editor interface */}
      <div className="bg-slate-800/50 rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Zone Selection */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">1. Select Zones</h2>
            <div className="bg-slate-700/50 rounded-lg p-4 h-64">
              <p className="text-gray-400 text-center pt-24">Zone selector will go here</p>
            </div>
          </div>

          {/* Image Upload */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">2. Upload Images</h2>
            <div className="bg-slate-700/50 rounded-lg p-4 h-64 border-2 border-dashed border-gray-600">
              <p className="text-gray-400 text-center pt-24">Image upload area will go here</p>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-4">3. Preview</h2>
            <div className="bg-slate-900 rounded-lg p-4 h-64">
              <p className="text-gray-400 text-center pt-24">Live preview will go here</p>
            </div>
          </div>
        </div>

        {/* Export Section */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">Ready to Export?</h3>
              <p className="text-gray-400">Generate your MPQ pack for installation</p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Export Pack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;