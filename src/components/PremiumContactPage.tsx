import { motion } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function PremiumContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'hello@chevellafarms.com',
      description: 'We\'ll respond within 24 hours',
      href: 'mailto:hello@chevellafarms.com',
      clickable: true,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+91 98765 43210',
      description: 'Mon-Fri, 9AM-6PM IST',
      href: 'tel:+919876543210',
      clickable: true,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      value: 'Chevella, Tamil Nadu',
      description: 'Farm tours available by appointment',
      href: 'https://www.google.com/maps/search/?api=1&query=Chevella,+Tamil+Nadu,+India',
      clickable: true,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      value: '9:00 AM - 6:00 PM',
      description: 'Monday to Friday',
      clickable: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="font-display text-7xl md:text-9xl text-gray-900 mb-6">
              Let's
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Connect
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or want to learn more about our farms? 
              We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const CardContent = (
                <>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 mx-auto">
                    {info.icon}
                  </div>
                  <h3 className="text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-emerald-600 mb-2">{info.value}</p>
                  <p className="text-gray-600">{info.description}</p>
                </>
              );

              return info.clickable ? (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl hover:shadow-xl transition-all cursor-pointer text-center block"
                >
                  {CardContent}
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl hover:shadow-xl transition-all cursor-hover text-center"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-6xl md:text-7xl text-gray-900 mb-6">
                Send Us a
                <br />
                <span className="text-emerald-600">Message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Product Inquiries</h4>
                    <p className="text-gray-600">Questions about our coconut water products</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Wholesale & Partnerships</h4>
                    <p className="text-gray-600">Bulk orders and business collaborations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Farm Visits</h4>
                    <p className="text-gray-600">Schedule a tour of our organic farms</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-3" />
                  <div>
                    <h4 className="text-gray-900 mb-1">General Support</h4>
                    <p className="text-gray-600">Any other questions or feedback</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 mb-2">First Name</label>
                    <Input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 mb-2">Last Name</label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-900 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 mb-2">Phone (Optional)</label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 mb-2">Subject</label>
                  <Input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                  />
                </div>

                <MagneticButton
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </MagneticButton>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-6xl md:text-7xl text-gray-900 mb-6">
              Visit Our
              <br />
              <span className="text-emerald-600">Farm</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of South India's coconut belt
            </p>
          </motion.div>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Chevella,+Tamil+Nadu,+India"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl block cursor-pointer group"
          >
            <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-all">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl text-gray-900 mb-2">Chevella Farms</h3>
                <p className="text-gray-600 mb-2">Tamil Nadu, India</p>
                <span className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full text-sm group-hover:bg-emerald-700 transition-colors">
                  View on Google Maps
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our FAQ section for quick answers to common questions
          </p>
          <MagneticButton
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all"
          >
            View FAQs
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
}
