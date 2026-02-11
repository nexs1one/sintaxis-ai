"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-20">
      {/* Hero Section */}
      <section className="max-w-6xl w-full flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <div className="glass px-6 py-2 rounded-full text-sm font-medium tracking-widest text-accent-cyan uppercase mb-4 animate-pulse-slow">
          Sistema Operativo de IA Activado
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
          SINT<span className="gradient-text">AXIS</span> AI
        </h1>

        <p className="max-w-2xl text-xl text-foreground/70 leading-relaxed">
          Decodificamos el futuro de la automatización. No solo consumas tecnología, <span className="text-foreground font-bold">compílala a tu favor</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-6 pt-10">
          <a
            href="https://www.skool.com/ia-masters-automations/about?ref=60759ea4946d47a380a386034086e365"
            className="px-10 py-4 bg-foreground text-background font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            COMPILAR MI FUTURO
          </a>
          <a
            href="#deep-dives"
            className="glass px-10 py-4 font-bold rounded-xl transition-all hover:bg-card-border"
          >
            VER DEEP DIVES
          </a>
        </div>
      </section>

      {/* Authority Section / Deep Dives Grid */}
      <section id="deep-dives" className="max-w-6xl w-full mt-40 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-card-border pb-8">
          <div>
            <h2 className="text-4xl font-bold">DEEP DIVES</h2>
            <p className="text-foreground/50">Análisis profundos sobre el ecosistema de IA.</p>
          </div>
          <div className="text-accent-cyan font-mono text-sm tracking-widest">
            LOGS::V1.0.CURRENT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="La Regla 60/30/10"
            desc="El framework definitivo para dominar la inteligencia artificial en 2026."
            tag="FUNDAMENTOS"
          />
          <Card
            title="Sinergia: IA + Automación"
            desc="Cómo conectar n8n, Python y LLMs en un flujo imparable."
            tag="AUTOMATION"
          />
          <Card
            title="Ventana de Contexto"
            desc="El secreto para que tu IA deje de alucinar y empiece a razonar."
            tag="AVANZADO"
          />
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="mt-40 text-foreground/30 text-sm font-mono tracking-tighter">
        SINTAXIS_AI // ALL_RIGHTS_RESERVED_2026 // @SINTAXISAI
      </footer>
    </main>
  );
}

function Card({ title, desc, tag }) {
  return (
    <div className="glass p-8 rounded-2xl space-y-4 group cursor-pointer transition-all hover:border-accent-cyan/30 hover:-translate-y-2">
      <div className="text-[10px] font-bold tracking-widest text-accent-purple uppercase">
        {tag}
      </div>
      <h3 className="text-2xl font-bold group-hover:text-accent-cyan transition-colors">
        {title}
      </h3>
      <p className="text-foreground/50 text-sm leading-relaxed">
        {desc}
      </p>
      <div className="pt-4 flex items-center gap-2 text-xs font-bold tracking-tight group-hover:gap-4 transition-all">
        LEER DOCUMENTACIÓN <span className="text-accent-cyan">→</span>
      </div>
    </div>
  );
}
