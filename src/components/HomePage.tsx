import { motion } from 'motion/react';
import { CoconutScene } from './CoconutScene';
import { Droplets, Leaf, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: '100% Natural',
      description: 'Pure coconut water with no added sugars or preservatives',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Eco-Friendly',
      description: 'Sustainably sourced from organic coconut farms',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Benefits',
      description: 'Rich in electrolytes and essential minerals',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="absolute inset-0 opacity-50">
          <CoconutScene />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-emerald-900 mb-6"
          >
            Refresh Your Life with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Pure Coconut Bliss
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Experience the tropical taste of fresh tender coconut water, packed with natural electrolytes and refreshing goodness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => onNavigate('products')}
              className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-4 bg-white text-emerald-600 border-2 border-emerald-600 rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-emerald-900 mb-4">Why Choose CocoFresh?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of taste, health, and sustainability in every bottle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-emerald-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-emerald-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-emerald-900 mb-4">Straight from Nature</h2>
            <p className="text-gray-600">
              Sourced from the finest coconut plantations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757332051114-ae8c79214cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwd2F0ZXIlMjBkcmlua3xlbnwxfHx8fDE3NjIwODg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coconut Water Drink"
                className="w-full h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640107204546-895e5058545e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGNvY29udXQlMjBwYWxtfGVufDF8fHx8MTc2MjA4ODU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coconut Palm Trees"
                className="w-full h-80 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1567567278636-c8fa119561be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNvY29udXR8ZW58MXx8fHwxNzYyMDg4NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh Coconuts"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6">Ready to Experience Pure Refreshment?</h2>
          <p className="mb-8 text-emerald-50">
            Join thousands of satisfied customers who've made the switch to natural hydration
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="px-8 py-4 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105"
          >
            Shop Now
          </button>
        </motion.div>
      </section>
    </div>
  );
}
