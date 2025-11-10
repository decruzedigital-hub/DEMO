import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { MagneticButton } from './MagneticButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart as ShoppingCartIcon, Star } from 'lucide-react';
import { ShoppingCart, CartItem } from './ShoppingCart';
import { toast } from 'sonner@2.0.3';
import bottleImage from 'figma:asset/150750074fc755fd0e5dde6ebded4b7df44c0bdc.png';
import sachetPouchImage from 'figma:asset/4c6c31dde33588b1c6f6c75ffc6f69af23d135cf.png';
import monthlyPackImage from 'figma:asset/4937f637f40495fe5a4060cafd2490683db6955c.png';

export function PremiumProductsPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const products = [
    {
      id: 'bottle-200ml',
      name: 'Tender Coconut Water',
      subtitle: 'Ready to Drink',
      description: 'Pure tender coconut water in a convenient 200ml bottle, perfect for on-the-go hydration',
      price: 40,
      priceDisplay: '₹40',
      volume: '200ml',
      rating: 4.9,
      image: bottleImage,
      badge: 'Bestseller',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'monthly-pack-10',
      name: 'Instant Coconut Water',
      subtitle: 'Monthly Pack',
      description: 'Box of 10 sachets - just add water for instant tender coconut water anytime, anywhere',
      price: 299,
      priceDisplay: '₹299',
      volume: '10 Sachets',
      rating: 5.0,
      image: monthlyPackImage,
      badge: 'Best Value',
      color: 'from-lime-500 to-emerald-600',
    },
    {
      id: 'sachet-pack-12',
      name: 'Instant Coconut Water',
      subtitle: 'Pack of 12 Sachets',
      description: 'Premium instant coconut water sachets in a resealable pouch - 100% natural, no preservatives',
      price: 349,
      priceDisplay: '₹349',
      volume: '12 Sachets',
      rating: 4.8,
      image: sachetPouchImage,
      badge: 'Premium',
      color: 'from-slate-600 to-slate-800',
    },
  ];

  const addToCart = (product: typeof products[0]) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      toast.success(`Added another ${product.name} to cart!`);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          volume: product.volume,
          image: product.image,
          quantity: 1,
        },
      ]);
      toast.success(`${product.name} added to cart!`);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.success('Item removed from cart');
  };

  const handleCheckout = () => {
    toast.success('Redirecting to checkout...');
    // In a real app, this would navigate to checkout page
  };

  const benefits = [
    { label: 'Natural Electrolytes', value: '✓' },
    { label: 'Rich in Potassium', value: '600mg' },
    { label: 'Low Calories', value: '45 cal' },
    { label: 'No Added Sugar', value: '✓' },
    { label: 'Vitamins & Minerals', value: '✓' },
    { label: 'Gluten Free', value: '✓' },
  ];

  return (
    <>
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />
      
      <div ref={containerRef} className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]"
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              Our Products
            </span>
            <h1 className="font-display text-7xl md:text-9xl text-gray-900 mb-6">
              Nature's Perfect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Hydration
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium tender coconut water, 
              harvested fresh and bottled within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-hover"
              >
                <motion.div 
                  className="relative bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl overflow-hidden"
                  whileHover={{ 
                    boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)',
                  }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`inline-block px-4 py-2 bg-gradient-to-r ${product.color} text-white rounded-full text-sm shadow-lg`}>
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Product Image */}
                  <motion.div
                    className="relative h-80 flex items-center justify-center p-8"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -2, 2, 0],
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Product Info */}
                  <div className="p-8 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.rating})</span>
                    </div>

                    <h3 className="text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-emerald-600 mb-3">{product.subtitle}</p>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl text-gray-900">{product.priceDisplay}</span>
                        <span className="text-gray-500 ml-2">/ {product.volume}</span>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <MagneticButton
                        onClick={() => addToCart(product)}
                        className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
                      >
                        <ShoppingCartIcon className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </MagneticButton>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Benefits */}
      <section className="py-32 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-6xl md:text-7xl mb-6">
              Packed with
              <br />
              Natural Goodness
            </h2>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
              Every bottle is loaded with essential nutrients and minerals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <div className="text-4xl mb-3">{benefit.value}</div>
                <p className="text-emerald-50">{benefit.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-6xl md:text-7xl text-gray-900 mb-6">
                From Farm
                <br />
                to Your
                <br />
                <span className="text-emerald-600">Doorstep</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We ensure the highest quality by controlling every step of the process, 
                from harvesting to packaging.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Harvested Daily</h4>
                    <p className="text-gray-600">Fresh coconuts picked every morning at peak ripeness</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Cold-Pressed</h4>
                    <p className="text-gray-600">Gentle extraction preserves nutrients and taste</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Quick Delivery</h4>
                    <p className="text-gray-600">Delivered fresh within 48 hours of bottling</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl blur-3xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707009699022-4863a35e5f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvY29udXQlMjBmYXJtfGVufDF8fHx8MTc2MjA4ODk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coconut Farm"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="font-display text-6xl md:text-7xl text-gray-900 mb-6">
            Subscribe & Save
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get 15% off on monthly subscriptions and never run out of your favorite coconut water
          </p>
          <MagneticButton
            className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all text-lg"
          >
            Subscribe Now
          </MagneticButton>
        </motion.div>
      </section>
    </div>
    </>
  );
}
