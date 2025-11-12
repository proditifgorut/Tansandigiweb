import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Bangun Website Impian Anda <br />
          <span className="text-indigo-400">Bersama Tansan Digital</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400"
        >
          Kami mengubah ide Anda menjadi kenyataan digital. Solusi website profesional, modern, dan responsif untuk mendorong pertumbuhan bisnis Anda.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 md:text-lg"
          >
            Lihat Paket
            <MoveRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
