import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Volume2,
  Play,
  Pause,
  Layers,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  Languages,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Cpu,
  Database,
  Sliders,
  X,
  MessageSquare,
  Lock,
  Headphones
} from 'lucide-react';
//21stdev import's

import ButtonSocialIconDemo from "@/components/ui/social-icon";
import { Component } from './components/timeline-component';
import { Logos3 } from "./components/logos3"
import { Typewriter } from "@/components/ui/typewriter-text"
import { Text_03 } from "@/components/ui/wave-text"
import { TextEffect } from "@/components/ui/text-effect";


const demoData = {
  heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Swiggy",
      image: "https://play-lh.googleusercontent.com/FJ5W5ygiN-DYfpd2-3LqyN5F-OxDtQ7z_9v5nAeD4vOrN8kQitoOwULactKgKvktXowVEM491wE-unmGmnt8OWM",
      className: "h-13 w-auto",
    },
    {
      id: "logo-2",
      description: "Bajaj",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bajaj_Auto_Ltd_logo.svg/1280px-Bajaj_Auto_Ltd_logo.svg.png",
      className: "h-13 w-auto",
    },
    {
      id: "logo-3",
      description: "hdfc",
      image: "https://assets.upstox.com/content/assets/images/cms/2024419/HDFC-Bank-emblem.png",
      className: "h-15 w-auto",
    },
    {
      id: "logo-4",
      description: "infosys",
      image: "https://markettimes.in/wp-content/uploads/2025/08/infosys-logo.png.original.png ",
      className: "h-15 w-auto",
    },
    {
      id: "logo-5",
      description: "makemytrip",
      image: "https://play-lh.googleusercontent.com/19I7zjhAAAud9AztLiIxD1MYVdHusoeaW2-7Fx2FUJvcVZBbUBcGKjBBVPsHkFBLWMs",
      className: "h-15 w-auto",
    },
    {
      id: "logo-6",
      description: "nykaa",
      image: "https://thecapitalmall.com/wp-content/uploads/2023/10/nykaa-Capital-Mall.png",
      className: "h-10 w-auto",
    },
    {
      id: "logo-7",
      description: "Phonepe",
      image: "https://play-lh.googleusercontent.com/ARGoCZk-5QCKPpyTsGhn1WahhPbVMa95T1U7clwnI8gjtW-YNY96rAANqFkuENbU35IbYF2Gjg2UjZXA495x0A",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Policy",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_nSJPRNZHyvKFJXAk_IlQ3HaNzs5n-cE28lgZR6nMkE8Q=s900-c-k-c0x00ffffff-no-rj",
      className: "h-12 w-auto",
    },
    {
      id: "logo-9",
      description: "TCS",
      image: "https://give.do/static/img/logos/19WJ/9aad65c4-4ada-437d-a056-cd099c1e88ef.png",
      className: "h-10 w-auto",
    },
  ],
};


// Highly polished, authentic inline SVG vector approximations of the 12 specified brands
// const BrandLogos = {
//   TCS: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
//       <path d="M10 6h12v4H16v14h-5V10H5V6h5zm20 0h5l7 10 7-10h5v18h-4V10l-6 8h-2l-6-7v12h-4V6zm32 9c0-4.5 3.5-8 8-8s8 3.5 8 8-3.5 8-8 8-8-3.5-8-8zm12 0c0-2.5-1.8-4.5-4-4s-4 2-4 4.5 1.8 4.5 4 4.5 4-2 4-4.5zm10-9h4l5 7 5-7h4v18h-4V10l-4 6h-2l-4-6v12h-4V6z" fill="#004B87" />
//       <circle cx="104" cy="15" r="4.5" fill="#FFB000" />
//     </svg>
//   ),
//   Infosys: () => (
//     <svg className="h-5 w-auto" viewBox="0 0 100 25" xmlns="http://www.w3.org/2000/svg">
//       <path d="M4 2h4v20H4V2zm10 4c0-1.8 1.5-3 3-3h7v4h-7v4h7v4h-7v8h-4V6zm18 5c0-3.5 3-6 7-6s7 2.5 7 6v11h-4V11c0-1.8-1.5-3-3-3s-3 1.5-3 3v8h-4V11zm20-7h4v20h-4V4zm10 7c0-3.5 3-6 7-6s7 2.5 7 6-3 6-7 6-7-2.5-7-6zm10 0c0-1.8-1.5-3-3-3s-3 1.5-3 3 1.5 3 3 3 3-1.5 3-3z" fill="#007CC3" />
//     </svg>
//   ),
//   HDFC: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 130 30" xmlns="http://www.w3.org/2000/svg">
//       <rect width="130" height="30" rx="4" fill="#003366" />
//       <rect x="6" y="5" width="20" height="20" fill="#E02020" />
//       <rect x="10" y="9" width="12" height="12" fill="#FFFFFF" />
//       <text x="32" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF" letterSpacing="0.8">HDFC BANK</text>
//     </svg>
//   ),
//   Bajaj: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 140 30" xmlns="http://www.w3.org/2000/svg">
//       <path d="M10 6h4l5 10 5-10h4v18h-4V10l-4 8h-2l-4-8v12h-4V6z" fill="#005A9C" />
//       <path d="M35 15 L43 6 L51 15 L47 15 L43 11 L39 15 Z" fill="#FFB000" />
//       <text x="56" y="19" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#005A9C" letterSpacing="0.5">BAJAJ FINSERV</text>
//     </svg>
//   ),
//   Swiggy: () => (
//     <svg className="h-7 w-auto" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
//       <path d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.7 6.1 9.2L12 28l3.9-6.8C19.5 19.7 22 16.1 22 12c0-5.5-4.5-10-10-10zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#FC8019" />
//       <text x="28" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="#1C1C1C" letterSpacing="0.5">SWIGGY</text>
//     </svg>
//   ),
//   Zomato: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg">
//       <rect width="110" height="30" rx="6" fill="#E23744" />
//       <path d="M15 15c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6zm3 0c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3z" fill="#FFFFFF" />
//       <text x="36" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="#FFFFFF">zomato</text>
//     </svg>
//   ),
//   Nykaa: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 90 30" xmlns="http://www.w3.org/2000/svg">
//       <text x="5" y="22" fontFamily="Georgia, serif" fontWeight="900" fontSize="19" fill="#FC2779" italic="true" letterSpacing="1">NYKAA</text>
//     </svg>
//   ),
//   PolicyBazaar: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
//       <rect x="4" y="5" width="20" height="20" rx="3" fill="#0D52AF" />
//       <circle cx="14" cy="15" r="5" fill="#FFB000" />
//       <text x="30" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="#0D52AF">policybazaar</text>
//     </svg>
//   ),
//   PhonePe: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg">
//       <rect width="110" height="30" rx="6" fill="#5F259F" />
//       <circle cx="18" cy="15" r="7" fill="#FFFFFF" />
//       <path d="M16 11h2.5c1.2 0 2 .8 2 1.8s-.8 1.8-2 1.8h-2.5v3h-1.5v-6.6zm1.5 2.5h1c.4 0 .7-.1.7-.4s-.3-.4-.7-.4h-1v.8z" fill="#5F259F" />
//       <text x="32" y="19" fontFamily="sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF">PhonePe</text>
//     </svg>
//   ),
//   MakeMyTrip: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="14" cy="15" r="8" fill="#D61F27" />
//       <circle cx="24" cy="15" r="8" fill="#144682" />
//       <text x="38" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#144682" letterSpacing="0.2">make<span className="text-[#D61F27]">my</span>trip</text>
//     </svg>
//   ),
//   UrbanCompany: () => (
//     <svg className="h-6 w-auto" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
//       <rect x="5" y="7" width="16" height="16" rx="2" fill="#000000" />
//       <text x="28" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="13" fill="#000000" letterSpacing="0.5">URBAN COMPANY</text>
//     </svg>
//   ),
//   Meesho: () => (
//     <svg className="h-7 w-auto" viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg">
//       <text x="5" y="21" fontFamily="sans-serif" fontWeight="900" fontSize="19" fill="#AD1457" letterSpacing="-0.5">meesho</text>
//       <circle cx="84" cy="15" r="4.5" fill="#FFB000" />
//     </svg>
//   )
// };

// Industry automations
const industries = [
  { id: 'bpo', name: 'BPO & Call Centers', desc: 'Inbound queues aur outbound campaigns ko automatically automate karein.', tag: 'Replace Tier-1 Agents' },
  { id: 'bfsi', name: 'BFSI & Fintech', desc: 'Lead qualification, loan follow-ups, EMI reminders regional dialects me automate karein.', tag: 'Secure & Compliant' },
  { id: 'realestate', name: 'Real Estate', desc: 'Property leads filter karein, automatic site visits book karein aur quick follow-up lein.', tag: 'Instant Lead Conversion' },
  { id: 'ecommerce', name: 'E-Commerce & D2C', desc: 'Order status, automatic delivery updates aur exchange options 24/7 resolve karein.', tag: 'Scale Order Volume' },
  { id: 'automotive', name: 'Automotive', desc: 'Service booking notifications aur test-drive reminders automatic handle karein.', tag: 'Boost Bookings' },
  { id: 'qsr', name: 'Restaurants & QSR', desc: 'Direct table reservations, delivery queries aur table booking coordinate karein.', tag: 'Zero Wait Reservation' }
];

// Dialect Options & Simulated Conversational Prompts
const simulatorDialogues = {
  receptionist: [
    { speaker: 'caller', text: 'Hello, mujhe ek table book karni thi aaj shaam ke liye.', time: '0s' },
    { speaker: 'ai', text: 'Bilkul! Main aapki help kar sakti hoon. Kitne baje ki table book karni hai aur kitne log honge?', time: '94ms', highlight: true },
    { speaker: 'caller', text: '7 baje ki kar do, 4 log honge. Family dinner hai.', time: '2.5s' },
    { speaker: 'ai', text: 'Perfect! Aaj shaam 7 baje, 4 logon ke liye table confirm ho gayi hai. Details bhej rahi hoon.', time: '94ms', highlight: true }
  ],
  emi: [
    { speaker: 'ai', text: 'Namaskar! Main Bajaj Finserv se bol rahi hoon. Kya meri baat Amit ji se ho rahi hai?', time: '0s', highlight: true },
    { speaker: 'caller', text: 'Haan ji, main hi bol raha hoon. Bolo kya hua?', time: '1.8s' },
    { speaker: 'ai', text: 'Amit ji, aapka EMI payment clear nahi hua hai. Agar aap chahein toh main link send kar sakti hoon?', time: '94ms', highlight: true },
    { speaker: 'caller', text: 'Achha theek hai, link bhej do abhi kar deta hoon pay.', time: '4.2s' },
    { speaker: 'ai', text: 'Shukriya! Link aapke mobile par bhej diya gaya hai. Have a wonderful day!', time: '94ms', highlight: true }
  ],
  support: [
    { speaker: 'caller', text: 'I received the wrong size for my order. Can I exchange it?', time: '0s' },
    { speaker: 'ai', text: 'I completely understand. I can initiate a size exchange right away. Would you prefer Size M or L?', time: '94ms', highlight: true },
    { speaker: 'caller', text: 'Size M preferred. Delivery pin code is 400001.', time: '2.9s' },
    { speaker: 'ai', text: 'Got it. Size M exchange request generated. Delivery boy will pick up the current item within 24 hours!', time: '94ms', highlight: true }
  ]
};

const languages = [
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'hinglish', name: 'Hinglish', native: 'Hindi + English' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' }
];

// Reusable Scroll Reveal Animation Wrapper
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

export default function App() {
  const [activeTab, setActiveTab] = useState('receptionist');
  const [selectedLanguage, setSelectedLanguage] = useState('hinglish');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedTranscripts, setSimulatedTranscripts] = useState([]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth');
  const [customMinutes, setCustomMinutes] = useState(5000);
  const [industryActiveTab, setIndustryActiveTab] = useState('bpo');
  const [copiedText, setCopiedText] = useState(false);

  const simulationIntervalRef = useRef(null);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulatedTranscripts([]);

    if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);

    const dialogues = simulatorDialogues[activeTab] || [];
    let currentIndex = 0;

    simulationIntervalRef.current = setInterval(() => {
      if (currentIndex < dialogues.length) {
        setSimulatedTranscripts(prev => [...prev, dialogues[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(simulationIntervalRef.current);
        setIsSimulating(false);
      }
    }, 2500);
  };

  const stopSimulation = () => {
    if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
    setIsSimulating(false);
    setSimulatedTranscripts([]);
  };

  useEffect(() => {
    return () => {
      if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
    };
  }, [activeTab]);

  const getCustomRate = () => {
    if (customMinutes < 1000) return 12;
    if (customMinutes < 5000) return 11;
    return 10;
  };

  const calculateCustomPrice = () => {
    const rate = getCustomRate();
    return (customMinutes * rate) + 400;
  };

  const handleCopyLink = () => {
    document.execCommand('copy');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <>
      <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased selection:bg-[#FFB000] selection:text-black">

        {/* Dynamic ambient glowing circles */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#FFB000]/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-orange-400/5 rounded-full filter blur-[120px] pointer-events-none" />

        {/* Header / Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/85 border-b border-black/[0.04] transition-all duration-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-black to-gray-700 p-[1.5px] shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <Phone className="w-5 h-5 text-black" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FFB000] border border-white"></span>
                  </span>
                </div>
                <div>
                  <span className="text-xl font-extrabold tracking-tight text-black">
                    Demo<span className="text-[#FFB000] transition-colors duration-300 group-hover:text-black">.io</span>
                  </span>
                  <span className="block text-[9px] text-[#FFB000] tracking-[0.2em] font-bold uppercase transition-all duration-300 group-hover:translate-x-1">Audio-Native AI</span>
                </div>
              </div>

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-8">
                {['how-it-works', 'capabilities', 'pricing', 'comparison'].map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    className="relative text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-all duration-300 hover:scale-105 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFB000] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.replace('-', ' ')}
                  </a>
                ))}
              </div>

              {/* Header Right Action */}
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] transform hover:scale-105 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-pulse" />
                  <span className="text-[10px] text-gray-700 font-bold uppercase tracking-wider">94ms Live Call Latency</span>
                </div>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-black text-white font-bold text-xs uppercase tracking-wider transition-all duration-500 hover:bg-[#FFB000] hover:text-black active:scale-95 shadow-md hover:shadow-orange-500/10"
                >
                  <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-white/20 -left-1/4 group-hover:animate-shine pointer-events-none" />
                  <span className="relative z-10">Book Free Demo</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
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

        {/* Trusted By Loop - Seamless Continuous Animation with exact Brand SVGs (12 Brands duplicated for endless loop) */}
        <section className="py-12 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[10px] font-black tracking-[0.25em] text-gray-400 uppercase mb-8">
              TRUSTED BY 500+ INDIAN ENTERPRISES & BPOS
            </p>
            <div className="w-full py-4 ">
              <Logos3 {...demoData} />;
            </div>
          </div>
        </section>

        {/* Architecture Section */}
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

        {/* Capabilities Section / Bento Grid */}
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

        {/* Industries Served */}
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

        {/* Integration Ecosystem */}
        <section id="integrations" className="py-20 bg-gray-50 border-t border-b border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-[10px] font-extrabold text-black tracking-widest uppercase">Ecosystem Synchronization</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
                    200+ Integrations With <span className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent">Tools You Already Use</span>
                  </h2>

                  <p className="text-gray-500 text-xs font-bold leading-relaxed">
                    Seamlessly trigger calls from your CRM, pull consumer details, record customer interactions, and update pipeline databases instantly.
                  </p>

                  {/* Integration tags badge container */}
                  <div className="flex flex-wrap gap-1 ">
                    <ButtonSocialIconDemo />
                  </div>
                </div>
              </ScrollReveal>

              {/* Graphic Showcase Container */}
              <ScrollReveal delay={200}>
                <div>
                  {/* Graphic Flow animation */}
                  <div className="space-y-4">
                    <Component />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Comparison Matrix Section */}
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

        {/* Pricing and Usage Calculator Section */}
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

        {/* Deploy Now / Footer CTA Block */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFB000]/5 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black ">
                Ready to Go Live in <br/>
                <span className="text-black border-b-4 border-[#FFB000] hover:border-black transition-all duration-500">
                   under 10 minutes?
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-gray-500 max-w-xl mx-auto text-xs font-bold leading-relaxed">
                Build your conversational assistant visually, verify behaviors inside the sandbox, provision Indian DIDs, and optimize campaign metrics.
              </p>
              
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="relative overflow-hidden px-8 py-3.5 rounded-xl bg-black text-white hover:bg-[#FFB000] hover:text-black font-extrabold text-xs uppercase tracking-wider hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-500 group/endbtn"
                >
                  <span className="absolute inset-0 w-1/2 h-full transform -skew-x-12 bg-white/20 -left-1/4 group-hover/endbtn:animate-shine pointer-events-none" />
                  <span>Start Free Trial</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-8 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  {copiedText ? 'Copied Link!' : 'Share Platform'}
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer Details */}
        <footer className="bg-white py-12 border-t border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-black font-black">Demo<span className="text-[#FFB000]">.io</span></span>
              <span>· All Rights Reserved © 2026. Made for India-first businesses.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black transition-all duration-300 hover:translate-y-[-1px]">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-all duration-300 hover:translate-y-[-1px]">Terms of Service</a>
              <a href="#" className="hover:text-black transition-all duration-300 hover:translate-y-[-1px]">TRAI Compliance Audit</a>
              <a href="#" className="hover:text-black transition-all duration-300 hover:translate-y-[-1px]">DPDP Localization</a>
            </div>
          </div>
        </footer>

        {/* Booking Demo Dialog Modal */}
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
    </>
  );
}