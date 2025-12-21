"use client";
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Send, Cpu, Monitor, Hammer } from 'lucide-react';

const services = [
  "Manutenção/Montagem de Setup",
  "Limpeza & Higienização Completa",
  "Troca de Pasta Térmica/Thermalpads",
  "Reparo em Placa Mãe de Notebook",
  "Ajuste de Dobradiças/Troca de Tela",
  "Upgrade de Hardware (SSD/RAM)",
  "Formatação com Backup",
  "Criação de Páginas Web / Apps"
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    equipamento: '',
    servico: services[0],
    os: Math.floor(1000 + Math.random() * 9000)
  });

  const handleWhatsApp = () => {
    const message = `*ORÇAMENTO CUBA TECH*
----------------------------
*OS:* ${formData.os}
*Cliente:* ${formData.nome}
*WhatsApp:* ${formData.whatsapp}
*Equipamento:* ${formData.equipamento}
*Serviço:* ${formData.servico}
----------------------------
_Enviado via cubatech.com.br_`;

    const url = `https://wa.me/5514998669435?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      
      {/* Marcas D'água de Fundo */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="absolute left-[-10%] top-[20%] rotate-12">
          <Hammer size={500} className="text-primary" strokeWidth={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Cabeçalho da OS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex flex-col items-center mb-4">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter flex items-center">
                <span className="text-white">CUBA</span>
                <span className="text-gold ml-2">TECH</span>
              </h1>
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.55em] text-gray-500 -mt-1 w-full text-center">
                Soluções para Informática
              </p>
            </div>
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
              Solicitação de Orçamento • OS ${formData.os}
            </span>
          </motion.div>

          {/* Formulário Profissional */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Seu Nome</label>
                <input 
                  type="text"
                  placeholder="Ex: Valber Cuba"
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Seu WhatsApp</label>
                <input 
                  type="text"
                  placeholder="(14) 99999-9999"
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Equipamento (Marca/Modelo)</label>
                <input 
                  type="text"
                  placeholder="Ex: Notebook Lenovo Ideapad 3i"
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, equipamento: e.target.value})}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold ml-1">Serviço Necessário</label>
                <select 
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer"
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
              SOLICITAR VIA WHATSAPP
            </button>
            
            <p className="text-center text-gray-500 text-[10px] mt-6 uppercase tracking-widest font-medium">
              Resposta imediata em horário comercial
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}