import React from 'react'

const Form = () => {
    return (
        <div>
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
    )
}

export default Form