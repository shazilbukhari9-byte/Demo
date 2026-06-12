import React, { useRef, useState, useEffect } from 'react'

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

const Comparision = () => {
    return (
        <div>
            <section id="comparison" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-xl mx-auto mb-12">
                            <span className="text-[10px] font-black text-[#FFB000] tracking-widest uppercase">Competitive Specs</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-black">
                                Why Indian Teams <span className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent">Select Demo</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={150}>
                        <div className="overflow-x-auto transition-transform duration-500 hover:scale-[1.01] hover:shadow-lg rounded-2xl">
                            <table className="w-full text-left border-collapse border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="p-4 text-[10px] font-black tracking-widest text-gray-500 uppercase">Dimension</th>
                                        <th className="p-4 text-[10px] font-extrabold text-black bg-[#FFB000]/10 uppercase tracking-widest">Demo.io</th>
                                        <th className="p-4 text-[10px] font-black tracking-widest text-gray-500 uppercase">Global Platforms</th>
                                        <th className="p-4 text-[10px] font-black tracking-widest text-gray-500 uppercase">Indian Enterprise CX</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-xs text-gray-600 font-semibold">
                                    {[
                                        { dim: 'Market Focus', demo: 'India-First (15+ Indian dialects)', global: 'Global (US-Centric model tuning)', enterprise: 'Broad enterprise CX' },
                                        { dim: 'Engine Architecture', demo: 'Single Audio-Native Model', global: 'STT + LLM + TTS pipeline lag', enterprise: 'Layered pipeline' },
                                        { dim: 'Demo Latency', demo: '94ms Live Latency', global: '600ms - 1.5s typical lag', enterprise: '400ms - 1s typical' },
                                        { dim: 'TRAI & DPDP Compliance', demo: 'Built-in standard', global: 'Not supported natively', enterprise: 'Varies (enterprise setup)' }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors duration-300">
                                            <td className="p-4 font-extrabold text-black">{row.dim}</td>
                                            <td className="p-4 font-bold text-black bg-[#FFB000]/5">{row.demo}</td>
                                            <td className="p-4 text-gray-400">{row.global}</td>
                                            <td className="p-4 text-gray-400">{row.enterprise}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}

export default Comparision