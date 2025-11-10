import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 15, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      
      const isInteractive = target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover');
      
      if (isInteractive) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor-text');
        if (text) setCursorText(text);
        
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          setCursorVariant('input');
        } else {
          setCursorVariant('hover');
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      
      const isInteractive = target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover');
      
      if (isInteractive) {
        setIsHovering(false);
        setCursorText('');
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(16, 185, 129, 0.15)',
      borderColor: 'rgba(16, 185, 129, 0.4)',
    },
    hover: {
      scale: 2,
      backgroundColor: 'rgba(16, 185, 129, 0.25)',
      borderColor: 'rgba(16, 185, 129, 0.7)',
    },
    input: {
      scale: 1.5,
      backgroundColor: 'rgba(59, 130, 246, 0.15)',
      borderColor: 'rgba(59, 130, 246, 0.5)',
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full backdrop-blur-sm border-2"
          variants={variants}
          animate={cursorVariant}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          {cursorText && (
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center text-xs text-emerald-900 font-medium"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
      
      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '22px',
          translateY: '22px',
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full bg-emerald-500"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
}
