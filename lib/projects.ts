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
    image: '/e-commerce.png',
    description:
      'A modern full-stack e-commerce platform featuring product browsing, shopping cart, secure checkout, and responsive UI for seamless online shopping experience.',
    technologies: ['Vite.js', 'TypeScript', 'Tailwind', 'Stripe'],
    github: 'https://github.com/johndoe/ecommerce',
    liveDemo: 'https://ecommerce.johndoe.com'
  },
  {
    slug: 'furniture-web',
    title: 'Furniture Website',
    category: 'Web',
    image: '/furniture.png',
    description:
      'A stylish furniture showcase website with modern UI design, product galleries, and responsive layouts to provide an engaging browsing experience.',
    technologies: ['Vite.js', 'UI', 'CSS'],
    github: 'https://github.com/johndoe/taskmanager',
    liveDemo: 'https://vitefurniture-web-git-main-tahaa-faruqiis-projects.vercel.app/'
  },
  {
    slug: 'portfolio-site',
    title: 'Portfolio Website',
    category: 'Web',
    image: '/portfolio.png',
    description:
      'A personal developer portfolio built to showcase projects, skills, and experience using modern web technologies with smooth animations and responsive design.',
    technologies: ['Vite.js', 'UI', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/johndoe/portfolio',
    liveDemo: 'https://vite-portfolio-five-lime.vercel.app/'
  },
  {
    slug: 'cosmetics-site',
    title: 'Cosmetics Website',
    category: 'Web',
    image: '/cosmeticweb.png',
    description:
      'An elegant cosmetics e-commerce website featuring product listings, modern UI components, smooth animations, and responsive design for beauty product promotion.',
    technologies: ['Vite.js', 'UI', 'Framer Motion', 'Tailwind', 'GSAP'],
    github: 'https://github.com/johndoe/portfolio',
    liveDemo: 'https://cosmetics-website-zeta.vercel.app/'
  },
  {
    slug: 'dashboard-site',
    title: 'Dashboard Website',
    category: 'Web',
    image: '/portal.png',
    description:
      'A modern admin dashboard interface designed for data management and analytics with clean UI components, responsive layout, and interactive elements.',
    technologies: ['Vite.js', 'UI', 'Framer Motion', 'Tailwind', 'GSAP'],
    github: 'https://github.com/johndoe/portfolio',
    liveDemo: 'https://johndoe.com'
  }
]