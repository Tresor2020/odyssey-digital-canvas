
const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nzaaa Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the intersection of technology, culture, and human experience through visual art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for artwork - you can replace these with actual images */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-gray-600 font-medium">Artwork {item}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="px-6 py-2 bg-white text-gray-800 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Each piece reflects my journey across cultures, technologies, and human experiences.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Visit Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
