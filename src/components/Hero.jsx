export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Trusted Partner in
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"> Gold Investment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the timeless value of gold with our premium collection of bullion, coins, and jewelry. Secure your financial future with the world's most trusted asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg border-2 border-yellow-600 hover:bg-yellow-50 transform hover:scale-105 transition-all duration-200 text-center"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-yellow-600">25+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">50K+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">99.9%</div>
                <div className="text-gray-600 text-sm">Pure Gold</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&h=600&fit=crop"
                alt="Gold Bars"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
