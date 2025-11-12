import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Service, Template } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Service | Template | null;
}

const OrderModal = ({ isOpen, onClose, content }: OrderModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    websiteName: '',
    contact: '',
    message: '',
  });

  useEffect(() => {
    if (content) {
      const isTemplate = 'category' in content;
      setFormData({
        name: '',
        websiteName: isTemplate ? content.title : '',
        contact: '',
        message: ''
      });
    }
  }, [content]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;
    
    const isService = 'features' in content;
    console.log({
      orderType: isService ? 'service' : 'template',
      orderedItem: content.title,
      price: content.price,
      ...formData,
    });
    alert('Terima kasih! Pesanan Anda telah kami catat. Kami akan segera menghubungi Anda.');
    onClose();
  };
  
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-50px", opacity: 0, scale: 0.95 },
    visible: { y: "0", opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    exit: { y: "50px", opacity: 0, scale: 0.95 }
  };

  if (!content) return null;

  const isService = 'features' in content;
  const typeText = isService ? 'paket' : 'template';
  const isTemplate = 'category' in content;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg p-8 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold text-white">Formulir Pemesanan</h2>
            <p className="mt-2 text-slate-400">
              Anda memesan {typeText}: <span className="font-semibold text-indigo-400">{content.title}</span>
              {' '}dengan harga <span className="font-semibold text-white">{content.price}</span>.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="websiteName" className="block text-sm font-medium text-slate-300">Nama Website yang Diinginkan</label>
                <input
                  type="text"
                  name="websiteName"
                  id="websiteName"
                  required
                  value={formData.websiteName}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder={!isTemplate ? 'Contoh: Toko Kue Lezat' : ''}
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-slate-300">Kontak (Email/No. HP)</label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">Pesan Tambahan (Opsional)</label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Jelaskan kebutuhan Anda lebih detail..."
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500"
                >
                  Kirim Pesanan
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
