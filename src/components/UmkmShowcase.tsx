import { motion } from 'framer-motion';
import { CheckCircle, Store } from 'lucide-react';
import type { Service } from '../types';

interface UmkmShowcaseProps {
  onOrderClick: (service: Service) => void;
}

const umkmService: Service = {
    id: 5, // Unique ID
    title: 'Website UMKM',
    price: 'Rp 300rb',
    pricePeriod: 'proyek',
    Icon: Store,
    features: [
      '1 Halaman Landing Page',
      'Desain Sederhana & Bersih',
      'Integrasi Tombol WhatsApp',
      'Desain Mobile Friendly',
      'Bantuan Publikasi',
    ],
};

const UmkmShowcase = ({ onOrderClick }: UmkmShowcaseProps) => {
  return (
    <div className="mb-24">
        <div className="bg-slate-800/50 rounded-2xl p-8 lg:p-12 border border-slate-700 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full h-64 sm:h-80 lg:h-full rounded-lg overflow-hidden"
                >
                    <img 
                        src="https://img-wrapper.vercel.app/image?url=https://placehold.co/800x600/1e293b/93c5fd/png?text=Website+UMKM" 
                        alt="Contoh Website UMKM" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Website Khusus <span className="text-indigo-400">UMKM</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Tingkatkan visibilitas bisnis Anda dengan website profesional yang dirancang khusus untuk kebutuhan UMKM. Cepat, terjangkau, dan efektif.
                    </p>
                    <ul role="list" className="mt-8 space-y-4">
                        {umkmService.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base text-slate-300">{feature}</p>
                        </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-col sm:flex-row items-baseline gap-4">
                         <p className="mt-1">
                            <span className="text-4xl font-bold tracking-tight text-white">{umkmService.price}</span>
                            <span className="text-base font-medium text-slate-400">/{umkmService.pricePeriod}</span>
                        </p>
                        <button
                            onClick={() => onOrderClick(umkmService)}
                            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105"
                        >
                            Pesan Sekarang
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

export default UmkmShowcase;
