/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // link color
        "link-700": "#0F5699",
        "link-600": "#1473CC",
        "link-500": "#1990FF",
        "link-200": "#A3D3FF",
        "link-100": "#D1E9FF",
        "link-50": "#E8F4FF",
        // primary color
        "primary-700": "#2422A4",
        "primary-600": "#2926B9",
        "primary-500": "#4E0657",
        "primary-200": "#D5D4F5",
        "primary-100": "#EAEAFA",
        "primary-50": "#F5F4FD",
        // secondary color
        "secondary-700": "#CC515D",
        "secondary-600": "#E65B68",
        "secondary-500": "#FF6574",
        "secondary-200": "#FFE0E3",
        "secondary-100": "#FFF0F1",
        "secondary-50": "#FFF7F8",
        //   succes color
        "success-700": "#26A44D",
        "success-600": "#2BB956",
        "success-500": "#30CD60",
        "success-200": "#D6F5DF",
        "success-100": "#EAFAEF",
        "success-50": "#F5FDF7",
        // pending color
        "pending-700": "#CC8733",
        "pending-600": "#E6983A",
        "pending-500": "#FFA940",
        "pending-200": "#FFEED9",
        "pending-100": "#FFF6EC",
        "pending-50": "#FFFBF5",
        // error color
        "error-700": "#AE3636",
        "error-600": "#C43C3C",
        "error-500": "#DA4343",
        "error-200": "#F8D9D9",
        "error-100": "#FBECEC",
        "error-50": "#FDF6F6",

        // neutral color
        "nutral-divider": "#E4E5F0",
        "nutral-border": "#BCBFD6",
        "nutral-placeholder": "#A7ABC3",
        "nutral-text-secondary": "#82869E",
        "nutral-text-primary": "#434657",
        "nutral-text-title": "#1B1D29",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(180deg, #00D2FF 0%, #059DBE 100%)",
        "gradient-secondary":
          "linear-gradient(161.45deg, #00D2FF -5.54%, #9AEDFF 59.11%)",
        "hero-bg": "url('/hero-bg.svg')",
      },
    },
  },
  plugins: [],
};
