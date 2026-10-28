import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { componentTagger } from "lovable-tagger";

const germanHomepage = () => {
  let outputDirectory: string;

  return {
    name: "german-homepage-metadata",
    apply: "build" as const,
    configResolved(config: { root: string; build: { outDir: string } }) {
      outputDirectory = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const indexPath = path.join(outputDirectory, "index.html");
      const englishHtml = await readFile(indexPath, "utf8");
      const replaceMeta = (html: string, attribute: string, key: string, content: string) =>
        html.replace(
          new RegExp(`(<meta ${attribute}="${key}" content=")[^"]*(" />)`),
          `$1${content}$2`,
        );

      let germanHtml = englishHtml
        .replace('<html lang="en">', '<html lang="de">')
        .replace("<title>Viniyoga with Ina</title>", "<title>Viniyoga mit Ina</title>");
      germanHtml = replaceMeta(germanHtml, "name", "description", "Personalisierte Yogatherapie und Meditationspraxis mit Ina in Münster");
      germanHtml = replaceMeta(germanHtml, "property", "og:title", "Viniyoga mit Ina");
      germanHtml = replaceMeta(germanHtml, "property", "og:description", "Personalisierte Yogatherapie und Meditationspraxis mit Ina in Münster");
      germanHtml = replaceMeta(germanHtml, "property", "og:url", "https://viniyoga-with-ina.de/de");
      germanHtml = replaceMeta(germanHtml, "property", "og:site_name", "Viniyoga mit Ina");
      germanHtml = replaceMeta(germanHtml, "property", "og:locale", "de_DE");
      germanHtml = replaceMeta(germanHtml, "name", "twitter:title", "Viniyoga mit Ina");
      germanHtml = replaceMeta(germanHtml, "name", "twitter:description", "Personalisierte Yogatherapie und Meditationspraxis mit Ina in Münster");
      germanHtml = replaceMeta(germanHtml, "name", "twitter:url", "https://viniyoga-with-ina.de/de");

      const germanDirectory = path.join(outputDirectory, "de");
      await mkdir(germanDirectory, { recursive: true });
      await writeFile(path.join(germanDirectory, "index.html"), germanHtml);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), germanHomepage(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
