import { motion } from 'motion/react';
import productImage from 'figma:asset/13a1591cc8e9516a5acabcdd3e3ed0d925e3a2ff.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Product3D() {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-8">
      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 bg-teal-400/15 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* 3D Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotateX: 0
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className="relative"
        style={{ perspective: '1000px' }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 5, 0, -5, 0],
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotateY: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 10,
            rotateX: -5,
            transition: { duration: 0.3 }
          }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Multiple shadow layers for depth */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-3xl blur-2xl transform translate-y-8 scale-95"
            style={{ transform: 'translateZ(-50px)' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl transform translate-y-6 scale-97"
            style={{ transform: 'translateZ(-30px)' }}
          />

          {/* Main product card */}
          <div className="relative bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 rounded-3xl p-6 shadow-2xl border border-white/50 backdrop-blur-sm overflow-hidden">
            {/* Top shine effect */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl" />
            
            {/* Side shine effect */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white/30 to-transparent rounded-l-3xl" />

            {/* Sparkle elements */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-8 right-8 w-2 h-2 bg-emerald-400 rounded-full blur-sm"
            />
            <motion.div
              animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-16 right-16 w-1.5 h-1.5 bg-teal-400 rounded-full blur-sm"
            />
            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-12 left-12 w-2 h-2 bg-emerald-300 rounded-full blur-sm"
            />

            {/* Product image */}
            <div className="relative w-full max-w-md mx-auto">
              <ImageWithFallback
                src={productImage}
                alt="Chevella Farms Tender Coconut Water"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              
              {/* Image glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/60 to-transparent rounded-b-3xl" />
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
            style={{ transform: 'translateZ(30px)' }}
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl"
            style={{ transform: 'translateZ(30px)' }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom reflection/shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-emerald-900/10 via-emerald-900/5 to-transparent rounded-full blur-2xl" />
    </div>
  );
}
