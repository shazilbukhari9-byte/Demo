import React, { useRef, useState, useEffect } from 'react'
import ButtonSocialIconDemo from './ui/social-icon';
// import { Component } from 'lucide-react';
import { Component } from './timeline-component';


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


const Integration = () => {
    return (
        <div>
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
        </div>
    )
}

export default Integration