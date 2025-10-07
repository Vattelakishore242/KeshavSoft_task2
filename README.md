project:
  name: KeshavSoft Task 2 – Nunjucks + Vite
  description: "Recreation of Task 1 Internship Document using Nunjucks templating and Vite bundler. Fully responsive HTML pages with partials, JSON content, and Bootstrap 5 styling."
  duration: "Single session (variable)"
  tech_stack:
    templating_engine: Nunjucks
    bundler: Vite
    styling: Bootstrap 5 + Custom CSS
    javascript: Vanilla JS
    icons: React Icons / Font Awesome
    content: JSON
    optional_concept: Jamstack

folder_structure:
  task2-keshavsoft-nunjucks-vite:
    src:
      templates:
        layouts: base.njk
        pages: index.njk
        partials:
          - header.njk
          - hero.njk
          - process.njk
          - tools.njk
          - challenges.njk
          - timeline.njk
          - footer.njk
      data: content.json
      assets:
        css: styles.css
        js: main.js
    scripts:
      - build-templates.js
    public: []
    root_files:
      - package.json
      - vite.config.js
      - README.md

features_implemented:
  - Fully templated HTML pages using Nunjucks
  - Partial-based architecture (header, footer, hero, etc.)
  - Dynamic content from content.json
  - Responsive design using Bootstrap 5
  - Smooth section layouts with Task 1 consistency
  - Clickable links, emojis, and styled content
  - Build automation with Vite for development and preview

installation_usage:
  steps:
    - step: Clone the repository
      command: git clone https://github.com/Vattelakishore242/keshavsoft-task2.git
    - step: Navigate to project directory
      command: cd keshavsoft-task2
    - step: Install dependencies
      command: npm install
    - step: Build templates
      command: npm run build-templates
      description: Compiles src/templates/pages/index.njk → dist/index.html
    - step: Run development server
      command: npm run dev
      description: Open browser at http://localhost:5173 to preview
    - step: Production Build
      command: npm run build
      description: Builds the static site ready for deployment

mandatory_requirements:
  - Nunjucks used for all templates
  - Vite used for bundling & development server
  - Final HTML output replicates Task 1 document in style, emojis, and formatting
  - Folder structure follows Task 2 specifications
  - README explains setup, usage, and technology stack

project_outcome:
  - Successfully recreated Task 1 Internship Document
  - Demonstrated Jamstack-like architecture
  - Clean, maintainable codebase with reusable templates and partials
  - Fully responsive and visually consistent static site

live_preview: "Replace with deployed link"
source_code: "https://github.com/Vattelakishore242/keshavsoft-task2"
