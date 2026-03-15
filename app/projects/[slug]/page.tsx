'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'

interface Props {
  params: { slug: string }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-32 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-12"
        >
          <Link 
            href="/projects"
            className="glass inline-flex items-center gap-3 px-6 py-3 rounded-2xl hover:bg-white/20 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Project Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl glass border border-white/20">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
                {project.title}
              </h1>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl text-white/80">
                {project.category}
              </span>
            </div>

            <p className="text-xl text-white/80 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass px-4 py-2 rounded-xl text-white font-medium hover:bg-white/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-8 border-t border-white/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex-1 text-center px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.185 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1 text-center px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
