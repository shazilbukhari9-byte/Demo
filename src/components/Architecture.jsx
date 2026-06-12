import React, { useRef, useState, useEffect } from 'react'
import { Cpu,Zap } from 'lucide-react';

function ScrollReveal({ children, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.99]'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}


const Architecture = () => {
    return (
        <div>
            <section id="how-it-works" className="py-20 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB000]/10 border border-[#FFB000]/30 text-[9px] font-extrabold text-black uppercase tracking-wider mb-4 animate-pulse">
                                <Cpu className="w-3.5 h-3.5 text-[#FFB000]" />
                                <span>Architectural Supremacy</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black" >
                                Native Audio Engine, <span className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent">Not A Relay Glue</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Box: Standard Delay pipeline */}
                        <ScrollReveal delay={100}>
                            <div className="group relative rounded-2xl border border-gray-200 bg-gray-50/40 p-6 sm:p-8 space-y-6 transition-all duration-500 hover:border-red-200 hover:shadow-md">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-extrabold text-red-500 tracking-wider uppercase">Standard Voice Bots</span>
                                    <span className="text-[10px] bg-red-50 border border-red-100 text-red-600 px-2 py-0.5 rounded-md font-extrabold animate-pulse">Latency: 1.5s+</span>
                                </div>

                                {/* Delayed Pipeline Visualizer */}
                                <div className="space-y-2.5">
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100 transition-all duration-300 hover:translate-x-1.5 hover:shadow-sm">
                                        <span className="text-[11px] font-bold text-gray-700">Speech-to-Text (STT)</span>
                                        <span className="text-xs font-bold text-red-500">+350ms</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100 transition-all duration-300 hover:translate-x-1.5 hover:shadow-sm">
                                        <span className="text-[11px] font-bold text-gray-700">LLM Inference (GPT-4)</span>
                                        <span className="text-xs font-bold text-red-500">+800ms</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100 transition-all duration-300 hover:translate-x-1.5 hover:shadow-sm">
                                        <span className="text-[11px] font-bold text-gray-700">Text-to-Speech (TTS)</span>
                                        <span className="text-xs font-bold text-red-500">+450ms</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Box: Audio-Native Model */}
                        <ScrollReveal delay={200}>
                            <div className="group relative rounded-2xl border border-[#FFB000]/40 bg-gradient-to-b from-[#FFB000]/5 to-white p-6 sm:p-8 space-y-6 overflow-hidden shadow-sm transition-all duration-500 hover:scale-[1.02] hover:border-black hover:shadow-xl">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFB000]/10 rounded-full filter blur-xl animate-pulse duration-[4000ms]" />
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-extrabold text-black tracking-wider uppercase">Demo Audio Model</span>
                                    <span className="text-[10px] bg-green-50 border border-green-100 text-green-600 px-2.5 py-0.5 rounded-md font-extrabold">Latency: Sub-300ms</span>
                                </div>

                                {/* Native Audio visualizer box */}
                                <div className="p-5 rounded-xl bg-black text-white flex items-center justify-between relative overflow-hidden group/box shadow-inner">
                                    <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-white/10 -left-1/4 group-hover/box:animate-shine pointer-events-none" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#FFB000]/20 flex items-center justify-center animate-bounce">
                                            <Zap className="w-4 h-4 text-[#FFB000]" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-extrabold text-white block">Real-time Stream</span>
                                            <span className="text-[9px] text-gray-400">WebRTC Pipeline</span>
                                        </div>
                                    </div>
                                    <span className="text-xs font-black text-[#FFB000] animate-pulse">94ms Instant!</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Architecture