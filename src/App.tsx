import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import type { Service, Template } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Service | Template | null>(null);

  const handleOrderClick = (service: Service) => {
    setModalContent(service);
    setIsModalOpen(true);
  };

  const handleTemplateClick = (template: Template) => {
    setModalContent(template);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Add a small delay before clearing the content to allow for exit animation
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Services onOrderClick={handleOrderClick} />
        <Portfolio onTemplateClick={handleTemplateClick} onOrderClick={handleOrderClick} />
      </main>
      <Footer />
      <OrderModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={modalContent}
      />
    </div>
  );
}

export default App;
