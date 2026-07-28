import React, { useEffect } from 'react';

const WhatsAppRedirect = ({ whatsappUrl, onComplete }) => {
  useEffect(() => {
    // 1. Trigger Google Ads Conversion Event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18353898612/JCvgCIK9itgcEPSI6a9E'
      });
    }

    // 2. Setup Redirection after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
      // In a real SPA, we'd stay in the app but here we are actually leaving to WhatsApp
      if (onComplete) onComplete();
    }, 2000);

    return ()letup => {
      clearTimeout(timer);
    };
  }, [whatsappUrl, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] text-white p-6">
      <div className="text-center space-y-6 max-w-md">
        {/* Animated Spinner or Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Preparando seu <span className="text-orange-500">Acesso VIP</span>...
          </h2>
          <p className="text-gray-400 text-sm md:text-base animate-pulse">
            Estamos conectando você ao nosso atendimento especializado.
          </p>
        </div>

        {/* Fallback Link */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Não foi redirecionado?</p>
          <a
            href={whatsappUrl}
            className="text-orange-500 hover:text-orange-400 font-semibold transition-colors underline decoration-orange-500/30 underline-offset-4"
          >
            Clique aqui para falar agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppRedirect;
