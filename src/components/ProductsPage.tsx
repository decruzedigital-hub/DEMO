import { motion } from 'motion/react';
import { ProductCard3D } from './ProductCard3D';
import { Badge } from './ui/badge';

export function ProductsPage() {
  const products = [
    {
      name: 'Classic Tender',
      description: 'Pure and natural coconut water, straight from the source',
      price: '$3.99',
      color: '#10b981',
      badge: 'Bestseller',
    },
    {
      name: 'Tropical Twist',
      description: 'Infused with natural pineapple and mango flavors',
      price: '$4.49',
      color: '#14b8a6',
      badge: 'New',
    },
    {
      name: 'Berry Blend',
      description: 'Coconut water with a hint of mixed berries',
      price: '$4.49',
      color: '#059669',
      badge: null,
    },
    {
      name: 'Lime Refresh',
      description: 'Coconut water with zesty lime essence',
      price: '$4.29',
      color: '#0d9488',
      badge: null,
    },
    {
      name: 'Ginger Boost',
      description: 'Energizing blend with real ginger extract',
      price: '$4.79',
      color: '#0f766e',
      badge: 'Limited Edition',
    },
    {
      name: 'Pure Original',
      description: 'Unfiltered coconut water in its most natural form',
      price: '$3.79',
      color: '#10b981',
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-4 mb-16 bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-emerald-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium tender coconut drinks, each crafted to deliver pure refreshment and natural goodness
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge
                      variant={product.badge === 'New' ? 'default' : 'secondary'}
                      className={
                        product.badge === 'New'
                          ? 'bg-emerald-500 text-white'
                          : product.badge === 'Bestseller'
                          ? 'bg-amber-500 text-white'
                          : 'bg-purple-500 text-white'
                      }
                    >
                      {product.badge}
                    </Badge>
                  </div>
                )}
                <ProductCard3D
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  color={product.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Info */}
      <section className="px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <h2 className="mb-8 text-center">Nutritional Benefits</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-2">⚡</div>
                <h3 className="mb-2">Electrolytes</h3>
                <p className="text-emerald-50">Natural hydration</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">💪</div>
                <h3 className="mb-2">Potassium</h3>
                <p className="text-emerald-50">More than a banana</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🌱</div>
                <h3 className="mb-2">Low Calories</h3>
                <p className="text-emerald-50">Guilt-free refreshment</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">✨</div>
                <h3 className="mb-2">Antioxidants</h3>
                <p className="text-emerald-50">Natural wellness boost</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
