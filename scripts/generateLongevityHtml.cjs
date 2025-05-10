// Script to generate static HTML longevity pages for all languages
// Usage: node scripts/generateLongevityHtml.js

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { JSDOM } = require('jsdom');

const PUBLIC_DIR = path.join(__dirname, '../public');
const LONGEVITY_DIR = path.join(PUBLIC_DIR, 'longevity');

// Find all longevity markdown files (longevity.md, longevity.de.md, etc)
const files = fs.readdirSync(PUBLIC_DIR).filter(f =>
  f.startsWith('longevity') && f.endsWith('.md')
);

if (!fs.existsSync(LONGEVITY_DIR)) fs.mkdirSync(LONGEVITY_DIR);

files.forEach(file => {
  const lang = file === 'longevity.md' ? 'en' : file.split('.')[1];
  const mdPath = path.join(PUBLIC_DIR, file);
  const md = fs.readFileSync(mdPath, 'utf8');
  let html = marked.parse(md);

  // Use JSDOM to manipulate HTML fragment
  const dom = new JSDOM(`<div id="longevity-content-root">${html}</div>`);
  const { document } = dom.window;
  const root = document.querySelector('#longevity-content-root');

  // Build horizontal menu from h2/h3
  const headings = [...root.querySelectorAll('h2, h3')];
  if (headings.length) {
    const menu = document.createElement('nav');
    menu.setAttribute('aria-label', 'Longevity Sections');
    menu.className = 'flex overflow-x-auto gap-8 mb-8 px-2 py-2 border-b border-gray-200 bg-white rounded-t-lg';
    headings.forEach(h => {
      if (!h.id) {
        h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent;
      a.className = 'font-semibold text-blue-700 hover:underline whitespace-nowrap';
      menu.appendChild(a);
    });
    root.insertBefore(menu, root.firstChild);
  }

  // Style tables
  root.querySelectorAll('table').forEach(table => {
    table.setAttribute('role', 'table');
    table.setAttribute('tabindex', '0');
    table.className = 'min-w-full text-left text-sm border border-gray-200 rounded-lg overflow-hidden longevity-table';
    table.querySelectorAll('th').forEach(th => {
      th.className = 'bg-blue-50 px-4 py-2 font-semibold text-gray-700';
    });
    table.querySelectorAll('td').forEach(td => {
      td.className = 'px-4 py-2 border-t border-gray-100';
    });
  });

  // Style links
  root.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('tabindex', '0');
    link.classList.add('text-blue-700', 'hover:underline');
  });

  // Style headings
  root.querySelectorAll('h1').forEach(h1 => {
    h1.className = 'text-3xl font-bold mb-4 text-gray-900';
  });
  root.querySelectorAll('h2').forEach(h2 => {
    h2.className = 'text-2xl font-bold mt-8 mb-4 text-blue-800';
  });
  root.querySelectorAll('h3').forEach(h3 => {
    h3.className = 'text-xl font-semibold mt-6 mb-2 text-blue-700';
  });

  // Style paragraphs and lists for readability
  root.querySelectorAll('p').forEach(p => {
    p.className = 'mb-4 text-gray-800';
  });
  root.querySelectorAll('ol, ul').forEach(list => {
    list.className = 'mb-4 pl-6';
  });
  root.querySelectorAll('li').forEach(li => {
    li.className = 'mb-2';
  });

  // Wrap everything in the main card container
  const wrapper = document.createElement('div');
  wrapper.className = 'bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto longevity-html-content';
  while (root.firstChild) {
    wrapper.appendChild(root.firstChild);
  }

  // Output only the card fragment (no html/head/body)
  const outPath = path.join(LONGEVITY_DIR, `${lang}.html`);
  fs.writeFileSync(outPath, wrapper.innerHTML, 'utf8');
  console.log(`Generated ${outPath}`);
});

console.log('Done.');
