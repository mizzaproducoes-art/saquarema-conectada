/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#E6F4FA",
          100: "#CCE9F5",
          200: "#99D3EB",
          300: "#66BDE0",
          400: "#33A7D6",
          500: "#0077B6",
          600: "#005F92",
          700: "#023E8A",
          800: "#022E65",
          900: "#03045E",
        },
        sun: {
          50: "#FFFBEB",
          100: "#FFF3C4",
          200: "#FFE588",
          300: "#FFD666",
          400: "#FFD166",
          500: "#F4A100",
          600: "#D18700",
        },
        sand: {
          50: "#FDFBF7",
          100: "#F5EFE7",
          200: "#EBE0D0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-out": "fadeOut 0.4s ease-in forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-soft": "pulseSoft 2s infinite",
        "shimmer": "shimmer 2s infinite linear",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
        "glass-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        "glow-blue": "0 0 40px rgba(0, 119, 182, 0.3)",
        "glow-sun": "0 0 40px rgba(244, 161, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
