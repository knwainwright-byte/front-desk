/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#ffffff",
        panel: "#f5f7fa",
        border: "#dbe2ea",
        heading: "#1f334a",
        body: "#334155",
        accent: "#3b82f6",
        accentSoft: "#dbeafe"
      },
      boxShadow: {
        soft: "0 4px 14px rgba(15, 23, 42, 0.05)"
      }
    }
  },
  plugins: []
};
