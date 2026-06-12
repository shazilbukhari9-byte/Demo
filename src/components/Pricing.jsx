import { CheckCircle2 } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react'







function ScrollReveal({ children, delay = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const [customMinutes, setCustomMinutes] = useState(5000);
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

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('Growth');
    const [activeTab, setActiveTab] = useState('receptionist');
    const [customMinutes, setCustomMinutes] = useState(5000);
    const [simulatedTranscripts, setSimulatedTranscripts] = useState([]);
    const simulationIntervalRef = useRef(null);
    const [isSimulating, setIsSimulating] = useState(false);

    const startSimulation = () => {
        setIsSimulating(true);
        setSimulatedTranscripts([]);

        const dialogues = simulatorDialogues[activeTab] || [];
        let currentIndex = 0;

        simulationIntervalRef.current = setInterval(() => {
            if (currentIndex < dialogues.length) {
                setSimulatedTranscripts(prev => [
                    ...prev,
                    dialogues[currentIndex]
                ]);
                currentIndex++;
            } else {
                clearInterval(simulationIntervalRef.current);
                setIsSimulating(false);
            }
        }, 2500);
    };

    const stopSimulation = () => {
        if (simulationIntervalRef.current) {
            clearInterval(simulationIntervalRef.current);
        }

        setIsSimulating(false);
        setSimulatedTranscripts([]);
    };

    const getCustomRate = () => {
        if (customMinutes < 1000) return 12;
        if (customMinutes < 5000) return 11;
        return 10;
    };

    const calculateCustomPrice = () => {
        const rate = getCustomRate();
        return customMinutes * rate + 400;
    };

    useEffect(() => {
        return () => {
            if (simulationIntervalRef.current) {
                clearInterval(simulationIntervalRef.current);
            }
        };
    }, [activeTab]);

    return (
        <div>
            <section id="pricing" className="py-20 bg-gray-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center max-w-xl mx-auto mb-16">
                            <span className="text-[10px] font-black text-black tracking-widest uppercase">Transparent Pricing</span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-black">
                                No Contracts, <span className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent">GST Invoice Included</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    {/* Pricing Plans Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

                        {/* Plan 1: Starter */}
                        <ScrollReveal delay={100}>
                            <div
                                onClick={() => setSelectedPlan('Starter')}
                                className={`rounded-2xl border bg-white p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-500 shadow-sm cursor-pointer ${selectedPlan === 'Starter' ? 'border-[#FFB000] ring-4 ring-[#FFB000]/20 scale-105' : 'border-gray-200 hover:border-black/30 hover:scale-[1.02]'
                                    }`}
                            >
                                <div>
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 block mb-2">Starter</span>
                                    <p className="text-3xl font-black text-black">₹3,300<span className="text-xs font-normal text-gray-500">/mo</span></p>
                                    <div className="w-full bg-gray-100 h-px my-4" />
                                    <ul className="space-y-3 text-[11px] text-gray-600 font-bold">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> Rate: ₹12/min</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> 250 included minutes</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> 2 AI voice agents</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> 1 Phone number</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> 3 Concurrent calls</li>
                                    </ul>
                                </div>
                                <button
                                    className="w-full py-2.5 rounded-xl mt-6 font-extrabold text-[10px] uppercase tracking-wider border border-gray-200 hover:border-black text-black transition-all bg-gray-50"
                                >
                                    Choose Starter
                                </button>
                            </div>
                        </ScrollReveal>

                        {/* Plan 2: Growth (Most Popular) */}
                        <ScrollReveal delay={200}>
                            <div
                                onClick={() => setSelectedPlan('Growth')}
                                className={`rounded-2xl border bg-white p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-500 shadow-md cursor-pointer ${selectedPlan === 'Growth' ? 'border-black ring-4 ring-black/10 scale-105' : 'border-[#FFB000] hover:scale-105'
                                    }`}
                            >
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white font-black text-[9px] px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                                    Most Popular
                                </span>
                                <div>
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFB000] block mb-2">Growth</span>
                                    <p className="text-3xl font-black text-black">₹8,800<span className="text-xs font-normal text-gray-500">/mo</span></p>
                                    <div className="w-full bg-gray-100 h-px my-4" />
                                    <ul className="space-y-3 text-[11px] text-gray-600 font-bold">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-black" /> Rate: ₹11/min</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-black" /> 800 included minutes</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-black" /> 10 AI voice agents</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-black" /> 3 Phone numbers</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-black" /> 12 Concurrent calls</li>
                                    </ul>
                                </div>
                                <button
                                    className="w-full py-2.5 rounded-xl mt-6 font-extrabold text-[10px] uppercase tracking-wider bg-[#FFB000] hover:bg-black hover:text-white text-black transition-all"
                                >
                                    Choose Growth
                                </button>
                            </div>
                        </ScrollReveal>

                        {/* Plan 3: Scale */}
                        <ScrollReveal delay={300}>
                            <div
                                onClick={() => setSelectedPlan('Scale')}
                                className={`rounded-2xl border bg-white p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-500 shadow-sm cursor-pointer ${selectedPlan === 'Scale' ? 'border-[#FFB000] ring-4 ring-[#FFB000]/20 scale-105' : 'border-gray-200 hover:border-black/30 hover:scale-[1.02]'
                                    }`}
                            >
                                <div>
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 block mb-2">Scale</span>
                                    <p className="text-3xl font-black text-black">₹30,000<span className="text-xs font-normal text-gray-500">/mo</span></p>
                                    <div className="w-full bg-gray-100 h-px my-4" />
                                    <ul className="space-y-3 text-[11px] text-gray-600 font-bold">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> Rate: ₹10/min</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> 3,000 included minutes</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> Unlimited AI agents</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> 15 Phone numbers</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFB000]" /> 40 Concurrent calls</li>
                                    </ul>
                                </div>
                                <button
                                    className="w-full py-2.5 rounded-xl mt-6 font-extrabold text-[10px] uppercase tracking-wider border border-gray-200 hover:border-black text-black transition-all bg-gray-50"
                                >
                                    Choose Scale
                                </button>
                            </div>
                        </ScrollReveal>

                    </div>



                    {/* Interactive Calculator Slider Block */}
                    <ScrollReveal delay={100}>
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 max-w-3xl mx-auto shadow-sm hover:shadow-xl transition-all duration-500">
                            <h3 className="text-base font-extrabold text-black mb-1">Estimate Custom Monthly Volume</h3>
                            <p className="text-[10px] text-gray-400 mb-6 font-extrabold uppercase tracking-wider">Drag the slider to adjust expected calling minutes</p>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between text-sm font-extrabold">
                                    <span className="text-gray-500 uppercase tracking-wider text-xs">Total Calling Minutes</span>
                                    <span className="text-black text-sm bg-[#FFB000]/10 border border-[#FFB000]/30 px-3 py-1 rounded-md animate-pulse">{customMinutes.toLocaleString()} Min / mo</span>
                                </div>

                                <input
                                    type="range"
                                    min="500"
                                    max="20000"
                                    step="500"
                                    value={customMinutes}
                                    onChange={(e) => setCustomMinutes(Number(e.target.value))}
                                    className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black transition-all"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100 text-center">
                                    <div className="transition-all duration-300 transform hover:scale-105">
                                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-extrabold">Effective Rate</span>
                                        <span className="text-lg font-black text-black">₹{getCustomRate()}/min</span>
                                    </div>
                                    <div className="transition-all duration-300 transform hover:scale-105">
                                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-extrabold">GST Invoice</span>
                                        <span className="text-lg font-black text-orange-500 animate-pulse">Included</span>
                                    </div>
                                    <div className="transition-all duration-300 transform hover:scale-105">
                                        <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-extrabold">Estimated Cost</span>
                                        <span className="text-lg font-black text-black">₹{calculateCustomPrice().toLocaleString()}/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}

export default Pricing