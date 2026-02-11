import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SINTAXIS AI | IA • AUTOMATION • SKOOL",
  description: "Decodificamos el futuro de la Inteligencia Artificial y la Automatización para potenciar tu productividad y tus ingresos.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SINTAXIS AI",
    "url": "https://sintaxis-ai.com",
    "logo": "https://sintaxis-ai.com/logo.png",
    "description": "Expertos en IA y Automatización.",
    "sameAs": [
      "https://youtube.com/@SintaxisAI"
    ]
  };

  return (
    <html lang="es">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased text-foreground bg-background`}>
        <div className="bg-mesh" />
        {children}
      </body>
    </html>
  );
}
