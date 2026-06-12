import React, { useState } from 'react'
import { Sparkles, CheckCircle2, ArrowRight, Volume2 } from 'lucide-react';
import { Typewriter } from "@/components/ui/typewriter-text"


const Hero = () => {
    const [isSimulating, setIsSimulating] = useState(false);
    return (
        <>
            <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Hero: Value Proposition */}
                        <div className="lg:col-span-7 space-y-8 text-left animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB000]/10 border border-[#FFB000]/30 text-[10px] font-bold text-black uppercase tracking-wider animate-float">
                                <Sparkles className="w-3.5 h-3.5 text-[#FFB000] animate-spin-slow" />
                                <span>India-First Conversational Voice AI Platform</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-black">
                                AI Voice Agents That <br />
                                <Typewriter
                                    text={["Actually Sound Human"]}
                                    speed={100}
                                    loop={true}
                                    className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent"
                                />
                            </h1>

                            <p className="text-gray-600 text-base max-w-xl leading-relaxed">
                                Run seamless telephone conversations in <span className="text-black font-extrabold border-b-2 border-[#FFB000]">15+ Indian languages</span> with ultra-low <span className="text-black font-extrabold">94ms live latency</span>.
                            </p>

                            {/* Quick Specs Bullet List */}
                            <div className="grid grid-cols-2 gap-4 max-w-lg pt-2">
                                {[
                                    'Automatic Dialect Detection',
                                    'Carrier-grade Indian PSTN',
                                    'TRAI & DPDP Compliant',
                                    'Per-Second Billing'
                                ].map((spec, index) => (
                                    <div key={index} className="flex items-center gap-2.5 hover:translate-x-1.5 transition-all duration-300 cursor-default">
                                        <CheckCircle2 className="w-4 h-4 text-[#FFB000] transition-transform duration-300 hover:scale-125" />
                                        <span className="text-xs text-gray-700 font-bold uppercase tracking-wider">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Blocks */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button
                                    onClick={() => setIsDemoModalOpen(true)}
                                    className="relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black text-white font-bold hover:bg-[#FFB000] hover:text-black transition-all duration-500 hover:shadow-lg hover:scale-105 active:scale-95 group overflow-hidden"
                                >
                                    <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-white/10 -left-1/4 group-hover:animate-shine pointer-events-none" />
                                    <span className="text-xs uppercase tracking-wider">Build Your Voice Agent</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                                </button>
                                <a
                                    href="#live-sandbox"
                                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gray-50 border border-black/[0.08] hover:bg-gray-100 transition-all duration-300 font-bold text-xs uppercase tracking-wider text-black hover:scale-105 active:scale-95"
                                >
                                    <Volume2 className="w-4 h-4 text-[#FFB000] animate-pulse" />
                                    <span>Test Live Audio Demo</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Hero: Live Telephone & Waveform Sandbox */}
                        <div id="live-sandbox" className="lg:col-span-5 relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#FFB000] to-orange-400 rounded-3xl blur opacity-15 group-hover:opacity-30 transition duration-1000 group-hover:duration-300" />

                            <div className="relative rounded-3xl">

                                {/* Header of Sandbox */}
                                {/* <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]"></div> */}
                                {/* Audio Player Bar */}
                                <div className="w-full mb-6 flex items-center gap-4 bg-gradient-to-r from-[#FFB000] bg-[#FDFDFD] to-orange-400 rounded-2xl border border-[#FFB000] bg-[#FFB000] px-5 py-7">

                                    {/* Play Button */}
                                    <button
                                        onClick={() => setIsSimulating(!isSimulating)}
                                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#fff] cursor-pointer"
                                    >
                                        {isSimulating ? (
                                            <span className="flex gap-[3px]">
                                                <span className="h-4 w-1 rounded-sm bg-black" />
                                                <span className="h-4 w-1 rounded-sm bg-black" />
                                            </span>
                                        ) : (
                                            <span
                                                className="ml-[3px]"
                                                style={{
                                                    width: 0,
                                                    height: 0,
                                                    borderStyle: "solid",
                                                    borderWidth: "8px 0 8px 14px",
                                                    borderColor: "transparent transparent transparent #000000",
                                                }}
                                            />
                                        )}
                                    </button>

                                    {/* Center: Label + Waveform */}
                                    <div className="flex min-w-0 flex-1 flex-col gap-2">

                                        {/* Label */}
                                        <div className="flex mb-3 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#ffff] ">
                                            <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#ffff] animate-pulse " />
                                            Hear our agent in action
                                        </div>

                                        <div className="flex items-center gap-2">

                                            {/* Waveform Bars */}
                                            <div className="flex h-8 flex-1 items-center gap-[2px]">
                                                {Array.from({ length: 48 }).map((_, i) => {
                                                    const heights = [
                                                        12, 18, 28, 38, 50, 44, 32, 22,
                                                        36, 52, 60, 48, 34, 26, 40, 56,
                                                        62, 50, 38, 28, 42, 58, 64, 52,
                                                        40, 30, 44, 60, 66, 54, 42, 32,
                                                        46, 62, 56, 44, 34, 24, 38, 54,
                                                        60, 46, 36, 26, 40, 52, 32, 16
                                                    ];

                                                    return (
                                                        <div
                                                            key={i}
                                                            className={`w-[4px] rounded-sm transition-colors duration-1000 ${isSimulating
                                                                ? "bg-[#ffff]"
                                                                : "bg-[#000000]"
                                                                }`}
                                                            style={{ height: `${heights[i]}px` }}
                                                        />
                                                    );
                                                })}
                                            </div>

                                            {/* Time */}
                                            <span className="whitespace-nowrap text-[11px] text-[#000000]">
                                                0:00 / 0:14
                                            </span>

                                            {/* Volume Icon */}
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#fdffff"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero