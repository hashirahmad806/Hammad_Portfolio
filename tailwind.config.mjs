/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#090A0F',
        surface: {
          DEFAULT: '#11131A',
          subtle: '#141722',
          elevated: '#1A1E2B',
          highlight: '#222738',
        },
        border: {
          hairline: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(99, 102, 241, 0.35)',
          active: 'rgba(99, 102, 241, 0.7)',
        },
        accent: {
          electric: '#6366F1', // Electric Indigo
          telemetry: '#10B981', // Emerald Pulse
          amber: '#F59E0B', // Warm Titanium
          cyan: '#06B6D4',
        },
        content: {
          primary: '#F5F6FA',
          secondary: '#9DA1B4',
          tertiary: '#5D6175',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'bezel-outer': '2rem',
        'bezel-inner': 'calc(2rem - 0.375rem)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
