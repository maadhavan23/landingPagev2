import type { Config } from "tailwindcss"; // Import type

export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1F5C47",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#C9EDDC",
          foreground: "#7B4B94",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#7B4B94", // Corrected accent color
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "#1A1A1A",
          foreground: "#7B4B94",
        },
      },
    },
  },
  plugins: [],
} satisfies Config; // Ensure the configuration satisfies the Config type
