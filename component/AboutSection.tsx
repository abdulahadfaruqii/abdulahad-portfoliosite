"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto text-center">
            React.js & React Native Developer with 2.5+ years of experience
            building scalable, high-performance web and mobile applications with
            a strong focus on user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            ref={(el) => {
              if (el) {
                cardsRef.current[0] = el;
              }
            }}
            className="glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">2.5+ Years</h3>
            <p className="text-white/70">
              {" "}
              React.js & React Native Developer experience
            </p>
          </motion.div>

          <motion.div
            ref={(el) => {
              if (el) {
                cardsRef.current[1] = el;
              }
            }}
            className="glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">4+</h3>
            <p className="text-white/70">Projects delivered</p>
          </motion.div>

          <motion.div
            ref={(el) => {
              if (el) {
                cardsRef.current[2] = el;
              }
            }}
            className="glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">100%</h3>
            <p className="text-white/70">Client satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
