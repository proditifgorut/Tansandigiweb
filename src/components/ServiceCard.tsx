import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onOrderClick: (service: Service) => void;
}

const ServiceCard = ({ service, onOrderClick }: ServiceCardProps) => {
  const { title, price, pricePeriod, features, Icon, popular } = service;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`relative flex flex-col rounded-2xl border ${popular ? 'border-indigo-500' : 'border-slate-800'} bg-slate-800/50 p-8 shadow-lg`}
      onClick={() => onOrderClick(service)}
    >
      {popular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-indigo-500">
            Paling Populer
          </span>
        </div>
      )}
      <div className="flex-shrink-0">
        <Icon className="h-10 w-10 text-indigo-400" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-400">Mulai dari</p>
      <p className="mt-1">
        <span className="text-4xl font-bold tracking-tight text-white">{price}</span>
        <span className="text-base font-medium text-slate-400">/{pricePeriod}</span>
      </p>
      <ul role="list" className="mt-8 space-y-4 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <p className="ml-3 text-base text-slate-300">{feature}</p>
          </li>
        ))}
      </ul>
      <button
        className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Pesan Sekarang
      </button>
    </motion.div>
  );
};

export default ServiceCard;
