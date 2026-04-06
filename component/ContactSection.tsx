"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text mb-6"
        >
          Get In Touch
        </motion.h2>
        <p className="text-xl text-white/80 mb-20 max-w-2xl mx-auto">
          Ready to bring your next project to life? Let's create something
          amazing together.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all resize-vertical"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-20 pt-20 border-t border-white/10"
        >
          {/* Facebook */}
          <a
            href="https://www.facebook.com/AbdulAhadFarooqi.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-2xl hover:bg-white/20 transition-all w-16 h-16 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdul-ahad-farooqi-4793781b8"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-2xl hover:bg-white/20 transition-all w-16 h-16 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.072-.928-1.5-1.5-1.5s-1.5.428-1.5 1.5v4.5h-3v-9h3v1.25c.466-.884 1.558-1.25 2.5-1.25 1.844 0 3 1.281 3 3.5v5.5z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tahaa_faruqii/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-2xl hover:bg-white/20 transition-all w-16 h-16 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.403a4.92 4.92 0 011.737 1.01 4.92 4.92 0 011.01 1.737c.163.457.348 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.427a4.902 4.902 0 01-1.01 1.737 4.902 4.902 0 01-1.737 1.01c-.457.163-1.257.348-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.427-.403a4.92 4.92 0 01-1.737-1.01 4.92 4.92 0 01-1.01-1.737c-.163-.457-.348-1.257-.403-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.427a4.92 4.92 0 011.01-1.737 4.92 4.92 0 011.737-1.01c.457-.163 1.257-.348 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.775.127 4.865.312 4.042.635 3.196.963 2.463 1.437 1.737 2.163.963 2.889.488 3.622.16 4.468-.163 5.291-.348 6.201-.405 7.478-.463 8.758-.475 9.167-.475 12s.012 3.242.07 4.522c.057 1.277.242 2.187.565 3.01.328.846.802 1.579 1.528 2.305.726.726 1.459 1.2 2.305 1.528.823.323 1.733.508 3.01.565 1.28.058 1.689.07 4.522.07s3.242-.012 4.522-.07c1.277-.057 2.187-.242 3.01-.565a5.96 5.96 0 002.305-1.528 5.96 5.96 0 001.528-2.305c.323-.823.508-1.733.565-3.01.058-1.28.07-1.689.07-4.522s-.012-3.242-.07-4.522c-.057-1.277-.242-2.187-.565-3.01a5.964 5.964 0 00-1.528-2.305 5.964 5.964 0 00-2.305-1.528c-.823-.323-1.733-.508-3.01-.565C15.242.012 14.833 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
