import type { Config } from 'tailwindcss';

export default {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fill: {
        primary_600: '#6042AA',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        welcome: "url('../public/images/choiz_bg_img.jfif')",
      },
      backgroundColor: {
        neutral_600: '#292929',
        neutral_300: '#D3D3D3',
        primary_600: '#6042AA',
      },
      textColor: {
        primary_800: '#3B3345',
        primary_600: '#6042AA',
        primary_300: '#9F7CF7',
        secondary_600: '#424B54',
        secondary_300: '#666768',
      },
      borderColor: {
        neutral_300: '#E0E0E0',
        neutral_600: '#292929',
      },
      padding: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
      },
      gap: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
      },
      margin: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
      },
      fontSize: {
        xl: '26px',
        l: '20px',
        m: '16px',
        s: '14px',
        xs: '12px',
      },
      borderRadius: {
        1: '8px',
        2: '16px',
        3: '24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
