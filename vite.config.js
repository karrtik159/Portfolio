import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|js)$/
    }),
    svgr({
      include: "**/*.svg?react"
    })
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  },
  base: "/Portfolio/",
  resolve: {
    alias: {
      "react-reveal": path.resolve(__dirname, "./src/components/common/Reveal.js")
    }
  },
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        silenceDeprecations: ["legacy-js-api", "import"]
      }
    }
  },
  define: {
    "process.env": {}
  }
});
