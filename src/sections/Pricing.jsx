import React from 'react';
import { motion } from 'framer-motion';
import { Check, BadgePercent } from 'lucide-react';
import { cn } from '../utils/cn';

const plans = [
  {
    name: "Plano de Entretenimento Mensal",
    price: "R$ 34,90",
    period: "/mês",
    features: ["Acesso Ilimitado Premium", "Qualidade Visual de Alta Definição", "Acesso em 1 Tela com Plataforma Sem Interrupções", "Suporte Digital Exclusivo"],
    highlight: false,
  },
  {
    name: "Assinatura de Entretenimento 4K",
    price: "R$ 299,90",
    period: "/ano",
    features: ["Acesso Total 4K Ultra HD", "3 Telas para Reprodução em Telas Simultâneas", "Atendimento de Elite Personalizado", "A Melhor Evolução do Streaming de Vídeo"],
    highlight: true,
    badge: "Escolha Premium Ultra HD"
  },
  {
    name: "Pacote de Imersão Trimestral",
    price: "R$ 89,90",
    period: "/trimestre",
    features: ["Acesso Multiplataforma Ilimitado", "Transmissão Contínua Premium", "2 Telas Integradas", "Suporte Premium Especializado", "Streaming Sem Travamentos garantido"],
    highlight: false,
  },
];

const PricingCard = ({ plan }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={cn(
      "relative p-8 rounded-3xl flex flex-col gap-6 transition-all duration-300",
      plan.highlight
        ? "glass border-red-50/50 shadow-glow ring-2 ring-red-500/20 scale-105 z-10"
        : "glass border-white/5"
    )}
  >
    {plan.highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-atmos-gradient text-white text-[10px] font-bold uppercase px-3 py 1 rounded-full tracking-wider">
        Premium
      </div >
    )}

    {plan.badge && (
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
        <BadgePercent className="w-3 h-3" />
        {plan.badge}
      </div >
    )}

    <div>
      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      <div className="flex items-baseline gap-1 mt-4">
        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
        <span className="text-gray-40 text-sm">{plan.period}</span>
      </div >
    </div >

    <ul className="space-y-4">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
          <Check className="w-5 h-5 text-red-500" />
          {feature}
        </li >
      ))}
    </ul >

    <motion.a
      href="/conectar-whatsapp.html"
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-event="pricing_click"
      data-plan={plan.name}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "w-full py-4 rounded-2xl font-bold transition-all text-center block",
        plan.highlight
          ? "bg-atmos-gradient text-white shadow-glow"
          : "bg-white/10 text-white hover:bg-white/20"
      )}
    >
      {plan.name.includes("Mensal") ? "Ativar Assinatura via WhatsApp" :
       plan.name.includes("Anual") ? "Garantir Assinatura VIP via WhatsApp" :
       "Iniciar Assinatura via WhatsApp"}
    </motion.a>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm"
          >
            ESCOLHA SEU PLANO. Preços que refletem o verdadeiro Padrão de Cinema Digital.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mt-4 text-white"
          >
            <span className="bg-clip-text text-transparent bg-atmos-gradient">Premium & Incomparável.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,77,77,0.05)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default Pricing;
