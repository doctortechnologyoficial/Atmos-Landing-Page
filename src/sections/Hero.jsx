import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  // Função para disparar o evento de baixo valor (Filtro de Intenção)
  const handleTrialClick = (e) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'low_intent_trial', {
        'event_category': 'user_segmentation',
        'event_label': 'free_seeker_filter',
        'event_value': 0.01, // Valor ínfimo para não poluir o ROAS de conversões reais
        'method': 'demo_click'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            ✨ Streaming de Luxo 4K ✨
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white">
            Experiência Cinema 4K Premium.<br />
            <span className="bg-clip-text text-transparent bg-atmos-gradient">
              Assinatura Ultra HD Sem Travamentos.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Descubra a <strong className="text-white">Plataforma de Cinema 4K Assinatura</strong> que está redefinindo o entretenimento em casa. Aproveite um <strong className="text-white">Serviço de Streaming 4K Estável</strong> equipado com tecnologia de ponta para uma <strong className="text-white">Experiência Visual 4K Assinatura</strong> inigualável.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/conectar-whatsapp.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full bg-atmos-gradient text-white font-black text-xl shadow-[0_0_30px_rgba(200,68,68,0.4)] ring-2 ring-red-500/30 flex items-center gap-3"
            >
              <Play className="w-6 h-6 fill-current" />
              Garantir Acesso VIP Ultra HD
            </motion.a>

            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass border border-white/10 text-white font-bold text-lg"
            >
              Ver Planos de Assinatura Digital
            </motion.a>
          </div>

          {/* O Gatilho "Isca" - Atraente para o usuário, mas rastreável como Low Intent */}
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={handleTrialClick}
              className="text-red-400/80 hover:text-red-400 text-sm font-bold tracking-wide transition-all duration-300 underline decoration-red-500/30 underline-offset-4 italic"
            >
              ✨ Inicie sua Degustação Tecnológica: Experimente a Alta Definição Sem Compromisso ✨
            </button>
          </motion.div>

        </motion.div>

        {/* Video Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 relative max-w-5xl mx-auto group"
        >
          <div className="absolute inset-0 bg-atmos-gradient blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
          <div className="glass rounded-2xl border border-white/10 p-4 md:p-6 overflow-hidden aspect-video shadow-2xl">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1&mute=1&loop=1&playlist=aqz-KE-bpKQ&controls=0&modestbranding=1"
              title="Atmos Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
