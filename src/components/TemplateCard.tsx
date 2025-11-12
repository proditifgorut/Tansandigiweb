import { motion } from 'framer-motion';
import type { Template } from '../types';
import { Eye } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  onClick: (template: Template) => void;
}

const TemplateCard = ({ template, onClick }: TemplateCardProps) => {
  return (
    <motion.div
      layoutId={`template-card-${template.id}`}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={() => onClick(template)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-slate-800 border border-slate-700"
    >
      <img
        src={template.imageUrl}
        alt={template.title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-white drop-shadow-md">{template.title}</h3>
        <p className="text-sm text-slate-300">{template.category}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center space-x-2 rounded-full bg-indigo-600 px-4 py-2 text-white font-semibold">
          <Eye size={18} />
          <span>Pesan Template Ini</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
