import fs from 'fs-extra'
import path from 'path'
import nunjucks from 'nunjucks'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configure Nunjucks environment
const templatesPath = path.resolve(__dirname, '../src/templates')
const env = nunjucks.configure([templatesPath], {
  autoescape: true,
  noCache: true,
  trimBlocks: true,
  lstripBlocks: true
})

// Load content data
const contentPath = path.resolve(__dirname, '../src/data/content.json')
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'))

// Ensure src directory exists
const srcPath = path.resolve(__dirname, '../src')
fs.ensureDirSync(srcPath)

// Render templates function
function renderTemplate(templatePath, outputPath, data = {}) {
  try {
    const rendered = env.render(templatePath, { ...content, ...data })
    const fullOutputPath = path.resolve(srcPath, outputPath)
    
    fs.ensureDirSync(path.dirname(fullOutputPath))
    fs.writeFileSync(fullOutputPath, rendered, 'utf-8')
    
    console.log(`✅ Rendered: ${templatePath} → ${outputPath}`)
  } catch (error) {
    console.error(`❌ Error rendering ${templatePath}:`, error.message)
    process.exit(1)
  }
}

// Build process
console.log('🚀 Building Nunjucks templates...')

// Render main page
renderTemplate('pages/index.njk', 'index.html', {
  title: 'KeshavSoft – Internship Task Document (Nunjucks + Vite)',
  currentYear: new Date().getFullYear(),
  buildTime: new Date().toISOString()
})

console.log('🎉 Nunjucks templates built successfully!')
