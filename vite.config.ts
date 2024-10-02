import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"), // Alias for 'components'
      lib: path.resolve(__dirname, "src/lib"), // Alias for 'lib'
      context: path.resolve(__dirname, "src/context"), // Alias for 'context'
      hooks: path.resolve(__dirname, "src/hooks"), // Alias for 'hooks'
      email: path.resolve(__dirname, "src/email"), // Alias for 'email'
    },
  },
});
