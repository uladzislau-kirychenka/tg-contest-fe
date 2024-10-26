import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tg-contest-fe/",
  css: {
    modules: {
      // Customize the CSS Modules naming pattern
    //   localsConvention: 'camelCaseOnly', // Use camelCase for class names in JS
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Custom pattern for unique names
    },
  },
});
