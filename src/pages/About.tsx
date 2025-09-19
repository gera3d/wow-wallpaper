const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">About WoW Loading Creator</h1>
        <p className="text-xl text-gray-300">
          A community-driven tool for creating custom loading screens
        </p>
      </div>

      <div className="space-y-12">
        {/* Mission */}
        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            WoW Loading Creator was built to empower the World of Warcraft private server community 
            with the tools to create beautiful, personalized loading screens. We believe that every 
            server and player should have the ability to customize their gaming experience with 
            stunning visuals that reflect their unique style and community.
          </p>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">🎨 Easy Creation</h3>
              <p className="text-gray-400">
                Intuitive drag-and-drop interface with live preview functionality
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">📱 Browser-Based</h3>
              <p className="text-gray-400">
                No downloads required - everything runs in your web browser
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">🔒 Privacy First</h3>
              <p className="text-gray-400">
                All image processing happens locally - your files never leave your device
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">🌍 Community Driven</h3>
              <p className="text-gray-400">
                Share creations with the community via GitHub integration
              </p>
            </div>
          </div>
        </section>

        {/* Technical */}
        <section className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Compatible Formats</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• BLP (Blizzard Picture) conversion</li>
                <li>• MPQ archive generation</li>
                <li>• Support for 4:3 and widescreen ratios</li>
                <li>• WoW 1.12.1 compatibility</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Built With</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• React & TypeScript</li>
                <li>• WebAssembly for image processing</li>
                <li>• GitHub Pages hosting</li>
                <li>• Tailwind CSS styling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Support & Contributing</h2>
          <div className="bg-slate-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              This is an open-source project maintained by the community. If you encounter issues 
              or have suggestions for improvements, we'd love to hear from you!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                GitHub Repository
              </a>
              <a href="#" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                Report Issues
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                Contribute
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-center bg-slate-900/50 rounded-lg p-6">
          <p className="text-gray-400 text-sm">
            This project is not affiliated with Blizzard Entertainment. World of Warcraft is a trademark 
            of Blizzard Entertainment. This tool is created by and for the private server community.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;