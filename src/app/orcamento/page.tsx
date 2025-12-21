"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Send, Hammer, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const services = [
  "Manutenção/Montagem de Setup",
  "Limpeza & Higienização Completa",
  "Troca de Pasta Térmica/Thermalpads",
  "Reparo em Placa Mãe de Notebook",
  "Ajuste e Reparo de Dobradiças",
  "Troca de Tela",
  "Upgrade de Hardware (SSD/RAM/GPU/Fontes/Cooler)",
  "Formatação com ou sem Backup",
  "Criação de Páginas Web / Apps"
];

export default function OrcamentoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    equipamento: '',
    servico: services[0],
    os: 0
  });

  // Gera a OS 
  useEffect(() => {
    setFormData(prev => ({...prev, os: Math.floor(1000 + Math.random() * 9000)}));
  }, []);

  const handleWhatsApp = () => {
    if(!formData.nome || !formData.equipamento) {
        alert("Por favor, preencha seu nome e o equipamento.");
        return;
    }

    const message = `*ORÇAMENTO CUBA TECH*
----------------------------
*OS:* ${formData.os}
*Cliente:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*Equipamento:* ${formData.equipamento}
*Serviço:* ${formData.servico}
----------------------------
_Enviado via cubatech.com.br_`;

    const url = `https://wa.me/5514998669435/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      {/* Marcas D'água Técnicas (Foscas) */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="absolute left-[-5%] top-[20%] rotate-12">
          <Hammer size={600} className="text-primary" strokeWidth={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 text-sm group">
            <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </Link>

          {/* Cabeçalho  */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center leading-none">
                <span className="text-5xl md:text-7xl font-black tracking-tighter text-white">CUBA</span>
                <span className="text-5xl md:text-7xl font-black tracking-tighter text-gold ml-2">TECH</span>
              </div>
              <p className="text-[10px] md:text-[12px] uppercase tracking-[0.50em] text-gray-500 -mt-1 whitespace-nowrap"
                 style={{ marginLeft: "-1.5rem", width: "max-content" }}>
                SOLUÇÕES PARA INFORMÁTICA
              </p>
            </div>
            
            <div className="mt-10 inline-block px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                  Ordem de Serviço: #{formData.os}
                </span>
            </div>
          </motion.div>

          {/* Card do Formulário */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1a1a1a]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Seu Nome</label>
                <input 
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Seu WhatsApp</label>
                <input 
                  type="text"
                  placeholder="(14) 99999-9999"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Equipamento (Ex: Notebook Dell G15)</label>
                <input 
                  type="text"
                  placeholder="Qual aparelho precisa de reparo?"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, equipamento: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Serviço Pretendido</label>
                <select 
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, servico: e.target.value})}
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-secondary text-white">{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <button 
              onClick={handleWhatsApp}
              className="w-full btn-cuba-gold mt-10 py-5 flex items-center justify-center gap-4 text-base group"
            >
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              SOLICITAR ORÇAMENTO VIA WHATSAPP
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}