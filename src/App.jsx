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
  BarChart3, 
  Users, 
  Cpu, 
  Smartphone, 
  Briefcase, 
  Database, 
  Sliders, 
  X, 
  MessageSquare,
  Building,
  DollarSign,
  Heart,
  Globe2,
  Lock,
  Headphones
} from 'lucide-react';

// Sample Brand Logos for the "Trusted by" Carousel
const brandLogos = [
  { name: 'TCS' },
  { name: 'Infosys' },
  { name: 'HDFC Bank' },
  { name: 'Bajaj Finserv' },
  { name: 'Swiggy' },
  { name: 'Zomato' },
  { name: 'Nykaa' },
  { name: 'PolicyBazaar' },
  { name: 'PhonePe' },
  { name: 'MakeMyTrip' },
  { name: 'Urban Company' },
  { name: 'Meesho' }
];

// Industry automations from the Doc
const industries = [
  { id: 'bpo', name: 'BPO & Call Centers', desc: 'Automate inbound queues and outbound campaigns and cut cost-per-call across Indian languages.', tag: 'Replace Tier-1 Agents' },
  { id: 'bfsi', name: 'BFSI & Fintech', desc: 'Lead qualification, loan follow-ups, EMI reminders, and insurance renewals in Hindi and regional languages.', tag: 'Secure & Compliant' },
  { id: 'realestate', name: 'Real Estate', desc: 'Qualify property leads 24/7, book site visits, and follow up in the caller\'s preferred language.', tag: 'Instant Lead Conversion' },
  { id: 'ecommerce', name: 'E-Commerce & D2C', desc: 'Order updates, returns, and post-purchase upsells, 24x7 with zero wait time.', tag: 'Scale Order Volume' },
  { id: 'automotive', name: 'Automotive', desc: 'Service scheduling, test-drive follow-ups, and EMI reminders for dealerships.', tag: 'Boost Bookings' },
  { id: 'qsr', name: 'Restaurants & QSR', desc: 'Table reservations, delivery status, and feedback calls for restaurant chains.', tag: 'Zero Wait Reservation' }
];

// Dialect Options & Simulated Conversational Prompts
const simulatorDialogues = {
  receptionist: [
    { speaker: 'caller', text: 'Hello, mujhe ek table book karni thi aaj shaam ke liye.', time: '0s' },
    { speaker: 'ai', text: 'Bilkul! Main aapki help kar sakti hoon. Kitne baje ki table book karni hai aur kitne log honge?', time: '94ms', highlight: true },
    { speaker: 'caller', text: '7 baje ki kar do, 4 log honge. Family dinner hai.', time: '2.5s' },
    { speaker: 'ai', text: 'Perfect! Aaj shaam 7 baje, 4 logon ke liye table confirm ho gayi hai. Main details WhatsApp pe bhej rahi hoon.', time: '94ms', highlight: true }
  ],
  emi: [
    { speaker: 'ai', text: 'Namaskar! Main Bajaj Finserv se bol rahi hoon. Kya meri baat Amit ji se ho rahi hai?', time: '0s', highlight: true },
    { speaker: 'caller', text: 'Haan ji, main hi bol raha hoon. Bolo kya hua?', time: '1.8s' },
    { speaker: 'ai', text: 'Amit ji, aapka EMI payment clear nahi hua hai. Agar aap chahein toh main isi call pe Razorpay link send kar sakti hoon?', time: '94ms', highlight: true },
    { speaker: 'caller', text: 'Achha theek hai, link bhej do abhi kar deta hoon pay.', time: '4.2s' },
    { speaker: 'ai', text: 'Shukriya! Link aapke mobile par bhej diya gaya hai. Have a wonderful day!', time: '94ms', highlight: true }
  ],
  support: [
    { speaker: 'caller', text: 'I received the wrong size for my Nykaa order. Can I exchange it?', time: '0s' },
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
  { code: 'mr', name: 'Marathi', native: 'ಮರಾठी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('receptionist');
  const [selectedLanguage, setSelectedLanguage] = useState('hinglish');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationIndex, setSimulationIndex] = useState(0);
  const [simulatedTranscripts, setSimulatedTranscripts] = useState([]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth');
  const [customMinutes, setCustomMinutes] = useState(5000);
  const [industryActiveTab, setIndustryActiveTab] = useState('bpo');
  const [copiedText, setCopiedText] = useState(false);

  // For the simulator typing effect & flow
  const simulationIntervalRef = useRef(null);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationIndex(0);
    setSimulatedTranscripts([]);
    
    // Clear any previous running simulation
    if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);

    const dialogues = simulatorDialogues[activeTab] || [];
    let currentIndex = 0;

    simulationIntervalRef.current = setInterval(() => {
      if (currentIndex < dialogues.length) {
        setSimulatedTranscripts(prev => [...prev, dialogues[currentIndex]]);
        currentIndex++;
        setSimulationIndex(currentIndex);
      } else {
        clearInterval(simulationIntervalRef.current);
        setIsSimulating(false);
      }
    }, 2800);
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

  // Demo dynamic pricing calculator values
  const getCustomRate = () => {
    if (customMinutes < 1000) return 12; // Starter tier rate
    if (customMinutes < 5000) return 11; // Growth tier rate
    return 10; // Scale tier rate
  };

  const calculateCustomPrice = () => {
    const rate = getCustomRate();
    const voiceCost = customMinutes * rate;
    const phoneCost = 400; // 1 Indian DID cost
    return voiceCost + phoneCost;
  };

  const handleCopyLink = () => {
    document.execCommand('copy'); // safe fallback
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans antialiased selection:bg-[#FFB000] selection:text-black">
      
      {/* Glow effects decoration tailored for light theme */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FFB000]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-[#FF9F1C]/8 rounded-full filter blur-[150px] pointer-events-none" />
      
      {/* Header / Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-black/[0.06] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-black to-gray-800 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                {/* Active Latency Pill */}
                <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FFB000] border border-white"></span>
                </span>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-black">
                  Demo<span className="text-[#FFB000]">.io</span>
                </span>
                <span className="block text-[9px] text-[#FFB000] tracking-[0.2em] font-bold uppercase">Audio-Native AI</span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">How It Works</a>
              <a href="#capabilities" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">Capabilities</a>
              <a href="#integrations" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">Integrations</a>
              <a href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">Pricing</a>
              <a href="#comparison" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">Why Us</a>
            </div>

            {/* Header Right Action */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06]">
                <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-pulse" />
                <span className="text-[11px] text-gray-700 font-bold">94ms Live Call Latency</span>
              </div>
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-black text-white font-semibold text-sm transition-all hover:bg-[#FFB000] hover:text-black active:scale-95 shadow-md"
              >
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero: Catchy Value Proposition */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Premium micro badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB000]/10 border border-[#FFB000]/30 text-xs text-black font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB000] animate-pulse" />
                <span>India-First Conversational Voice AI Platform</span>
              </div>

              {/* Majestic Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-black">
                AI Voice Agents That <br/>
                <span className="bg-gradient-to-r from-black via-[#FFB000] to-black bg-clip-text text-transparent">
                  Actually Sound Human
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
                Run flawless phone conversations in <span className="text-black font-bold">15+ Indian languages</span>. Engineered on a single audio-native engine achieving <span className="text-[#FFB000] font-black">sub-300ms latency (94ms live demo)</span>. No robotic delay, no rigid IVR menus.
              </p>

              {/* Quick Specs Bullet List */}
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span className="text-sm text-gray-700 font-medium">Automatic Dialect Detection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span className="text-sm text-gray-700 font-medium">Carrier-grade Indian PSTN</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span className="text-sm text-gray-700 font-medium">TRAI & DPDP Compliant</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span className="text-sm text-gray-700 font-medium">Transparent Per-Second Billing</span>
                </div>
              </div>

              {/* CTA Blocks */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black text-white font-bold hover:bg-[#FFB000] hover:text-black transition-all hover:shadow-lg group"
                >
                  <span>Build Your Voice Agent</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#live-sandbox"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gray-50 border border-black/[0.08] hover:bg-gray-100 transition-all font-semibold text-black"
                >
                  <Volume2 className="w-5 h-5 text-[#FFB000]" />
                  <span>Test Live Audio Demo</span>
                </a>
              </div>

              {/* Real-time stats display */}
              <div className="pt-6 border-t border-black/[0.06] flex items-center gap-8">
                <div>
                  <p className="text-2xl font-black text-black">94ms</p>
                  <p className="text-xs text-gray-500 font-semibold">Live Latency Measured</p>
                </div>
                <div className="w-px h-8 bg-black/[0.1]" />
                <div>
                  <p className="text-2xl font-black text-black">15+</p>
                  <p className="text-xs text-gray-500 font-semibold">Indian Languages</p>
                </div>
                <div className="w-px h-8 bg-black/[0.1]" />
                <div>
                  <p className="text-2xl font-black text-black">99.99%</p>
                  <p className="text-xs text-gray-500 font-semibold">Uptime SLA</p>
                </div>
              </div>
            </div>

            {/* Right Hero: High-fidelity Live Telephone & Waveform Sandbox (Ajoxi-style) */}
            <div id="live-sandbox" className="lg:col-span-5 relative">
              <div className="relative rounded-3xl border border-black/[0.08] bg-[#FDFDFD] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                {/* Header of Sandbox */}
                <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-black animate-pulse" />
                    <div>
                      <p className="text-sm font-bold text-black">Interactive Sandbox</p>
                      <p className="text-xs text-gray-500">Test turn-taking AI voice latency</p>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-[#FFB000]/10 border border-[#FFB000]/30 text-[10px] font-bold text-black uppercase tracking-wider">
                    Target: 94ms
                  </div>
                </div>

                {/* Simulated Persona selector tabs */}
                <div className="mt-6">
                  <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-2">Select Agent Persona</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => { setActiveTab('receptionist'); stopSimulation(); }}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                        activeTab === 'receptionist' 
                          ? 'bg-black text-white border-black shadow-sm' 
                          : 'bg-black/[0.02] text-gray-600 border-black/[0.06] hover:bg-black/[0.04]'
                      }`}
                    >
                      AI Receptionist
                    </button>
                    <button
                      onClick={() => { setActiveTab('emi'); stopSimulation(); }}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                        activeTab === 'emi' 
                          ? 'bg-black text-white border-black shadow-sm' 
                          : 'bg-black/[0.02] text-gray-600 border-black/[0.06] hover:bg-black/[0.04]'
                      }`}
                    >
                      EMI Reminder
                    </button>
                    <button
                      onClick={() => { setActiveTab('support'); stopSimulation(); }}
                      className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                        activeTab === 'support' 
                          ? 'bg-black text-white border-black shadow-sm' 
                          : 'bg-black/[0.02] text-gray-600 border-black/[0.06] hover:bg-black/[0.04]'
                      }`}
                    >
                      D2C Support
                    </button>
                  </div>
                </div>

                {/* Language Selector */}
                <div className="mt-4">
                  <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold block mb-2">Select Accent / Language</label>
                  <select 
                    value={selectedLanguage} 
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full bg-gray-50 border border-black/[0.08] rounded-xl px-3 py-2 text-xs text-black focus:outline-none focus:border-black"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name} ({lang.native})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Waveform Visualization area */}
                <div className="my-6 p-4 rounded-xl bg-gray-50 border border-black/[0.06] flex flex-col justify-center items-center h-28 relative overflow-hidden">
                  {isSimulating ? (
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-[3px] bg-gradient-to-t from-[#FFB000] to-[#FF7A00] rounded-full animate-wave"
                          style={{
                            height: `${Math.floor(Math.random() * 60) + 10}px`,
                            animationDelay: `${i * 0.05}s`
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center space-y-1">
                      <Volume2 className="w-8 h-8 mx-auto text-gray-400" />
                      <p className="text-xs text-gray-500 font-bold">Ready to start conversation</p>
                    </div>
                  )}

                  {/* Absolute positioning for current latency tracking bubble */}
                  {isSimulating && (
                    <div className="absolute top-2 right-2 bg-[#FFB000]/10 border border-[#FFB000]/40 rounded px-2 py-0.5 text-[9px] font-bold text-black animate-pulse">
                      LATENCY: 94ms (Audio-Native)
                    </div>
                  )}
                </div>

                {/* Conversation Output / Transcript Sim */}
                <div className="space-y-3 max-h-48 overflow-y-auto mb-6 pr-2 scrollbar-thin">
                  {simulatedTranscripts.length === 0 ? (
                    <div className="text-center py-6 text-gray-500 text-xs italic font-semibold">
                      Click "Initiate Simulated Call" to simulate automatic turn-taking with zero latency.
                    </div>
                  ) : (
                    simulatedTranscripts.map((dialogue, index) => (
                      <div 
                        key={index}
                        className={`flex flex-col max-w-[85%] ${
                          dialogue.speaker === 'caller' ? 'mr-auto items-start' : 'ml-auto items-end'
                        }`}
                      >
                        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold mb-1">
                          {dialogue.speaker === 'caller' ? 'User (Caller)' : 'Demo Voice Agent'}
                        </span>
                        <div 
                          className={`rounded-2xl p-3 text-xs leading-relaxed ${
                            dialogue.speaker === 'caller'
                              ? 'bg-gray-100 border border-gray-200 text-gray-800'
                              : 'bg-gradient-to-tr from-black to-gray-800 text-white font-medium'
                          }`}
                        >
                          {dialogue.text}
                        </div>
                        {dialogue.highlight && (
                          <span className="text-[8px] text-[#FFB000] font-bold mt-1">
                            Response processed in {dialogue.time}
                          </span>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {/* Sandbox CTA Controller */}
                <div>
                  {!isSimulating ? (
                    <button
                      onClick={startSimulation}
                      className="w-full py-4 rounded-xl bg-black text-white hover:bg-[#FFB000] hover:text-black font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Initiate Simulated Call</span>
                    </button>
                  ) : (
                    <button
                      onClick={stopSimulation}
                      className="w-full py-4 rounded-xl bg-red-100 border border-red-200 text-red-600 font-extrabold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                      <Pause className="w-4 h-4" />
                      <span>Disconnect Simulated Call</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trusted By Carousel Section */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">
            TRUSTED BY 500+ INDIAN ENTERPRISES & BPOS
          </p>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee flex whitespace-nowrap gap-12 text-lg font-semibold text-gray-600 items-center">
              {brandLogos.map((logo, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm">
                  <span className="text-black font-black tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
            {/* Clone marquee list for seamless loop */}
            <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-12 text-lg font-semibold text-gray-600 items-center" aria-hidden="true">
              {brandLogos.map((logo, idx) => (
                <div key={`clone-${idx}`} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm">
                  <span className="text-black font-black tracking-tight">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Showcase: Old Relay Pipeline vs. Native Audio */}
      <section id="how-it-works" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB000]/10 border border-[#FFB000]/30 text-xs text-black font-bold uppercase tracking-wider mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#FFB000]" />
              <span>Architectural Supremacy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
              Native Audio Engine, <span className="text-[#FFB000]">Not A Relay Glue</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
              Standard bots stitch together Speech-to-Text, LLM, and Text-to-Speech engines, adding pipeline lag. Demo runs on a single integrated audio-native engine for natural turn-taking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Box: The standard slow way */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-red-500 tracking-wider uppercase">Standard Voice Bots (Vapi, Bland, etc)</span>
                <span className="text-xs bg-red-50 border border-red-100 text-red-600 px-2.5 py-0.5 rounded-md font-bold">Latency: 1.2s - 2.5s</span>
              </div>
              <h3 className="text-xl font-bold text-black">The Complex Glue-Relay</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Stitches multiple layers. Audio is converted to text, processed through an LLM, and then synthesized back to speech. Result: Unnatural pauses, high drop-offs, and laggy response times.
              </p>

              {/* Delayed Pipeline Visualizer */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-gray-700">1. Speech-to-Text (STT)</span>
                  <span className="text-xs font-bold text-red-500">+350ms</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-gray-700">2. LLM Inference (GPT/Claude)</span>
                  <span className="text-xs font-bold text-red-500">+800ms</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-gray-700">3. Text-to-Speech (TTS) Synthesis</span>
                  <span className="text-xs font-bold text-red-500">+450ms</span>
                </div>
              </div>
            </div>

            {/* Right Box: The Demo way */}
            <div className="rounded-2xl border border-[#FFB000]/40 bg-gradient-to-b from-[#FFB000]/5 to-white p-8 space-y-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB000]/10 rounded-full filter blur-xl" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-black tracking-wider uppercase">Demo Audio Model</span>
                <span className="text-xs bg-green-50 border border-green-100 text-green-600 px-2.5 py-0.5 rounded-md font-bold">Latency: Sub-300ms</span>
              </div>
              <h3 className="text-xl font-bold text-black">Single Audio-to-Audio Model</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A single end-to-end model processes spoken audio input and generates instantaneous natural vocal reply directly. No intermediate conversion steps.
              </p>

              {/* Native Audio visualizer box */}
              <div className="p-6 rounded-xl bg-black text-white flex items-center justify-between relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFB000]/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#FFB000]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Continuous Real-time Streaming</span>
                    <span className="text-[11px] text-gray-400">WebRTC audio streaming</span>
                  </div>
                </div>
                <span className="text-sm font-extrabold text-[#FFB000]">94ms Response!</span>
              </div>

              {/* Native list advantages */}
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Interruptible Barge-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Real-time pitch shift</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Indian Dialect Recognition</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Zero lag turn-taking</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Section / Bento Grid */}
      <section id="capabilities" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs text-black font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB000]" />
              <span>Full Suite Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
              Everything Needed To <span className="text-[#FFB000]">Dominate Voice Calls</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed font-semibold">
              From lead tracking & booking to high concurrency outbound campaigns, we hold the standard on custom voice workflows.
            </p>
          </div>

          {/* Bento Box Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Receptionist */}
            <div className="md:col-span-2 rounded-2xl border border-gray-200 bg-white p-8 flex flex-col justify-between hover:border-black/30 transition-all group shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFB000]/10 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  <Headphones className="w-6 h-6 text-black group-hover:text-[#FFB000] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">AI Receptionist</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Greets callers, qualifies requests, schedules bookings across 15+ Indian languages. Built to reply just like your best front-desk coordinator—working 24/7 without call dropouts during peak overflow.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center gap-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-black" /> 24/7 Zero Wait Time</span>
                <span className="flex items-center gap-1.5"><Languages className="w-4 h-4 text-black" /> 15+ Native Languages</span>
              </div>
            </div>

            {/* Box 2: Sub-second voice timing stats */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col justify-between hover:border-black/30 transition-all shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-black animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">94ms Live Performance</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Real-world benchmarks display latency far below the typical human conversational response rate of 250ms.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-6">
                <div className="flex justify-between text-xs font-bold text-gray-600 mb-2">
                  <span>Demo Latency</span>
                  <span className="text-[#FFB000]">94ms</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-black h-full w-[12%]" />
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-600 mt-4 mb-2">
                  <span>Global Competitors</span>
                  <span className="text-red-500">600ms+</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-red-500 h-full w-[75%]" />
                </div>
              </div>
            </div>

            {/* Box 3: Outbound */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col justify-between hover:border-black/30 transition-all shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Outbound Campaigns</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Automate and scale EMI reminders, feedback survey collections, renewal campaigns, and lead follow-ups effortlessly in Hindi and local regional dialects.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-[10px] bg-gray-100 border border-gray-200 rounded px-2.5 py-1 text-gray-700 font-bold">EMI Reminders</span>
                <span className="text-[10px] bg-gray-100 border border-gray-200 rounded px-2.5 py-1 text-gray-700 font-bold">Feedback Calls</span>
                <span className="text-[10px] bg-gray-100 border border-gray-200 rounded px-2.5 py-1 text-gray-700 font-bold">Policy Renewal</span>
              </div>
            </div>

            {/* Box 4: Compliant & Carrier-Grade */}
            <div className="md:col-span-2 rounded-2xl border border-gray-200 bg-white p-8 flex flex-col justify-between hover:border-black/30 transition-all group shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#FFB000]/20 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">TRAI & DPDP Compliance Built-In</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Avoid heavy telecom fines. Demo automatically enforces calling windows (9 AM–9 PM), scrubs national DND/DNC registry directories, saves localized data according to DPDP provisions, and maps transaction-vs-promotional routing patterns transparently.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 mt-6 text-xs font-bold text-gray-700">
                <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#FFB000]" /> DPDP Localisation</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#FFB000]" /> TRAI Hour Enforced</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#FFB000]" /> DNC Registry Scrub</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Served Tab Switcher */}
      <section className="py-24 bg-white border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-[#FFB000] tracking-widest uppercase">Deep Domain Adaptation</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-black">
              Automated Workflows Built For <span className="text-black border-b-4 border-[#FFB000]">Your Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar selection tabs */}
            <div className="lg:col-span-4 space-y-2">
              {industries.map(ind => (
                <button
                  key={ind.id}
                  onClick={() => setIndustryActiveTab(ind.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    industryActiveTab === ind.id
                      ? 'bg-black border-black text-white shadow-md'
                      : 'bg-transparent border-gray-200 text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-bold">{ind.name}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${industryActiveTab === ind.id ? 'translate-x-1 text-[#FFB000]' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>

            {/* Display pane */}
            <div className="lg:col-span-8 bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                  {industries.find(i => i.id === industryActiveTab)?.tag}
                </span>
                <h3 className="text-2xl font-extrabold text-black">
                  {industries.find(i => i.id === industryActiveTab)?.name} Automation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {industries.find(i => i.id === industryActiveTab)?.desc}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="text-xs text-gray-500 font-medium">
                  ⚡ Pre-tuned voice templates available for immediate setup.
                </div>
                <button 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="flex items-center gap-1.5 text-xs text-black font-extrabold hover:underline"
                >
                  <span>Request Custom Template</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB000]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem Platform Banner */}
      <section id="integrations" className="py-24 bg-gray-50 border-t border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-extrabold text-black tracking-widest uppercase">Ecosystem Ready</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
                200+ Integrations With <span className="text-[#FFB000]">Tools You Already Use</span>
              </h2>
              <p className="text-gray-600 leading-relaxed font-medium">
                Seamlessly trigger calls from your CRM, pull consumer profile details, record customer interactions, and update pipelines instantly. Connect with Zoho CRM, LeadSquared, WhatsApp, Razorpay, and more.
              </p>

              {/* Integration tags badge container */}
              <div className="flex flex-wrap gap-2.5">
                {['Zoho CRM', 'Freshworks', 'LeadSquared', 'WhatsApp Business', 'Razorpay', 'Tally Prime', 'Salesforce', 'Zapier', 'HubSpot'].map((tool, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Graphic Showcase Container */}
            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-8">
                <span className="text-xs font-bold text-gray-500">Simulated Pipeline Synchronization</span>
                <span className="text-[10px] text-green-600 font-bold tracking-widest uppercase animate-pulse">Online</span>
              </div>

              {/* Graphic Flow animation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-black" />
                    <span className="text-xs font-bold text-black">Incoming Call Registered</span>
                  </div>
                  <span className="text-[10px] text-gray-500">Live WebRTC</span>
                </div>

                <div className="h-6 flex justify-center items-center">
                  <div className="w-0.5 h-full bg-black/40 animate-pulse" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-green-200">
                  <div className="flex items-center gap-3">
                    <Sliders className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-bold text-black">Lead Created in Zoho CRM</span>
                  </div>
                  <span className="text-[10px] text-green-600 font-bold">Triggered</span>
                </div>

                <div className="h-6 flex justify-center items-center">
                  <div className="w-0.5 h-full bg-green-400/40 animate-pulse" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-green-200">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <span className="text-xs font-bold text-black">Razorpay Invoice Shared over WhatsApp</span>
                  </div>
                  <span className="text-[10px] text-green-600 font-bold">Sent!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Section */}
      <section id="comparison" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-[#FFB000] tracking-widest uppercase">Competitive Intelligence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-black">
              Why Indian Teams <span className="text-[#FFB000]">Select Demo</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed font-semibold">
              Don't build voice bots from raw APIs or overpay for generic global engines with high latency. Here is a clear side-by-side view.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="p-5 text-sm font-bold tracking-wider text-gray-500 uppercase">Dimension</th>
                  <th className="p-5 text-sm font-extrabold text-black bg-[#FFB000]/10">Demo.io</th>
                  <th className="p-5 text-sm font-bold tracking-wider text-gray-500 uppercase">Global Platforms (Vapi, Bland)</th>
                  <th className="p-5 text-sm font-bold tracking-wider text-gray-500 uppercase">Indian Enterprise CX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
                <tr>
                  <td className="p-5 font-bold text-black">Primary Market Focus</td>
                  <td className="p-5 font-bold text-black bg-[#FFB000]/5">India-First (Sovereign Dialects)</td>
                  <td className="p-5 text-gray-500">Global (US-Centric model tuning)</td>
                  <td className="p-5 text-gray-500">India (Omnichannel Chat bots)</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-black">Indian Languages</td>
                  <td className="p-5 font-bold text-black bg-[#FFB000]/5">15+ (Auto-dialect mid-call switch)</td>
                  <td className="p-5 text-gray-500">Limited / Standard Hindi only</td>
                  <td className="p-5 text-gray-500">Strong regional reach</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-black">Engine Architecture</td>
                  <td className="p-5 font-bold text-black bg-[#FFB000]/5">Single Audio-Native Model</td>
                  <td className="p-5 text-gray-500">STT + LLM + TTS pipeline lag</td>
                  <td className="p-5 text-gray-500">Mostly standard layered pipeline</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-black">Demo Latency</td>
                  <td className="p-5 font-bold text-black bg-[#FFB000]/5">94ms Live Performance</td>
                  <td className="p-5 text-gray-500">600ms - 1.5s typical lag</td>
                  <td className="p-5 text-gray-500">400ms - 1s typical</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-black">TRAI & DPDP Compliance</td>
                  <td className="p-5 font-bold text-black bg-[#FFB000]/5">Built-in standard on every plan</td>
                  <td className="p-5 text-gray-500">Not supported natively</td>
                  <td className="p-5 text-gray-500">Varies (Often manual setup)</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-black">Billing Model</td>
                  <td className="p-5 font-bold text-black bg-[#FFB000]/5">Per-second pricing in Rupees</td>
                  <td className="p-5 text-gray-500">Per-minute rate, billed in USD</td>
                  <td className="p-5 text-gray-500">Per-minute or Annual contract</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-black">Developer Effort</td>
                  <td className="p-5 font-bold text-black bg-[#FFB000]/5">No-code (Live in under hours)</td>
                  <td className="p-5 text-gray-500">Requires dedicated Dev staff</td>
                  <td className="p-5 text-gray-500">Enterprise deployment timeline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing and Interactive ROI/Usage Calculator Section */}
      <section id="pricing" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold text-black tracking-widest uppercase">Pricing Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-black">
              Transparent Pricing, <span className="text-[#FFB000]">Zero Contracts</span>
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed font-semibold">
              Transparent per-second pricing with GST invoice. Pay only for the duration the agent holds conversation, nothing more. Minimum top-up is ₹3,000.
            </p>
          </div>

          {/* Pricing Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            
            {/* Plan 1: Starter */}
            <div className={`rounded-2xl border bg-white p-8 flex flex-col justify-between relative transition-all shadow-sm ${
              selectedPlan === 'Starter' ? 'border-[#FFB000] ring-2 ring-[#FFB000]' : 'border-gray-200'
            }`}>
              <div>
                <span className="text-sm font-bold text-gray-500 block mb-2">Starter Plan</span>
                <p className="text-4xl font-black text-black">₹3,000<span className="text-sm font-normal text-gray-500">/mo</span></p>
                <div className="w-full bg-gray-100 h-px my-6" />
                <ul className="space-y-4 text-xs text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Effective Rate: ₹12/min</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 250 included minutes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 2 AI voice agents</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 1 Phone number (DID)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 3 Concurrent calls</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Standard Support</li>
                </ul>
              </div>
              <button 
                onClick={() => setSelectedPlan('Starter')}
                className="w-full py-3 rounded-xl mt-8 font-bold text-xs border border-gray-200 hover:border-black text-black transition-all bg-gray-50"
              >
                Choose Starter
              </button>
            </div>

            {/* Plan 2: Growth (Most Popular) */}
            <div className={`rounded-2xl border bg-white p-8 flex flex-col justify-between relative transition-all shadow-md ${
              selectedPlan === 'Growth' ? 'border-black ring-2 ring-black' : 'border-[#FFB000]'
            }`}>
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <span className="text-sm font-bold text-[#FFB000] block mb-2">Growth Plan</span>
                <p className="text-4xl font-black text-black">₹8,800<span className="text-sm font-normal text-gray-500">/mo</span></p>
                <div className="w-full bg-gray-100 h-px my-6" />
                <ul className="space-y-4 text-xs text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Effective Rate: ₹11/min</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 800 included minutes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 10 AI voice agents</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 3 Phone numbers (DIDs)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 12 Concurrent calls</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Standard + Premium Voices</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Priority Email Support</li>
                </ul>
              </div>
              <button 
                onClick={() => setSelectedPlan('Growth')}
                className="w-full py-3 rounded-xl mt-8 font-bold text-xs bg-[#FFB000] hover:bg-black hover:text-white text-black transition-all"
              >
                Choose Growth
              </button>
            </div>

            {/* Plan 3: Scale */}
            <div className={`rounded-2xl border bg-white p-8 flex flex-col justify-between relative transition-all shadow-sm ${
              selectedPlan === 'Scale' ? 'border-[#FFB000] ring-2 ring-[#FFB000]' : 'border-gray-200'
            }`}>
              <div>
                <span className="text-sm font-bold text-gray-500 block mb-2">Scale Plan</span>
                <p className="text-4xl font-black text-black">₹30,000<span className="text-sm font-normal text-gray-500">/mo</span></p>
                <div className="w-full bg-gray-100 h-px my-6" />
                <ul className="space-y-4 text-xs text-gray-700 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Effective Rate: ₹10/min</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 3,000 included minutes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Unlimited AI voice agents</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 15 Phone numbers (DIDs)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 40 Concurrent calls</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Realtime + Premium Voices</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Dedicated success mgr + SLA</li>
                </ul>
              </div>
              <button 
                onClick={() => setSelectedPlan('Scale')}
                className="w-full py-3 rounded-xl mt-8 font-bold text-xs border border-gray-200 hover:border-black text-black transition-all bg-gray-50"
              >
                Choose Scale
              </button>
            </div>

          </div>

          {/* Interactive Calculator Slider Block */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-lg font-bold text-black mb-2">Estimate Custom Monthly Volume</h3>
            <p className="text-xs text-gray-500 mb-6 font-semibold">Drag the slider to adjust expected calling minutes to view custom pricing tier discount.</p>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-gray-700">Total Calling Minutes</span>
                <span className="text-black text-lg bg-[#FFB000]/20 px-3 py-1 rounded-md">{customMinutes.toLocaleString()} Min / month</span>
              </div>
              
              <input 
                type="range" 
                min="500" 
                max="20000" 
                step="500"
                value={customMinutes} 
                onChange={(e) => setCustomMinutes(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100 text-center">
                <div>
                  <span className="block text-[11px] text-gray-500 uppercase tracking-widest font-bold">Effective Rate</span>
                  <span className="text-xl font-extrabold text-black">₹{getCustomRate()}/min</span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-500 uppercase tracking-widest font-bold">GST Invoice</span>
                  <span className="text-xl font-extrabold text-[#FFB000]">Included</span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-500 uppercase tracking-widest font-bold">Estimated Cost</span>
                  <span className="text-xl font-black text-black">₹{calculateCustomPrice().toLocaleString()}/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy Now / Footer CTA Block */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFB000]/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black">
            Ready to Go Live in <br/>
            <span className="text-black border-b-8 border-[#FFB000]">
              under 10 minutes?
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base font-semibold">
            No engineering team required. Build your conversational assistant visually, verify behaviors inside the sandbox, provision Indian DIDs, and optimize campaign metrics.
          </p>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 rounded-xl bg-black text-white hover:bg-[#FFB000] hover:text-black font-extrabold hover:shadow-md transition-all"
            >
              Start Free Trial Now
            </button>
            <button 
              onClick={handleCopyLink}
              className="px-8 py-4 rounded-xl bg-gray-50 border border-gray-200 text-black font-bold hover:bg-gray-100 transition-all"
            >
              {copiedText ? 'Copied Link!' : 'Share Platform'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-white py-12 border-t border-gray-200 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-black font-extrabold">Demo<span className="text-[#FFB000]">.io</span></span>
            <span>· All Rights Reserved © 2026. Made for India-first businesses.</span>
          </div>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">TRAI Compliance Audit</a>
            <a href="#" className="hover:text-black transition-colors">DPDP Localization</a>
          </div>
        </div>
      </footer>

      {/* Booking Demo Dialog Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
            <button 
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-black mb-2">Book Your Demo Agent Consultation</h3>
            <p className="text-xs text-gray-500 mb-6 font-semibold">Our experts will configure a custom audio-native agent based on your exact call flow during a 15-minute live review.</p>

            <form onSubmit={(e) => { e.preventDefault(); setIsDemoModalOpen(false); }} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-bold block mb-1">Company Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Acme FinTech India" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black" 
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-bold block mb-1">Work Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@company.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black" 
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-bold block mb-1">Select Core Language</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black">
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
                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-bold block mb-1">Estimated Monthly Minutes</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black">
                  <option>Under 1,000 mins/mo</option>
                  <option>1,000 - 10,000 mins/mo</option>
                  <option>10,000 - 50,000 mins/mo</option>
                  <option>Over 50,000 mins/mo</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-black text-white hover:bg-[#FFB000] hover:text-black font-extrabold text-xs tracking-wider uppercase shadow-md transition-all"
              >
                Schedule Demo & Configure Agent
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}