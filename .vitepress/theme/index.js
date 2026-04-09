import DefaultTheme from 'vitepress/theme'
import { onMounted, nextTick, watch } from 'vue'
import { useRoute, useData } from 'vitepress'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const { isDark } = useData()

    const renderMermaid = async () => {
      await nextTick()
      const mermaid = (await import('mermaid')).default
      mermaid.initialize({ 
        startOnLoad: false, 
        theme: isDark.value ? 'dark' : 'default'
      })

      const blocks = document.querySelectorAll('div.language-mermaid')
      blocks.forEach((block) => {
        if (block.classList.contains('mermaid-rendered')) return
        block.classList.add('mermaid-rendered')

        const code = block.querySelector('code')
        const text = code?.innerText || code?.textContent || ''

        const div = document.createElement('div')
        div.className = 'mermaid'
        div.textContent = text
        block.replaceWith(div)
      })

      await mermaid.run()
    }

    const reRenderMermaid = async () => {
      await nextTick()
      const mermaid = (await import('mermaid')).default
      
      // Elimina los diagramas ya renderizados para rehacerlos
      document.querySelectorAll('div.mermaid').forEach(el => el.remove())

      mermaid.initialize({ 
        startOnLoad: false, 
        theme: isDark.value ? 'dark' : 'default'
      })

      await mermaid.run({
        querySelector: '.mermaid'
      })
    }

    onMounted(renderMermaid)
    watch(() => route.path, renderMermaid)
    watch(isDark, reRenderMermaid)  // ← rerenderiza al cambiar tema
  }
}