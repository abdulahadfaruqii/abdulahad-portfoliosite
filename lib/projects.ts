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
    github: 'https://github.com/tahaa-faruqii/e-commercesite',
    liveDemo: 'https://e-commercesite-steel.vercel.app/'
  },
  {
    slug: 'furniture-web',
    title: 'Furniture Website',
    category: 'Web',
    image: '/furniture.png',
    description:
      'A stylish furniture showcase website with modern UI design, product galleries, and responsive layouts to provide an engaging browsing experience.',
    technologies: ['Vite.js', 'UI', 'CSS'],
    github: 'https://github.com/tahaa-faruqii/vitefurniture-web',
    liveDemo: 'https://vitefurniture-web.vercel.app/'
  },
  {
    slug: 'portfolio-site',
    title: 'Portfolio Website',
    category: 'Web',
    image: '/portfolio.png',
    description:
      'A personal developer portfolio built to showcase projects, skills, and experience using modern web technologies with smooth animations and responsive design.',
    technologies: ['Vite.js', 'UI', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/tahaa-faruqii/vite-portfolio',
    liveDemo: 'https://vite-portfolio-five-lime.vercel.app/'
  },
  
  {
    slug: 'dashboard-site',
    title: 'Dashboard Website',
    category: 'Web',
    image: '/portal.png',
    description:
      'A modern admin dashboard interface designed for data management and analytics with clean UI components, responsive layout, and interactive elements.',
    technologies: ['Vite.js', 'UI', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/tahaa-faruqii/dashboard-portal',
    liveDemo: 'https://dashboard-portal-gamma.vercel.app/settings'
  },
  {
    slug: 'koldkare',
    title: 'koldkare',
    category: 'Web',
    image: '/koldkare.png',
    description:
      'A modern admin dashboard interface designed for data management and analytics with clean UI components, responsive layout, and interactive elements.',
    technologies: ['React.js', 'UI', 'Animation', 'CSS'],
    github: 'https://github.com/tahaa-faruqii/dashboard-portal',
    liveDemo: 'https://koldkare.vercel.app/'
  },
  {
    slug: 'dashboard-site',
    title: 'Ledgrai-invoice',
    category: 'Web',
    image: '/ledgrai-invoice.png',
    description:
      'LegRA is a comprehensive Next.js-based business management platform featuring authentication, accounting, AI capabilities, inventory management, and file upload functionality with a multi-user dashboard.',
    technologies: ['Next.js', 'UI', 'Animation', 'tailwind'],
    github: 'https://github.com/tahaa-faruqii/ledgrai',
    liveDemo: 'https://ledgrai-xi.vercel.app/'
  }
]