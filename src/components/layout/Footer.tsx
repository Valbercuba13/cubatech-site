import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Lado Esquerdo: Marca e Descrição */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col">
            <span className="text-3xl font-bold tracking-tighter">
              <span className="text-white">CUBA</span>
              <span className="text-gold">TECH</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Soluções para Informática
            </span>
          </Link>
          <p className="text-gray-400 text-sm max-w-xs mt-2">
            Especialistas em assistência técnica de alta performance em Bauru e região. Sua tecnologia em boas mãos.
          </p>
        </div>

        {/* Centro: Links Rápidos */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">Navegação</h4>
          <nav className="flex flex-col gap-2">
            <Link href="#inicio" className="text-gray-400 hover:text-gold transition-colors">Início</Link>
            <Link href="#servicos" className="text-gray-400 hover:text-gold transition-colors">Serviços</Link>
            <Link href="#sobre" className="text-gray-400 hover:text-gold transition-colors">Sobre Nós</Link>
            <Link href="/orcamento" className="text-gray-400 hover:text-gold transition-colors">Solicitar Orçamento</Link>
          </nav>
        </div>

        {/* Lado Direito: Contato e Redes */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-sm">Conecte-se</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/cubatech.br/" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary transition-all text-white">
              <Instagram size={20} />
            </a>
            <a href="https://wa.me/5514998669435" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary transition-all text-white">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            &copy; {new Date().getFullYear()} <span className="text-white">CUBA</span><span className="text-gold">TECH</span>. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}