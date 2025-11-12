import { Code, Layers, Rocket } from 'lucide-react';
import ServiceCard from './ServiceCard';
import type { Service } from '../types';

interface ServicesProps {
  onOrderClick: (service: Service) => void;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Website Basic',
    price: 'Rp 1.5Jt',
    pricePeriod: 'proyek',
    Icon: Code,
    features: [
      'Desain dari Template',
      'Hingga 5 Halaman',
      'Desain Responsif',
      'SEO Dasar',
      '1x Revisi Desain',
    ],
  },
  {
    id: 2,
    title: 'Website Pro',
    price: 'Rp 4Jt',
    pricePeriod: 'proyek',
    Icon: Layers,
    popular: true,
    features: [
      'Desain Custom Profesional',
      'Hingga 10 Halaman',
      'Integrasi CMS',
      'Optimasi Kecepatan',
      '3x Revisi Desain',
      'Dukungan Prioritas',
    ],
  },
  {
    id: 3,
    title: 'Website Enterprise',
    price: 'Rp 10Jt+',
    pricePeriod: 'proyek',
    Icon: Rocket,
    features: [
      'Desain & Fitur Kompleks',
      'Halaman Tidak Terbatas',
      'Integrasi API & E-commerce',
      'Performa & Keamanan Tingkat Tinggi',
      'Revisi Tanpa Batas',
      'Dukungan Penuh 24/7',
    ],
  },
];

const Services = ({ onOrderClick }: ServicesProps) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Paket Layanan yang Fleksibel
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Pilih paket yang paling sesuai dengan kebutuhan dan anggaran bisnis Anda.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onOrderClick={onOrderClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
