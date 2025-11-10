import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { MessageCircle, Mail, Phone } from 'lucide-react';

function FloatingRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      ringRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2, 0.5, 16, 100]} />
      <meshStandardMaterial
        color="#10b981"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

export function FAQPage() {
  const faqs = [
    {
      question: 'What makes CocoFresh different from other coconut water brands?',
      answer: 'CocoFresh sources directly from organic farms, ensuring the freshest and most natural coconut water. We never add preservatives, artificial flavors, or sweeteners. Our unique cold-press extraction method preserves all the natural nutrients and electrolytes.',
    },
    {
      question: 'How long does CocoFresh stay fresh after opening?',
      answer: 'Once opened, our coconut water should be refrigerated and consumed within 24-48 hours for optimal freshness and taste. The sealed bottles have a shelf life of 12 months when stored in a cool, dry place.',
    },
    {
      question: 'Is CocoFresh suitable for people with dietary restrictions?',
      answer: 'Yes! CocoFresh is 100% natural, vegan, gluten-free, and contains no added sugars. It\'s suitable for most dietary requirements. However, if you have specific allergies or concerns, please consult the ingredient list or your healthcare provider.',
    },
    {
      question: 'Where are your coconuts sourced from?',
      answer: 'We work with certified organic coconut farms primarily in Thailand, Philippines, and Indonesia. We maintain direct relationships with our farmers to ensure fair trade practices and the highest quality standards.',
    },
    {
      question: 'Can I drink coconut water every day?',
      answer: 'Absolutely! Coconut water is a healthy, natural beverage that can be enjoyed daily. It\'s an excellent source of hydration, electrolytes, and essential minerals like potassium and magnesium.',
    },
    {
      question: 'Do you offer wholesale or bulk purchasing?',
      answer: 'Yes, we offer wholesale options for retailers, gyms, hotels, and other businesses. Please contact our sales team at wholesale@cocofresh.com for pricing and minimum order quantities.',
    },
    {
      question: 'Are your bottles recyclable?',
      answer: 'Yes, our bottles are made from 100% recyclable PET plastic. We\'re also working on introducing biodegradable packaging options as part of our sustainability commitment.',
    },
    {
      question: 'What are the health benefits of drinking coconut water?',
      answer: 'Coconut water is rich in electrolytes, particularly potassium, which helps with hydration. It also contains antioxidants, has low calories, supports heart health, and can aid in post-workout recovery.',
    },
    {
      question: 'How do I place an order?',
      answer: 'You can order directly through our website by clicking on any "Buy Now" button in the Products section. We also have our products available in major retail stores and online marketplaces.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we currently ship to over 15 countries. Shipping costs and delivery times vary by location. You can check availability and shipping rates at checkout.',
    },
  ];

  const contactOptions = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'support@cocofresh.com',
      description: 'Get a response within 24 hours',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      value: 'Chat with us',
      description: 'Available during business hours',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header Section */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-emerald-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-600">
                Find answers to common questions about CocoFresh products, ordering, and more. Can't find what you're looking for? Reach out to our support team!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-80 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl overflow-hidden"
            >
              <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <FloatingRing />
              </Canvas>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border border-emerald-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-emerald-900 hover:text-emerald-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-emerald-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600">
              Our support team is here to help
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white rounded-2xl shadow-md text-center cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 mb-4">
                  {option.icon}
                </div>
                <h3 className="text-emerald-900 mb-2">{option.title}</h3>
                <p className="text-emerald-600 mb-2">{option.value}</p>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="mb-4">Stay Updated</h2>
          <p className="text-emerald-50 mb-6">
            Subscribe to our newsletter for exclusive offers, new product launches, and wellness tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
