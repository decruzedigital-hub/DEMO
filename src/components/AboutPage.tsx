import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { Users, Award, Globe, Leaf } from 'lucide-react';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]}>
      <meshStandardMaterial
        color="#10b981"
        wireframe
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
}

export function AboutPage() {
  const stats = [
    { value: '10M+', label: 'Bottles Sold' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '15+', label: 'Countries' },
    { value: '100%', label: 'Natural' },
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'We partner with eco-friendly farms and use recyclable packaging to minimize our environmental impact.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Supporting local farmers and communities while delivering premium quality products.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality',
      description: 'Rigorous testing and quality control ensure every bottle meets our high standards.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Bringing the taste of tropical freshness to customers around the world.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-emerald-900 mb-6">Our Story</h1>
              <p className="text-gray-600 mb-6">
                Founded in 2018, CocoFresh began with a simple mission: to bring the pure, refreshing taste of tender coconut water to everyone, everywhere.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small family business has grown into a trusted brand, known for our commitment to quality, sustainability, and authentic tropical flavors.
              </p>
              <p className="text-gray-600">
                Today, we work directly with coconut farmers across Southeast Asia, ensuring fair trade practices and the highest quality coconuts for our products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl overflow-hidden"
            >
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
              </Canvas>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-2">{stat.value}</div>
                <p className="text-emerald-50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-emerald-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our core principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-emerald-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-emerald-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-emerald-900 mb-4">Our Journey</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: '2018',
                title: 'The Beginning',
                description: 'CocoFresh was founded with a vision to revolutionize coconut water distribution.',
              },
              {
                year: '2020',
                title: 'National Expansion',
                description: 'Expanded to all major cities with our signature product line.',
              },
              {
                year: '2022',
                title: 'Going Global',
                description: 'Launched in 15 countries across Asia and Europe.',
              },
              {
                year: '2024',
                title: 'Innovation Leader',
                description: 'Introduced new flavors and sustainable packaging solutions.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center">
                  <span>{milestone.year}</span>
                </div>
                <div className="flex-1 p-6 bg-white rounded-2xl shadow-md">
                  <h3 className="text-emerald-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
