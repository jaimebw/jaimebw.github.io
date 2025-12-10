import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeImageAttrs from "./scripts/rehypeImageAttrs.mjs";

export default defineConfig({
  site: "https://jaimebw.github.io",
  output: "static",
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeRaw, rehypeImageAttrs, [rehypeKatex, { strict: false }]],
    smartypants: false,
  },
});
