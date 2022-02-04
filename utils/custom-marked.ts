import { marked } from "marked";

// https://marked.js.org/using_pro#renderer
const renderer = {
  link(href, title, text) {
    return `<a title=${title} target="_blank" href=${href} rel="noopener noreferrer">${text}</a>`;
  },
};

marked.use({ renderer });

export default marked;
