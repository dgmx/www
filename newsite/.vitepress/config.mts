import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Diego J. González",
  lang: 'es-ES',
  sitemap: {
    hostname: 'https://www.diegojgonzalez.org'
  },
  lastUpdated: true,
  description: "Material documental de ASIR",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Programación', link: '/programacion/index' },
      { text: 'Bases de datos', link: '/sql/index' },
      { text: 'Linux', link: '/linux/index' },
      { text: 'Redes', link: '/redes/index' }
    ],

    sidebar: [
      {
        text: 'Programación',
        items: [
           {
            text: "Pyton",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          },
     {
            text: "Processing",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          },
           {
            text: "Java",
            collapsed: true,
            items: [
              { text: "Manual UML", link: "/programacion/java/Manual_Java_UML" },
              { text: "Ejercicios Clases", link: "/programacion/java/ejercicios_clases" },
              { text: "Ejercicios UML", link: "/programacion/java/uml" },
            ],
          },
           {
            text: "Julia",
            collapsed: true,
            items: [
              { text: "Manual UML", link: "/programacion/Julia/manual_julia" },
              { text: "Estadistica Computacional", link: "/programacion/Julia/estadistica_computacional" },
              { text: "Julia vs Python", link: "/programacion/Julia/montecarlo" },
            ],
          }
        ]
      },
        {
        text: 'Bases de datos',
        items: [
            {
            text: "MariaDB",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          },
              {
            text: "SQL",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          }
        ]
      },
        {
        text: 'Redes',
        items: [
           {
            text: "Redes",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          },
             {
            text: "IPv6",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          },
              {
            text: "IPTables",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          }
        ]
      },
        {
        text: 'Linux',
        items: [
           {
            text: "Linux",
            collapsed: true,
            items: [
              { text: "Archivos Linux", link: "/linux/linux/archivos_linux" },
              { text: "Comandos", link: "/linux/linux/comandos_linux" },
              { text: "Comandos Red", link: "/linux/linux/comandos_red_avanzados" },
              { text: "Permisos Linux", link: "/linux/linux/permisos-linux" },
              { text: "SSH", link: "/linux/linux/ssh" },
              { text: "Manual Shell", link: "/linux/linux/manual_shell_script" },
              
            ],
          },
           {
            text: "Contenedores",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/plugins/development/" },
              { text: "Language Packs", link: "/plugins/development/language-packs" },
              { text: "Common Patterns", link: "/plugins/development/patterns" },
              { text: "Utilities Library", link: "/plugins/development/utilities" },
              { text: "Internationalization", link: "/plugins/development/i18n" },
            ],
          },
        ]
      },
  
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dgmx' }
    ],
     
       footer: {
      message: 'Publicado bajo la licencia MIT.',
    },
   
    logo: '/logo100.png',

    outline: {
    label: 'En esta página'
    },
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Tema oscuro',
    lightModeSwitchTitle: 'Cambiar a modo claro',
    darkModeSwitchTitle: 'Cambiar a modo oscuro',

    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },
     search: {
    provider: 'local',
    options: {
      translations: {
        button: {
          buttonText: 'Buscar',
          buttonAriaLabel: 'Buscar'
        },
        modal: {
          noResultsText: 'Sin resultados para',
          resetButtonTitle: 'Limpiar búsqueda',
          footer: {
            selectText: 'seleccionar',
            navigateText: 'navegar',
            closeText: 'cerrar'
          }
        }
      }
    }
  }


    
    
  }
})
