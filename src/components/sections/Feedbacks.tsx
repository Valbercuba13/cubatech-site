"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "Carlos Silva", text: "Excelente atendimento! Meu notebook estava esquentando muito e a troca da pasta térmica resolveu 100%.", rating: 5 },
  { name: "Mariana Costa", text: "A Cuba Tech criou o site da minha loja e ficou impecável. Super profissionais e rápidos.", rating: 5 },
  { name: "Roberto Junior", text: "Melhor lugar em Bauru para manutenção de hardware. Setup montado com cable management perfeito.", rating: 5 },
];

const Feedbacks = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white uppercase tracking-widest">
          O que nossos clientes dizem
        </h2>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {reviews.map((rev, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                <div className="bg-secondary p-8 rounded-2xl border border-white/5 relative">
                  <Quote className="absolute top-4 right-4 text-primary/20" size={40} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed">"{rev.text}"</p>
                  <span className="text-white font-bold tracking-tight">— {rev.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;