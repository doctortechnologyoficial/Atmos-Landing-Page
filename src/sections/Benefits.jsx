import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Tv, Smartphone, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-red-500" />,
    title: "Tecnologia Anti-buffering Premium",
    description: "Nossa Engenharia de Fluxo Premium Estável garante uma Reprodução Fluida em Alta Velocidade, eliminando interrupções para entregar o definitivo Streaming Premium 4K Estável. Operamos através de um Servidor de Alta Performance Dedicado para blindar o seu conforto.",
  },
  {
    icon: <Tv className="w-8 h-8 text-orange-500" />,
    title: "Experiência Cinema 4K Premium",
    description: "Sinta a imersão total com a Qualidade Ultra HD Premium Estável, transformando sua sala em uma verdadeira Plataforma de Entretenimento 4K Assinatura. Desfrute de uma Definição de Imagem Cristalina e de um Conteúdo Ultra HD Sem Perdas.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-red-500" />,
    title: "Acesso Multi-dispositivo 4K Assinatura",
    description: "Leve seu Streaming de Alta Definição Premium para qualquer lugar: do smartphone à Smart TV, sempre protegido por uma Conexão Ultra HD Premium Estável. Nossa Sincronização de Dispositivos Inteligentes garante uma Mobilidade de Entretenimento Digital impecável.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: "Serviço VIP 4K Ultra HD",
    description: "Atendimento de elite para certificar a sua Assinatura Digital 4K Sem Lag. Nosso Suporte Técnico Prioritário está de prontidão para manter sua Transmissão Direta para TV operando sempre com Garantia de Estabilidade de Rede.",
  },
];

const BenefitCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass glass-hover p-8 rounded-3xl border border-white/5 flex flex-col gap-4 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-500 font-bold tracking-widest uppercase text-sm"
          >
            POR QUE ESCOLHER A ATMOS? Tecnologia de Entretenimento que Impressiona.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mt-4 text-white"
          >
            <span className="bg-clip-text text-transparent bg-atmos-gradient">Padrão de Cinema Digital.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} {...benefit} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-500/5 blur-[120px] pointer-segments-none" />
    </section>
  );
};

export default Benefits;
