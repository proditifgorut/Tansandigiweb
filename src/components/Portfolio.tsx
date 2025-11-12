import TemplateCard from './TemplateCard';
import type { Template } from '../types';

interface PortfolioProps {
  onTemplateClick: (template: Template) => void;
}

const templates: Template[] = [
  { id: 1, title: 'Startup Landing Page', category: 'Bisnis', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=Startup', price: 'Rp 800rb' },
  { id: 2, title: 'Portfolio Fotografer', category: 'Kreatif', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=Portfolio', price: 'Rp 750rb' },
  { id: 3, title: 'Toko Online Modern', category: 'E-commerce', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=E-commerce', price: 'Rp 1.2Jt' },
  { id: 4, title: 'Blog Pribadi Elegan', category: 'Blog', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=Blog', price: 'Rp 600rb' },
  { id: 5, title: 'Website Restoran', category: 'Kuliner', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=Restoran', price: 'Rp 900rb' },
  { id: 6, title: 'Agensi Digital', category: 'Bisnis', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=Agensi', price: 'Rp 850rb' },
  { id: 7, title: 'Aplikasi SaaS', category: 'Teknologi', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=SaaS', price: 'Rp 1.5Jt' },
  { id: 8, title: 'Platform Edukasi', category: 'Pendidikan', imageUrl: 'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1e293b/93c5fd/png?text=Edukasi', price: 'Rp 1.3Jt' },
];

const Portfolio = ({ onTemplateClick }: PortfolioProps) => {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Galeri Template Kami</h2>
          <p className="mt-4 text-lg text-slate-400">
            Mulai proyek Anda lebih cepat dengan salah satu template siap pakai kami.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} onClick={onTemplateClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
