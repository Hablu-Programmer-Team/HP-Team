/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // link color
        "color-link-700": "#0F5699",
        "color-link-600": "#1473CC",
        "color-link-500": "#1990FF",
        "color-link-200": "#A3D3FF",
        "color-link-100": "#D1E9FF",
        "color-link-50": "#E8F4FF",
        // primary color
        "color-primary-700": "#2422A4",
        "color-primary-600": "#2926B9",
        "color-primary-500": "#4E0657",
        "color-primary-200": "#D5D4F5",
        "color-primary-100": "#EAEAFA",
        "color-primary-50": "#F5F4FD",
        // secondary color
        "color-secondary-700": "#CC515D",
        "color-secondary-600": "#E65B68",
        "color-secondary-500": "#FF6574",
        "color-secondary-200": "#FFE0E3",
        "color-secondary-100": "#FFF0F1",
        "color-secondary-50": "#FFF7F8",
        //   succes color
        "color-success-700": "#26A44D",
        "color-success-600": "#2BB956",
        "color-success-500": "#30CD60",
        "color-success-200": "#D6F5DF",
        "color-success-100": "#EAFAEF",
        "color-success-50": "#F5FDF7",
        // pending color
        "color-pending-700": "#CC8733",
        "color-pending-600": "#E6983A",
        "color-pending-500": "#FFA940",
        "color-pending-200": "#FFEED9",
        "color-pending-100": "#FFF6EC",
        "color-pending-50": "#FFFBF5",
        // error color
        "color-error-700": "#AE3636",
        "color-error-600": "#C43C3C",
        "color-error-500": "#DA4343",
        "color-error-200": "#F8D9D9",
        "color-error-100": "#FBECEC",
        "color-error-50": "#FDF6F6",

        // neutral color
        "color-white": "#FFFFFF",
        "color-divider": "#E4E5F0",
        "color-border": "#BCBFD6",
        "color-placeholder": "#A7ABC3",
        "color-text-secondary": "#82869E",
        "color-text-primary": "#434657",
        "color-text-title": "#1B1D29",
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
