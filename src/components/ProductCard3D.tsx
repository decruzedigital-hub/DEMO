import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { motion } from 'motion/react';

interface BottleProps {
  color: string;
}

function Bottle({ color }: BottleProps) {
  const bottleRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (bottleRef.current) {
      bottleRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      bottleRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      <RoundedBox
        ref={bottleRef}
        args={[0.6, 2, 0.6]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.1}
          metalness={0.3}
        />
      </RoundedBox>
      {hovered && (
        <pointLight position={[0, 0, 2]} intensity={2} color={color} />
      )}
    </group>
  );
}

interface ProductCard3DProps {
  name: string;
  description: string;
  price: string;
  color: string;
}

export function ProductCard3D({ name, description, price, color }: ProductCard3DProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="h-64 bg-gradient-to-br from-emerald-50 to-teal-50">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Bottle color={color} />
        </Canvas>
      </div>
      <div className="p-6">
        <h3 className="text-emerald-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-emerald-600">{price}</span>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
