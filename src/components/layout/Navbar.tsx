"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/#servicos" }, 
    { name: "Quem Somos", href: "/#sobre" },   
    //{ name: "Orçamento", href: "/orcamento" }, 
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Area  */}
        <Link
          href="/"
          className="flex flex-col items-start group min-w-max"
        >
          <div className="flex items-center leading-none">
            <span className="text-3xl font-black tracking-tighter text-white">
              CUBA
            </span>
            <span className="text-3xl font-black tracking-tighter text-gold ml-1">
              TECH
            </span>
          </div>

          <span
            className="text-[9px] font-medium uppercase tracking-[0.38em] text-gray-400 -mt-1 whitespace-nowrap block"
            style={{
              marginLeft: "-1.2rem", 
              width: "max-content",
            }}
          >
            SOLUÇÕES PARA INFORMÁTICA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-widest text-white/80"
            >
              {link.name}
            </Link>
          ))}
          
          
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-secondary border-b border-primary/20 p-6 flex flex-col space-y-4 md:hidden backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold border-b border-white/5 pb-2 text-white"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;