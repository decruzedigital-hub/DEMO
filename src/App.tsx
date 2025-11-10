import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { PremiumNavigation } from './components/PremiumNavigation';
import { PremiumHomePage } from './components/PremiumHomePage';
import { PremiumProductsPage } from './components/PremiumProductsPage';
import { PremiumAboutPage } from './components/PremiumAboutPage';
import { PremiumContactPage } from './components/PremiumContactPage';
import { PremiumFooter } from './components/PremiumFooter';

type PageType = 'home' | 'products' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Set page title based on current page
    const titles: Record<PageType, string> = {
      home: 'Chevella Farms - Pure Tender Coconut Water',
      products: 'Our Products - Chevella Farms',
      about: 'About Us - Chevella Farms',
      contact: 'Contact Us - Chevella Farms',
    };
    document.title = titles[currentPage];
  }, [currentPage]);



  const pageVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -30, scale: 0.98 },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PremiumHomePage onNavigate={handleNavigate} />;
      case 'products':
        return <PremiumProductsPage />;
      case 'about':
        return <PremiumAboutPage />;
      case 'contact':
        return <PremiumContactPage />;
      default:
        return <PremiumHomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <CustomCursor />
      <ScrollProgress />
      <PremiumNavigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <PremiumFooter />
    </div>
  );
}
