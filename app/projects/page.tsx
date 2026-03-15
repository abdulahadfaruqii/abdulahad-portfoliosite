"use client";
import { ProjectsSection } from "@/component/ProjectsSection";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20"
    >
      <ProjectsSection />
    </motion.main>
  );
}
