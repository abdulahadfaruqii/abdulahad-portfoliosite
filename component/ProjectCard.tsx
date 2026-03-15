'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/projects'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ delay: index * 0.1 }}
      className="glass group relative overflow-hidden rounded-3xl h-80 lg:h-96 hover:bg-white/20 transition-all duration-500 cursor-pointer"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full w-full">
        {/* Project Image */}
        <div className="relative h-2/3 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
          />
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                {project.category}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6 h-1/3 flex flex-col justify-between">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/70 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
