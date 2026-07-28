import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "Como recebo meus dados de acesso?",
    answer: "Ao iniciar sua Assinatura Premium 4K, sua liberação no nosso Portal de Acesso Multiplataforma ocorre instantaneamente. Garantimos um Plano Digital Premium Sem Interrupções para que a sua imersão na Nova Geração de TV Digital comece imediatamente, sem atrasos.",
  },
  {
    question: "Preciso de alguma antena ou equipamento especial?",
    answer: "Não! Nossa Plataforma de Alta Qualidade Premium funciona integralmente via internet. Tenha uma Experiência Imersiva 4K Premium Estável diretamente em suas Smart TVs, dispositivos Android e iOS. Entregamos um Acesso Total Ultra HD Premium sem complicações de hardware, acessível através do nosso Aplicativo de Streaming Nativo.",
  },
  {
    question: "O serviço pode travar durante o uso?",
    answer: "Jamais. Utilizamos a mais avançada Tecnologia de Fluxo Ultra HD Assinatura para assegurar que sua Assinatura de Streaming 4K Sem Buffering seja perfeitamente fluida o tempo todo. Nossa infraestrutura blindada proporciona um Serviço de Vídeo 4K Premium constante, entregando altíssima Estabilidade de Sinal em Tempo Real.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos Pix e Cartões de Crédito. Garanta hoje o seu Plano de Entreamento 4K Assinatura com liberação sistêmica imediata. Invista na sua comodidade e prepare-se para uma Experiência Cinema em Casa 4K Assinatura incomparável, consolidada como o melhor Catálogo de Entretenimento On-Demand do mercado.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-red-500"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative bg-black">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm"
          >
            Tudo o que você precisa saber.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold mt-4 text-white"
          >
            Tudo o que você <br /> precisa saber.
          </motion.h2>
        </div>

        <div className="glass rounded-3xl border border-white/5 p-4 md:p-8">
          {faqItems.map((item, i) => (
            <FAQItem key={i} {...item} />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,7CC3,red,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default FAQ;
