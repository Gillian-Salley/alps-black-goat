import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { alps: { green: "#17382D", lightGreen: "#214B3D", gold: "#C69B52", cream: "#F4EFE4", ivory: "#FBF9F3", ink: "#20251F" } } } },
  plugins: [],
};
export default config;
