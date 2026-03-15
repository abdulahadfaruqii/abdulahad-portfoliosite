"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const cloudRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cloudRef.current) return;

    // Continuous spinning cloud gradient
    gsap.to(cloudRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "none",
    });

    // Subtle floating effect
    gsap.to(cloudRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Image entrance animation
    gsap.fromTo(
      imageRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated gradient cloud background */}

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto flex items-center justify-center max-w-sm "
        >
          {/* Electric Border via pseudo-element */}
          <div className="relative w-full max-w-sm aspect-square rounded-2xl electric-border flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl animate-pulse" />

            {/* Profile Image */}
            <Image
              src="/profilechair-img.png"
              alt="Abdul Ahad Farooqi"
              fill
              className="object-cover shadow-2xl z-10"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl pointer-events-none z-20" />
          </div>
        </motion.div>

        {/* Right: Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 animated-gradient-text"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Abdul Ahad Farooqi
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer crafting exceptional digital experiences
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#projects"
              className="glass px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-block text-white backdrop-blur-lg "
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
