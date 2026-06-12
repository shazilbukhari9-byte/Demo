import React, { useState, useRef, useEffect } from 'react'
import { ChevronRight, ArrowRight } from 'lucide-react';
import { X } from 'lucide-react';

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

const industries = [
    { id: 'bpo', name: 'BPO & Call Centers', desc: 'Inbound queues aur outbound campaigns ko automatically automate karein.', tag: 'Replace Tier-1 Agents' },
    { id: 'bfsi', name: 'BFSI & Fintech', desc: 'Lead qualification, loan follow-ups, EMI reminders regional dialects me automate karein.', tag: 'Secure & Compliant' },
    { id: 'realestate', name: 'Real Estate', desc: 'Property leads filter karein, automatic site visits book karein aur quick follow-up lein.', tag: 'Instant Lead Conversion' },
    { id: 'ecommerce', name: 'E-Commerce & D2C', desc: 'Order status, automatic delivery updates aur exchange options 24/7 resolve karein.', tag: 'Scale Order Volume' },
    { id: 'automotive', name: 'Automotive', desc: 'Service booking notifications aur test-drive reminders automatic handle karein.', tag: 'Boost Bookings' },
    { id: 'qsr', name: 'Restaurants & QSR', desc: 'Direct table reservations, delivery queries aur table booking coordinate karein.', tag: 'Zero Wait Reservation' }
];

const Industries = () => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [industryActiveTab, setIndustryActiveTab] = useState('bpo');
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-xl mx-auto mb-12">
                            <span className="text-[10px] font-black text-[#FFB000] tracking-widest uppercase">Target Use Cases</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-black">
                                Built For <span className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent"><u>Your Industry</u></span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Sidebar selection tabs */}
                        <div className="lg:col-span-4 space-y-2">
                            {industries.map((ind, idx) => (
                                <ScrollReveal key={ind.id} delay={idx * 50}>
                                    <button
                                        onClick={() => setIndustryActiveTab(ind.id)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-500 flex items-center justify-between transform ${industryActiveTab === ind.id
                                            ? 'bg-black border-black text-white translate-x-3 shadow-lg scale-[1.02]'
                                            : 'bg-transparent border-gray-200 text-gray-500 hover:text-black hover:bg-gray-50 hover:translate-x-1'
                                            }`}
                                    >
                                        <span className="text-xs font-extrabold uppercase tracking-wider">{ind.name}</span>
                                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${industryActiveTab === ind.id ? 'translate-x-1.5 text-[#FFB000]' : 'text-gray-400'}`} />
                                    </button>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Display pane */}
                        <div className="lg:col-span-8">
                            <ScrollReveal delay={150}>
                                <div className="relative overflow-hidden bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full min-h-[320px] transition-all duration-500 hover:shadow-xl hover:border-black/20 group">
                                    <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-white/40 -left-1/4 group-hover:animate-shine pointer-events-none" />
                                    <div className="space-y-4">
                                        <span className="inline-block px-3 py-1 rounded bg-black text-white text-[9px] font-extrabold uppercase tracking-widest animate-pulse">
                                            {industries.find(i => i.id === industryActiveTab)?.tag}
                                        </span>
                                        <h3 className="text-xl font-black text-black">
                                            {industries.find(i => i.id === industryActiveTab)?.name} Automation
                                        </h3>
                                        <p className="text-gray-600 text-xs font-bold leading-relaxed animate-fade-in">
                                            {industries.find(i => i.id === industryActiveTab)?.desc}
                                        </p>
                                    </div>

                                    <div className="border-t border-gray-200 pt-6 mt-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                                        <div className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                                            ⚡ Ready-to-use dialer templates available.
                                        </div>
                                        <button
                                            onClick={() => setIsDemoModalOpen(true)}

                                            className="flex items-center gap-1.5 text-xs text-black font-extrabold hover:underline hover:scale-105 transition-all duration-300 group/btn"
                                        >
                                            <span>Request Live Setup</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-[#FFB000] transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                                        </button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {isDemoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
                    <div className="relative w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-2xl transition-all duration-500 scale-100 animate-scale-up">
                        <button
                            onClick={() => setIsDemoModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h3 className="text-lg font-black text-black mb-1">Book Your Demo Agent</h3>
                        <p className="text-[11px] text-gray-400 mb-6 font-bold uppercase tracking-wider">Schedule a 15-minute live config session</p>

                        <form onSubmit={(e) => { e.preventDefault(); setIsDemoModalOpen(false); }} className="space-y-4">
                            <div>
                                <label className="text-[9px] uppercase tracking-wider text-gray-400 font-extrabold block mb-1">Company Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Acme FinTech India"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black font-semibold transition-all duration-300 focus:ring-2 focus:ring-[#FFB000]/20"
                                />
                            </div>

                            <div>
                                <label className="text-[9px] uppercase tracking-wider text-gray-400 font-extrabold block mb-1">Work Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@company.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black font-semibold transition-all duration-300 focus:ring-2 focus:ring-[#FFB000]/20"
                                />
                            </div>

                            <div>
                                <label className="text-[9px] uppercase tracking-wider text-gray-400 font-extrabold block mb-1">Select Core Language</label>
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black font-semibold transition-all focus:ring-2 focus:ring-[#FFB000]/20">
                                    <option>Hinglish (Hindi + English)</option>
                                    <option>Hindi</option>
                                    <option>Tamil</option>
                                    <option>Telugu</option>
                                    <option>Kannada</option>
                                    <option>Bengali</option>
                                    <option>Multiple (Dialect Switching)</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[9px] uppercase tracking-wider text-gray-400 font-extrabold block mb-1">Estimated Monthly Minutes</label>
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black font-semibold transition-all focus:ring-2 focus:ring-[#FFB000]/20">
                                    <option>Under 1,000 mins/mo</option>
                                    <option>1,000 - 10,000 mins/mo</option>
                                    <option>10,000 - 50,000 mins/mo</option>
                                    <option>Over 50,000 mins/mo</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4.5 rounded-xl bg-black text-white hover:bg-[#FFB000] hover:text-black font-extrabold text-xs tracking-wider uppercase shadow-md transition-all duration-300 transform hover:scale-[1.01]"
                            >
                                Schedule Setup Config
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>


    )
}

export default Industries