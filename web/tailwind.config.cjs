/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        proto: ["JetBrains Mono", "monospace"],
        mono: ["Space Mono", "monospace"],
        pressStart: ['"Press Start 2P"'],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
}
