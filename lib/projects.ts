export interface Project {
    slug: string
    title: string
    category: 'Web' | 'Mobile'
    image: string
    description: string
    technologies: string[]
    github: string
    liveDemo: string
}

export const projects: Project[] = [
    {
      slug: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      category: 'Web',
      image: '/images/project1.jpg',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Stripe'],
      github: 'https://github.com/johndoe/ecommerce',
      liveDemo: 'https://ecommerce.johndoe.com'
    },
    {
      slug: 'task-manager-mobile',
      title: 'Furniture Web',
      category: 'Web',
      image: '/furniture.png',
      description: 'Cross-platform task management app with offline sync and team collaboration features.',
      technologies: ['Vite.js', 'UI','CSS'],
      github: 'https://github.com/johndoe/taskmanager',
      liveDemo: 'https://taskmanager.johndoe.com'
    },
    {
      slug: 'portfolio-site',
      title: 'Portfolio Website',
      category: 'Web',
      image: '/portfolio.png',
      description: 'This very portfolio site built with Next.js 14, GSAP, and Framer Motion.',
      technologies: ['Vite.js', 'UI', 'Framer Motion', 'Tailwind'],
      github: 'https://github.com/johndoe/portfolio',
      liveDemo: 'https://johndoe.com'
    }
  ]