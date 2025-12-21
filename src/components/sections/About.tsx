"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Laptop, Settings, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="relative py-24 bg-black overflow-hidden">
      
      {/* 1. Marcas D'água Técnicas  */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <div className="absolute left-[-5%] top-[10%] rotate-45">
          <Settings size={400} className="text-primary" strokeWidth={0.5} />
        </div>
        <div className="absolute right-[-10%] bottom-[5%] -rotate-12">
          <Laptop size={500} className="text-primary" strokeWidth={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Card com Identidade Visual Premium */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-secondary/50 p-12 backdrop-blur-sm group">
              {/* Ícone de fundo  */}
              <div className="absolute right-6 top-6 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <Shield size={120} className="text-primary" />
              </div>

              <div className="relative z-10">
                 <h3 className="text-5xl font-black mb-1 leading-none">
                    <span className="text-white">CUBA</span>
                    <span className="text-gold ml-2">TECH</span>
                 </h3>
                 <p className="text-[10px] uppercase tracking-[0.55em] text-gray-500 mb-8 ml-1">
                    Excelência em Tecnologia
                 </p>
                 <div className="w-12 h-1 bg-primary rounded-full mb-8"></div>
                 <p className="text-gray-400 leading-relaxed italic border-l-2 border-primary/20 pl-4">
                   "Nossa missão é transformar a complexidade técnica em soluções simples e eficientes para o seu dia a dia."
                 </p>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: História e Diferenciais */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Nossa Jornada</span>
            <h2 className="text-4xl font-bold mb-8 text-white leading-tight">Desde 2020 elevando o padrão de tecnologia em Bauru.</h2>
            
            <p className="text-gray-400 mb-10 leading-relaxed text-lg font-light">
              A **Cuba Tech** nasceu da paixão pelo hardware e pela inovação digital. Especializados em manutenções de alta complexidade e no desenvolvimento de softwares modernos, entregamos o equilíbrio perfeito entre desempenho e confiabilidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary">
                  <Calendar size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Fundação</h4>
                  <p className="text-gray-500 text-xs">Atuando com excelência desde 2020.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Localização</h4>
                  <p className="text-gray-500 text-xs">Sede em Bauru, atendendo toda a região.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 col-span-full border-t border-white/5 pt-6">
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary">
                  <Award size={22} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Compromisso Full Stack</h4>
                  <p className="text-gray-500 text-xs">Do hardware avançado ao desenvolvimento de apps e páginas web de alto impacto.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;