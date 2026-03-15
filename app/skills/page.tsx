"use client";
import { SkillsSection } from "@/component/SkillsSection";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20"
    >
      <SkillsSection />
    </motion.main>
  );
}
