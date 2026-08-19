import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// One self-contained ES module: HA loads it as a Lovelace "module" resource,
// served by the integration from custom_components/netboi/frontend/.
export default defineConfig({
  plugins: [react()],
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  build: {
    lib: {
      entry: "src/index.tsx",
      formats: ["es"],
      fileName: () => "netboi-cards.js",
    },
    outDir: "../custom_components/netboi/frontend",
    emptyOutDir: false,
    minify: true,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
