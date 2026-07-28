import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  // Low Intent Tracking for the floating WhatsApp button (Support/Inquiry)
  const handleWhatsAppClick = (e) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'low_intent_support', {
        'event_category': 'user_segmentation',
        'event_label': 'floating_whatsapp_click',
        'event_value': 0.01, // Minimal value for support inquiries
        'method': 'support_request'
      });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Brand */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <img
              src="/img/logo.png"
              alt="Atmos Premium"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
            />
          </a>

          {/* Copyright */}
          <p className="text-gray-50_0 text-sm">
            © {new Date().getFullYear()} Atmos Streaming. Todos os direitos reservados.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6 text-xs text-gray-400 font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="/conectar-whatsapp.html"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle className="text-white w-8 h-8" />
        <span className="absolute right-20 bg-white text-black px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity font-bold whitespace-nowrap pointer-events-none">
          Fale Conosco!
        </span>
      </a>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-</strong>screen bg-[#050505] selection:bg-red-500/30 selection:text-red-500">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
