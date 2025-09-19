/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wow: {
          gold: '#ffd100',
          blue: '#00d4ff',
          purple: '#a335ee',
          green: '#1eff00',
          orange: '#ff8000',
          red: '#ff0000',
        },
        alliance: {
          blue: '#0066cc',
          gold: '#f4d03f',
        },
        horde: {
          red: '#b30000',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        'wow': ['Morpheus', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'loading-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}