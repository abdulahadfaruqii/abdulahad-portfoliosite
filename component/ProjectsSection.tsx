'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Project, projects } from '@/lib/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'mobile'>('all')
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  const tabs = [
    { id: 'all' as const, label: 'All', count: projects.length },
    { id: 'web' as const, label: 'Web', count: projects.filter(p => p.category === 'Web').length },
    // { id: 'mobile' as const, label: 'Mobile', count: projects.filter(p => p.category === 'Mobile').length },
  ]

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab)
    const filtered = tab === 'all' 
      ? projects 
      : projects.filter(p => p.category === (tab === 'web' ? 'Web' : 'Mobile'))
    setFilteredProjects(filtered)
  }

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20"
        >
          Projects
        </motion.h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`glass px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white/20 border-white/40 shadow-xl scale-105 text-white'
                  : 'hover:bg-white/10 hover:scale-105 text-gray-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label} ({tab.count})
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
