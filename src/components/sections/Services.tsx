"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Droplets, Thermometer, Laptop, 
  Wrench, Monitor, RefreshCw, Code, Smartphone 
} from 'lucide-react';

const services = [
  {
    title: "Setup & Performance",
    desc: "Montagem e manutenção de setups entusiastas e workstations.",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    title: "Limpeza & Térmica",
    desc: "Higienização completa e troca de pasta térmica/thermalpads (CPU/GPU).",
    icon: <Thermometer className="w-8 h-8" />,
  },
  {
    title: "Reparo de Notebooks",
    desc: "Manutenção em placas-mãe, dobradiças, telas, teclados e baterias.",
    icon: <Laptop className="w-8 h-8" />,
  },
  {
    title: "Upgrades & Sistema",
    desc: "Formatação com backup, instalação de softwares e upgrade de hardware.",
    icon: <RefreshCw className="w-8 h-8" />,
  },
  {
    title: "Web & Mobile",
    desc: "Criação de páginas profissionais e aplicativos personalizados.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Suporte Técnico",
    desc: "Soluções precisas para problemas de hardware e software.",
    icon: <Wrench className="w-8 h-8" />,
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary tracking-[0.4em] uppercase text-sm mb-4"
          >
            Especialidades
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">O Que Fazemos</h2>
          <div className="w-20 h-1 bg-primary mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-secondary border border-white/5 hover:border-primary/50 transition-all group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;