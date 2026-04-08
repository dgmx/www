# Diego J. González Documentation Site

This is a VitePress documentation site for educational content.

## Development

### Commands
- `npx vitepress dev` - Start local development server
- `npx vitepress build` - Build for production
- `npx vitepress preview` - Preview production build locally

### Directory Structure
- Content files: Markdown files in root and subdirectories (programacion/, databases/, linux/, redes/)
- Configuration: `.vitepress/config.mts`
- Static assets: `public/` directory
- Theme customization: `.vitepress/theme/`

### Writing Guidelines
- All content in Spanish (es-ES)
- Site title: "Diego J. González"
- Description: "Material documental de ASIR"
- Navigation and sidebar defined in config.mts

### Deployment
- Deployed to GitHub Pages automatically via GitHub Actions
- Build output goes to `.vitepress/dist` directory
- Base URL: https://www.diegojgonzalez.org

### Important Notes
- Mermaid diagrams supported via custom fence renderer in config.mts
- Dead link checking ignores localhost, example- links, and .sql files
- Last updated timestamps enabled
- Local search functionality configured