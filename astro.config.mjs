import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

export default defineConfig({
  site: "https://jaimebw.github.io",
  output: "static",
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeRaw, [rehypeKatex, { strict: false }]],
    smartypants: false,
  },
});
