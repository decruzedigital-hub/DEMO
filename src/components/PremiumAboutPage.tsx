import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MagneticButton } from './MagneticButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Users, Award, Target, Heart, Sprout } from 'lucide-react';

export function PremiumAboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'We practice eco-friendly farming and use 100% recyclable packaging to protect our planet.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Supporting local farmers with fair wages and creating positive social impact.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'Uncompromising standards from farm to bottle, certified organic and tested for purity.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health',
      description: 'Committed to providing the most nutritious and natural hydration for your wellbeing.',
    },
  ];

  const timeline = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Started with a small organic farm in Tamil Nadu, growing tender coconuts with traditional methods.',
    },
    {
      year: '2017',
      title: 'Organic Certification',
      description: 'Received organic certification and expanded to 100+ acres of farmland.',
    },
    {
      year: '2019',
      title: 'First Bottling',
      description: 'Launched our first bottled coconut water, making farm-fresh coconut water accessible to all.',
    },
    {
      year: '2021',
      title: 'National Distribution',
      description: 'Expanded distribution across South India with over 500 retail partners.',
    },
    {
      year: '2024',
      title: 'Innovation & Growth',
      description: 'Introduced new product variants and sustainable packaging solutions.',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15),transparent_50%)]"
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              Our Story
            </span>
            <h1 className="font-display text-7xl md:text-9xl text-gray-900 mb-6">
              Rooted in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Tradition
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From our organic farms in South India to your table, we're on a mission 
              to share the pure goodness of nature's perfect hydration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-6xl md:text-7xl text-gray-900 mb-6">
                Our Journey
                <br />
                <span className="text-emerald-600">Began in 2015</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Chevella Farms was born from a simple idea: to bring the authentic taste 
                  of fresh tender coconut water to people everywhere, preserving all its 
                  natural goodness and nutritional benefits.
                </p>
                <p>
                  Our founder, Mr. Rajesh Kumar, grew up in a coconut farming family in 
                  Tamil Nadu. He witnessed firsthand how traditional farming methods produced 
                  the most flavorful and nutritious coconuts.
                </p>
                <p>
                  Today, we work with over 200 local farmers, maintaining the same traditional 
                  methods while incorporating modern sustainable practices. Every bottle of 
                  Chevella coconut water represents our commitment to quality, community, 
                  and the environment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-3xl blur-3xl opacity-30" />
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1707009699022-4863a35e5f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvY29udXQlMjBmYXJtfGVufDF8fHx8MTc2MjA4ODk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coconut Farm"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl overflow-hidden mt-12"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1655779282200-2b4d3d3bdc53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGxhbnRhdGlvbiUyMHRyb3BpY2FsfGVufDF8fHx8MTc2MjA4ODk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coconut Plantation"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-6xl md:text-7xl text-gray-900 mb-6">
              Our Core
              <br />
              <span className="text-emerald-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-white rounded-3xl hover:shadow-2xl transition-all cursor-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { value: '200+', label: 'Farming Partners' },
              { value: '500+', label: 'Acres of Farmland' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '100%', label: 'Organic Certified' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl mb-4">{stat.value}</div>
                <p className="text-xl text-emerald-50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
              Our
              <br />
              <span className="text-emerald-600">Milestones</span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-8"
              >
                <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                  <span className="text-2xl">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-3xl text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Process Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-6xl md:text-7xl text-gray-900 mb-6">
              From Farm
              <br />
              <span className="text-emerald-600">to Bottle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our meticulous process ensures the highest quality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sprout className="w-8 h-8" />,
                title: 'Organic Farming',
                description: 'Coconuts grown using traditional methods without harmful pesticides or chemicals.',
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Perfect Timing',
                description: 'Harvested at peak ripeness when natural sweetness and nutrients are optimal.',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Quality Control',
                description: 'Each coconut is hand-selected and tested before processing.',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-3xl hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl text-gray-900 mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the difference of farm-fresh, organic coconut water
          </p>
          <MagneticButton
            className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all text-lg"
          >
            Shop Now
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
}
