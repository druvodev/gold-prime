export default function Products() {
  const products = [
    {
      name: 'Gold Bars',
      description: 'Premium quality gold bars ranging from 1oz to 1kg. Perfect for serious investors.',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop',
      purity: '99.99%',
      price: 'From $2,000'
    },
    {
      name: 'Gold Coins',
      description: 'Collectible and investment-grade gold coins from mints worldwide.',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&h=300&fit=crop',
      purity: '99.9%',
      price: 'From $500'
    },
    {
      name: 'Gold Jewelry',
      description: 'Exquisite handcrafted jewelry pieces that combine beauty with investment value.',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop',
      purity: '22K-24K',
      price: 'From $1,200'
    },
    {
      name: 'Gold Chains',
      description: 'Elegant gold chains in various styles and weights for every occasion.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
      purity: '22K',
      price: 'From $800'
    },
    {
      name: 'Gold Rings',
      description: 'Stunning gold rings perfect for engagements, weddings, or personal collection.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop',
      purity: '18K-22K',
      price: 'From $600'
    },
    {
      name: 'Gold Bullion',
      description: 'Investment-grade bullion with competitive pricing and buyback guarantee.',
      image: 'https://images.unsplash.com/photo-1614359036763-329f33c8e28b?w=400&h=300&fit=crop',
      purity: '99.99%',
      price: 'From $5,000'
    }
  ]

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of gold products, each certified for authenticity and purity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.purity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
