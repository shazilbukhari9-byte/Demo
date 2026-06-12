import React, { useEffect, useRef, useState } from 'react'

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


const handleCopyLink = () => {
    document.execCommand('copy');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
};

const Footer = () => {
    const [copiedText, setCopiedText] = useState(false);
    return (
        <div>
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFB000]/5 rounded-full filter blur-[100px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative">
                    <ScrollReveal>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black ">
                            Ready to Go Live in <br />
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
        </div>
    )
}

export default Footer