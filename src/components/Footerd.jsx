import React from 'react'

const Footerd = () => {
    return (
        <div>
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
        </div>
    )
}

export default Footerd