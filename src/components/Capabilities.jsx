import React, { useEffect, useRef, useState } from 'react'
import { Sparkles,Headphones, Clock ,Languages, TrendingUp} from 'lucide-react';



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

const Capabilities = () => {
    return (
        <div>
            <section id="capabilities" className="py-20 bg-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[9px] font-extrabold text-black uppercase tracking-wider mb-4 animate-float">
                                <Sparkles className="w-3.5 h-3.5 text-[#FFB000]" />
                                <span>Sleek Capabilities</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
                                Everything Needed To <span className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent">Dominate Voice Calls</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Bento Box Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Box 1: AI Receptionist */}
                        <ScrollReveal delay={100}>
                            <div className="relative overflow-hidden md:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-black/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group">
                                <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-black/[0.02] -left-1/4 group-hover:animate-shine pointer-events-none" />
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-[#FFB000]/10 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-500">
                                        <Headphones className="w-5 h-5 text-black group-hover:text-[#FFB000] transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-extrabold text-black mb-2">AI Receptionist</h3>
                                    <p className="text-xs text-gray-500 font-bold leading-relaxed mb-6">
                                        Calls ko answer karein, customers qualify karein, aur bookings directly manage karein 15+ Indian languages me.
                                    </p>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex items-center gap-6 text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5 hover:scale-105 transition-transform"><Clock className="w-3.5 h-3.5 text-black" /> 24/7 Support</span>
                                    <span className="flex items-center gap-1.5 hover:scale-105 transition-transform"><Languages className="w-3.5 h-3.5 text-black" /> 15+ languages</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Box 2: Latency stats */}
                        <ScrollReveal delay={100}>
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-black/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group">
                                <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-black/[0.02] -left-1/4 group-hover:animate-shine pointer-events-none" />
                                <div className='w-full h-31'>
                                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                                        <Clock className="w-5 h-5 text-black animate-spin-slow" />
                                    </div>
                                    <h3 className="text-base font-extrabold text-black mb-2">94ms Performance</h3>
                                    <p className="text-[11px] text-gray-400 font-bold">Incredibly fast, near zero robotic lag delay.</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-6">
                                    <div className="flex justify-between text-[10px] font-extrabold text-gray-500 mb-2">
                                        <span>Demo Latency</span>
                                        <span className="text-[#FFB000] animate-pulse">94ms</span>
                                    </div>
                                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-black h-full w-[12%] animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Box 3: Outbound */}
                        <ScrollReveal delay={100}>
                            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-black/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group">
                                <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-black/[0.02] -left-1/4 group-hover:animate-shine pointer-events-none" />
                                <div className='w-full h-52'>
                                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12">
                                        <TrendingUp className="w-5 h-5 text-black" />
                                    </div>
                                    <h3 className="text-base font-extrabold text-black mb-2">Outbound Campaigns</h3>
                                    <p className="text-[11px] text-gray-400 font-bold">Automated payment links, renewals, and EMI feedback followups.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Capabilities