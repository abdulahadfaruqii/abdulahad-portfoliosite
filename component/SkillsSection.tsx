'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'React Native', level: 95 },
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Redux Toolkit', level: 90 },
  { name: 'Supabase', level: 90 },
  { name: 'Firebase', level: 85 },
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                <span className="text-white/70 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
