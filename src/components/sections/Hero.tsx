"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Cpu, ShieldCheck, Zap, Monitor, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. Marcas D'água Técnicas - Ajustadas para sutileza e profundidade */}
      <div className="absolute inset-0 z-0 opacity-[0.02] md:opacity-[0.03] pointer-events-none">
        <div className="absolute -left-20 top-20 rotate-12 scale-75 md:scale-100">
          <Cpu size={450} className="text-primary" strokeWidth={0.5} />
        </div>
        <div className="absolute -right-20 bottom-10 -rotate-12 scale-75 md:scale-100">
          <Monitor size={550} className="text-primary" strokeWidth={0.5} />
        </div>
        <div className="absolute left-1/4 bottom-[-10%] opacity-30 md:opacity-50">
          <Database size={300} className="text-primary" strokeWidth={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge de Localização Premium */}
          <span className="inline-block px-4 py-1.5 mb-6 md:mb-10 text-[9px] md:text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase border border-primary/20 rounded-full text-primary bg-primary/5">
            Desde 2020 • Bauru-SP
          </span>

          {/* 2. Logo com Efeito Apple Liquid Gold */}
          <div className="flex flex-col items-center mb-10 md:mb-12 w-full">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter flex items-center leading-none">
              <span className="text-white">CUBA</span>
              
              {/* Palavra TECH com animação de brilho e contraste extremo */}
              <motion.span 
                animate={{ 
                  filter: [
                    "brightness(1) contrast(1.1)", 
                    "brightness(1.2) contrast(1.3)", 
                    "brightness(1) contrast(1.1)"
                  ] 
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="text-metallic-gold ml-2 md:ml-5"
              >
                TECH
              </motion.span>
            </h1>
            
            {/* Subtexto com Tracking Fluido para Smartphone */}
            <p 
              className="text-[9px] sm:text-[11px] md:text-[14px] uppercase tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.78em] text-gray-500 mt-2 whitespace-nowrap"
              style={{ 
                width: 'max-content',
                marginLeft: 'calc(-0.5rem - 1vw)' 
              }}
            >
              SOLUÇÕES PARA INFORMÁTICA
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-xl mb-10 md:mb-12 font-light leading-relaxed px-2">
            Especialistas em manutenção avançada, setups de alta performance e
            desenvolvimento de soluções digitais sob medida.
          </p>

          {/* 3. Botões Flexíveis - Configurações de largura via CSS Global */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/orcamento'}
              className="btn-cuba-gold py-4"
            >
              SOLICITAR ORÇAMENTO
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cuba-outline py-4"
            >
              CONHECER SERVIÇOS
            </motion.button>
          </div>
        </motion.div>

        {/* Badges de Confiança em Grid Adaptável */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto border-t border-white/5 pt-10 md:pt-12"
        >
          <div className="flex items-center gap-2 md:gap-4 justify-center group cursor-default text-center">
            <Cpu className="text-primary group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6 flex-shrink-0" strokeWidth={2} />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold text-gray-400 group-hover:text-white transition-colors">
              Hardware Premium
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-4 justify-center group cursor-default text-center">
            <ShieldCheck className="text-primary group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6 flex-shrink-0" strokeWidth={2} />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold text-gray-400 group-hover:text-white transition-colors">
              Garantia Total
            </span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center gap-2 md:gap-4 justify-center group cursor-default text-center">
            <Zap className="text-primary group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6 flex-shrink-0" strokeWidth={2} />
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold text-gray-400 group-hover:text-white transition-colors">
              Reparo Ágil
            </span>
          </div>
        </motion.div>
      </div>

      {/* Indicador de Scroll Suave */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-primary/40 hidden sm:block"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;