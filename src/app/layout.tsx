import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  
  title: "CUBA TECH",
  description: "Especialistas em manutenção avançada e setups de alta performance em Bauru-SP.",
  
  
  icons: {
    icon: "/icon.png", 
    apple: "/icon.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        {/* Garante que o ícone seja carregado corretamente */}
        <link rel="icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}