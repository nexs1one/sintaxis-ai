"use client";

import React from "react";
import Link from "next/link";

export default function DeepDivePage({ params }) {
    // En un caso real, esto vendría de un fetch basado en params.slug
    const videoData = {
        title: "La Regla 60/30/10",
        description: "El framework definitivo para dominar la inteligencia artificial en 2026. Entiende cómo distribuir tu tiempo de aprendizaje y ejecución.",
        youtubeId: "XrMUE2f7r5I",
        category: "FUNDAMENTOS",
    };

    const playlist = [
        { title: "Introducción a los LLMs", slug: "llm-intro", duration: "12:45" },
        { title: "Context Window & Tokens", slug: "context-tokens", duration: "15:20" },
        { title: "Sinergia: IA + Automación", slug: "ia-sinergia", duration: "10:10" },
        { title: "El Futuro del Trabajo", slug: "futuro-trabajo", duration: "08:55" },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* 1. Sidebar IZQUIERDA: Navegación de Módulos (Desktop) */}
            <aside className="hidden lg:flex flex-col w-64 border-r border-card-border bg-black/20">
                <div className="p-6 border-b border-card-border">
                    <Link href="/" className="text-xl font-black tracking-tighter">
                        SINT<span className="gradient-text">AXIS</span>
                    </Link>
                </div>
                <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                    <div className="text-[10px] font-bold text-foreground/30 px-2 pb-2 tracking-widest uppercase">
                        BLQ 01: Cimientos
                    </div>
                    {playlist.map((video) => (
                        <Link
                            key={video.slug}
                            href={`/deep-dives/${video.slug}`}
                            className="block p-3 rounded-lg hover:bg-card-bg transition-colors group"
                        >
                            <div className="text-sm font-medium group-hover:text-accent-cyan transition-colors line-clamp-1">{video.title}</div>
                            <div className="text-[10px] text-foreground/40 font-mono">{video.duration} // LOGS</div>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* 2. Centro: Reproductor y Contenido */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Top Navbar Mobile/Tablet */}
                <div className="lg:hidden p-4 border-b border-card-border flex justify-between items-center">
                    <Link href="/" className="text-xl font-black tracking-tighter">SINTAXIS</Link>
                    <div className="text-xs bg-card-bg px-3 py-1 rounded-full border border-card-border uppercase">Menu</div>
                </div>

                {/* Video Player */}
                <div className="aspect-video w-full bg-black relative">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
                        title={videoData.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Contenido Texto */}
                <div className="p-8 max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                        <div className="text-[12px] font-bold text-accent-purple tracking-[0.3em] uppercase">{videoData.category}</div>
                        <h1 className="text-4xl font-black tracking-tight">{videoData.title}</h1>
                        <p className="text-foreground/70 text-lg leading-relaxed">{videoData.description}</p>
                    </div>

                    <div className="glass p-8 rounded-2xl border-l-4 border-accent-cyan bg-accent-cyan/5">
                        <h3 className="font-bold text-accent-cyan mb-2">SINTAXIS_NOTE //</h3>
                        <p className="text-sm text-foreground/80 font-mono">
                            Este video explica la metodología 60/30/10. Asegúrate de tener tu libreta de notas de IA lista. La IA no es una herramienta, es un colaborador.
                        </p>
                    </div>

                    {/* Sección de Comentarios (Fase 2 ready) */}
                    <div className="pt-20 border-t border-card-border">
                        <h2 className="text-2xl font-bold mb-6">SINTAXIS_TERMINAL</h2>
                        <div className="glass rounded-xl p-1 overflow-hidden">
                            <div className="bg-black/50 p-4 font-mono text-sm text-accent-cyan/80">
                                <div>C:\Users\User{" > "} query_ai --topic "{videoData.title}"</div>
                                <div className="text-foreground/40 mt-1">Esperando entrada del usuario..._</div>
                            </div>
                            <input
                                type="text"
                                placeholder="Escribe tu duda aquí..."
                                className="w-full bg-transparent p-4 outline-none border-t border-card-border text-sm"
                            />
                        </div>
                        <p className="text-[10px] text-foreground/30 mt-2 uppercase tracking-widest">
                            Analizando mediante base de datos vectorial (Fase 2)
                        </p>
                    </div>
                </div>
            </main>

            {/* 3. Derecha: Up Next / Comunidades (Desktop Wide) */}
            <aside className="hidden xl:flex flex-col w-80 border-l border-card-border p-6 space-y-8">
                <div>
                    <h3 className="text-sm font-black mb-4 tracking-widest uppercase">SIGUIENTE VIDEO //</h3>
                    <div className="glass p-4 rounded-xl space-y-3 hover:border-accent-cyan/50 cursor-pointer transition-all">
                        <div className="aspect-video bg-card-bg rounded-lg"></div>
                        <div className="text-xs font-bold leading-tight">Módulo 1.2: El Lenguaje de la Información (JSON & API)</div>
                        <div className="text-[10px] text-accent-cyan font-mono tracking-tighter">ESTADO: DISPONIBLE</div>
                    </div>
                </div>

                <div className="pt-8 border-t border-card-border">
                    <h3 className="text-sm font-black mb-4 tracking-widest uppercase text-accent-purple">COMUNIDADES SKOOL //</h3>
                    <div className="space-y-4">
                        <CommunityCard
                            name="IA Masters"
                            desc="Automatización pro."
                            link="https://www.skool.com/ia-masters-automations/about?ref=60759ea4946d47a380a386034086e365"
                        />
                        <CommunityCard
                            name="The BETTS"
                            desc="Ecosistema de IA."
                            link="https://www.skool.com/the-betts-ai/about?ref=60759ea4946d47a380a386034086e365"
                        />
                    </div>
                </div>
            </aside>
        </div>
    );
}

function CommunityCard({ name, desc, link }) {
    return (
        <a href={link} className="block glass p-4 rounded-xl hover:bg-foreground/5 transition-all group">
            <div className="text-xs font-bold group-hover:text-accent-cyan">{name}</div>
            <div className="text-[10px] text-foreground/40">{desc}</div>
        </a>
    );
}
