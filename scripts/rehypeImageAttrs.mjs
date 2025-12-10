import { visit } from "unist-util-visit";

const ATTR_PATTERN = /^\{\:\s*([^}]+)\}$/;
const ATTR_REGEX = /([^\s=]+)\s*=\s*"([^"]*)"/g;

function parseAttributes(text) {
  const match = text.trim().match(ATTR_PATTERN);
  if (!match) return null;
  const attrs = {};
  let attrMatch;
  while ((attrMatch = ATTR_REGEX.exec(match[1]))) {
    const [, key, value] = attrMatch;
    attrs[key] = value;
  }
  return Object.keys(attrs).length ? attrs : null;
}

function applyAttrs(element, attrs) {
  if (!attrs) return;
  element.properties = element.properties || {};
  Object.assign(element.properties, attrs);
}

export default function rehypeImageAttrs() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (!parent || node.tagName !== "p" || !Array.isArray(node.children)) {
        return;
      }

      // Inline attributes within the same paragraph as the image
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type !== "text" || typeof child.value !== "string") continue;
        const attrs = parseAttributes(child.value);
        if (!attrs) continue;

        const imageNode = node.children[i - 1];
        if (!imageNode || imageNode.type !== "element" || imageNode.tagName !== "img") continue;

        applyAttrs(imageNode, attrs);
        node.children.splice(i, 1);
        i--;
        if (node.children.length === 0) {
          parent.children.splice(index, 1);
          return [visit.SKIP, index - 1];
        }
      }

      // Detached attribute paragraph right after the image paragraph
      if (
        node.children.length === 1 &&
        node.children[0].type === "text" &&
        typeof node.children[0].value === "string"
      ) {
        const attrs = parseAttributes(node.children[0].value);
        if (!attrs) return;

        const prev = parent.children[index - 1];
        if (
          !prev ||
          prev.type !== "element" ||
          prev.tagName !== "p" ||
          !Array.isArray(prev.children)
        ) {
          return;
        }

        const imageNode = prev.children.find(
          (child) => child.type === "element" && child.tagName === "img",
        );
        if (!imageNode) return;

        applyAttrs(imageNode, attrs);
        parent.children.splice(index, 1);
        return [visit.SKIP, index - 1];
      }
    });
  };
}
