import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import fs from "fs";

const BASE = "/Portfolio/";

// Dev only: let /Portfolio/<folder>/ open public/<folder>/index.html,
// the way GitHub Pages does. Without it Vite answers with the React app.
function publicFolderIndex() {
  return {
    name: "public-folder-index",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [pathname, query = ""] = (req.url || "").split("?");
        if (pathname.startsWith(BASE) && pathname.endsWith("/") && pathname !== BASE) {
          const rel = pathname.slice(BASE.length);
          if (!rel.includes("..") && fs.existsSync(path.join(server.config.publicDir, rel, "index.html"))) {
            req.url = `${pathname}index.html${query ? `?${query}` : ""}`;
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [
    publicFolderIndex(),
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
