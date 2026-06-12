import React from 'react'
import { Phone } from 'lucide-react'

const Navbar = () => {
  return (
    <>
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
    </>
  )
}

export default Navbar