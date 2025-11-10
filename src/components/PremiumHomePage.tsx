import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, Suspense } from 'react';
import { MagneticButton } from './MagneticButton';
import { ParallaxText } from './ParallaxText';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedSection } from './AnimatedSection';
import { FloatingElements } from './FloatingElements';
import { Product3D } from './Product3D';
import { Droplets, Leaf, Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PremiumHomePageProps {
  onNavigate: (page: string) => void;
}

export function PremiumHomePage({ onNavigate }: PremiumHomePageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <FloatingElements />
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                  100% Natural & Organic
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="font-display text-6xl md:text-8xl lg:text-9xl text-gray-900 mb-6"
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Pure
                </motion.span>
                <br />
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
                >
                  Coconut
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Bliss
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-lg md:text-xl text-gray-600 mb-8"
              >
                Experience nature's perfect hydration from tender young coconuts, 
                sourced directly from our organic farms in South India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MagneticButton
                    onClick={() => onNavigate('products')}
                    className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all flex items-center gap-2"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MagneticButton
                    onClick={() => onNavigate('about')}
                    className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full hover:border-emerald-500 hover:shadow-xl transition-all"
                  >
                    Our Story
                  </MagneticButton>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>No Added Sugar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>100% Natural</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Farm Fresh</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - 3D Product */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[600px] order-1 md:order-2"
            >
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-3xl">
                  <div className="text-emerald-600">Loading 3D Model...</div>
                </div>
              }>
                <Product3D />
              </Suspense>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 bg-emerald-600 overflow-hidden">
        <ParallaxText baseVelocity={-2} className="text-4xl md:text-6xl text-white/20">
          PURE • NATURAL • ORGANIC • FRESH • HYDRATION •
        </ParallaxText>
      </section>

      {/* Product Showcase */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <motion.div>
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                Featured Product
              </span>
              <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
                Tender Coconut
                <br />
                <span className="text-emerald-600">Water</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Harvested at the perfect stage of ripeness, our tender coconut water 
                is packed with natural electrolytes, vitamins, and minerals. 
                Each bottle contains the pure essence of one young coconut.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="text-gray-900 mb-2">Rich in Electrolytes</h3>
                  <p className="text-gray-600">Natural hydration boost</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
                  <div className="text-3xl mb-2">🌱</div>
                  <h3 className="text-gray-900 mb-2">Low Calories</h3>
                  <p className="text-gray-600">Only 45 cal per serving</p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <MagneticButton
                  onClick={() => onNavigate('products')}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all"
                >
                  View All Products
                </MagneticButton>
              </motion.div>
            </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
            <motion.div
              className="relative cursor-hover"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1625535927032-dd38fdf54f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwd2F0ZXIlMjBib3R0bGUlMjBwcm9kdWN0fGVufDF8fHx8MTc2MjA4ODk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coconut Water Product"
                    className="w-full h-[500px] object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <motion.div>
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Why Choose
              <br />
              <span className="text-emerald-600">Chevella Farms?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering the purest coconut water experience
            </p>
          </motion.div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="w-8 h-8" />,
                title: '100% Pure',
                description: 'No additives, preservatives, or artificial flavors',
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Organic Certified',
                description: 'Sustainably sourced from certified organic farms',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Heart Healthy',
                description: 'Naturally low in fat and cholesterol-free',
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Fresh Daily',
                description: 'Harvested and bottled within 24 hours',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group p-8 bg-white rounded-3xl hover:shadow-2xl transition-all cursor-hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden cursor-hover"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1707009699022-4863a35e5f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvY29udXQlMjBmYXJtfGVufDF8fHx8MTc2MjA4ODk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coconut Farm"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden cursor-hover mt-12"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655779282200-2b4d3d3bdc53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGxhbnRhdGlvbiUyMHRyb3BpY2FsfGVufDF8fHx8MTc2MjA4ODk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coconut Plantation"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                From Our Farms
              </span>
              <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
                Grown with
                <br />
                <span className="text-emerald-600">Love & Care</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Our coconuts are grown in the lush farms of South India, where the 
                tropical climate and rich soil create the perfect conditions for 
                cultivating the finest tender coconuts.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                We work directly with local farmers, ensuring fair trade practices 
                and sustainable farming methods that protect our environment for 
                future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-7xl mb-6">
            Ready to Experience
            <br />
            Pure Refreshment?
          </h2>
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
            Join thousands of happy customers who've discovered the natural goodness 
            of our tender coconut water
          </p>
          <MagneticButton
            onClick={() => onNavigate('products')}
            className="px-10 py-5 bg-white text-emerald-600 rounded-full hover:shadow-2xl transition-all text-xl"
          >
            Shop Now
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
}
