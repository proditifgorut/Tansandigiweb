import { Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/6283119226089";
  const emailLink = "mailto:infoweb@unisgu.ac.id";

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-indigo-400" />
              <span className="text-2xl font-bold text-white">Tansan Digital</span>
            </a>
            <p className="text-slate-400">
              Solusi digital untuk membawa bisnis Anda ke level berikutnya. Kami fokus pada kualitas, performa, dan kepuasan klien.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Hubungi Kami</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+62 831-1922-6089</span>
                  </a>
                </li>
                <li>
                  <a href={emailLink} className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>infoweb@unisgu.ac.id</span>
                  </a>
                </li>
                 <li>
                  <div className="flex items-center text-slate-300">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>Indonesia</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white">Navigasi</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-indigo-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-slate-300 hover:text-indigo-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-slate-300 hover:text-indigo-400 transition-colors">Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {currentYear} Tansan Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
