"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Cpu, ShieldCheck, Zap, Monitor, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* 1. Marcas D'água Técnicas */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute -left-20 top-20 rotate-12">
          <Cpu size={450} className="text-primary" strokeWidth={0.5} />
        </div>
        <div className="absolute -right-20 bottom-10 -rotate-12">
          <Monitor size={550} className="text-primary" strokeWidth={0.5} />
        </div>
        <div className="absolute left-1/4 bottom-[-10%] opacity-50">
          <Database size={300} className="text-primary" strokeWidth={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge de Localização */}
          <span className="inline-block px-4 py-1.5 mb-10 text-[10px] font-bold tracking-[0.4em] uppercase border border-primary/20 rounded-full text-primary bg-primary/5">
            Desde 2020 • Bauru-SP
          </span>

          {/* 2. Logo  */}
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter flex items-center leading-none">
              <span className="text-white">CUBA</span>
              <span className="text-gold ml-3 md:ml-5">TECH</span>
            </h1>
            
            {/* Subtexto Expandido  */}
            <p 
              className="text-[11px] md:text-[14px] uppercase tracking-[0.78em] text-gray-500 mt-2 whitespace-nowrap"
              style={{ 
                width: 'max-content',
                marginLeft: '-1.2rem' 
              }}
            >
              SOLUÇÕES PARA INFORMÁTICA
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
            Especialistas em manutenção avançada, setups de alta performance e
            desenvolvimento de soluções digitais sob medida.
          </p>

          {/* 3. Botões F */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Botão Principal */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/orcamento'}
              className="btn-cuba-gold min-w-[260px]"
            >
              SOLICITAR ORÇAMENTO
            </motion.button>

            {/* Botão Secundário */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cuba-outline min-w-[260px]"
            >
              CONHECER SERVIÇOS
            </motion.button>
          </div>
        </motion.div>

        {/* Badges de Confiança */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12"
        >
          <div className="flex items-center gap-4 justify-center group cursor-default">
            <Cpu className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 group-hover:text-white transition-colors">
              Hardware Premium
            </span>
          </div>
          <div className="flex items-center gap-4 justify-center group cursor-default">
            <ShieldCheck className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 group-hover:text-white transition-colors">
              Garantia Total
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 justify-center group cursor-default">
            <Zap className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400 group-hover:text-white transition-colors">
              Reparo Ágil
            </span>
          </div>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/40"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;