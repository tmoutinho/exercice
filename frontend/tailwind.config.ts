import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary/default': '#006258',
        'primary/hover': '#8AB7B2',
        'primary/disabled': '#006258',

        // Secondary
        'secondary/default': '#FFFFFF',

        // Elevation
        'elevation/background': '#080A0B',
        'elevation/background1': '#0C0E10',
        'elevation/background2': '#111315',
        'elevation/background3': '#16181A',

        // Text
        'text/primary': '#F7F7F8',
        'text/secondary': '#ABAFB4',
        'text/disabled': '#ABAFB4',
        'text/buttonText': '#FFFFFF',

        // States
        'states/success': '#27D17F',
        'states/success/elevation1': '#27D17F',
      },
    },
  },
  plugins: [],
}
export default config
