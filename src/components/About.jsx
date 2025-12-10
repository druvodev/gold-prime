export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop"
              alt="Gold Jewelry"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 to-transparent opacity-10 rounded-2xl"></div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About GoldPrime
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, GoldPrime has been the premier destination for gold investment and precious metals. We pride ourselves on offering the highest quality gold products with complete transparency and exceptional customer service.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to authenticity, competitive pricing, and secure transactions has made us the trusted choice for investors and collectors worldwide. Every piece in our collection is certified and comes with a guarantee of purity.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Authenticity</h3>
                  <p className="text-gray-600">All our gold products come with official certification and purity guarantees.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Transactions</h3>
                  <p className="text-gray-600">Your investments are protected with bank-level security and insurance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
