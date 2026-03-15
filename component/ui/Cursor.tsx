'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference shadow-lg"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovered ? 3 : 1,
          mixBlendMode: 'difference'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      <motion.div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 opacity-0"
        animate={{
          x: position.x - 1,
          y: position.y - 1,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  )
}
