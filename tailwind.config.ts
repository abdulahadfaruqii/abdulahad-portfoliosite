import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(200% 100% at 50% 0%, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
        'cloud-gradient': 'radial-gradient(ellipse at center, #a855f7 0%, #3b82f6 30%, #ec4899 70%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
export default config
