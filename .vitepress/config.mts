import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Diego J. González",
  lang: 'es-ES',
  sitemap: {
    hostname: 'https://www.diegojgonzalez.org'
  },
  lastUpdated: true,
  description: "Material documental",
  ignoreDeadLinks: [
    /localhost/,
    /example-/,
    /\.sql$/
  ],
  markdown: {
    config: (md) => {
      const fence = md.renderer.rules.fence
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.info.trim() === 'mermaid') {
          const content = token.content
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
          return `<div class="language-mermaid mermaid-container" data-mermaid="true"><pre><code class="language-mermaid">${content}</code></pre></div>`
        }
        return fence(tokens, idx, options, env, self)
      }
    }
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Programación', link: '/programacion/' },
      { text: 'Bases de datos', link: '/databases/' },
      { text: 'Linux', items: [
        { text: 'General', link: '/linux/' },
        { text: 'Contenedores', link: '/linux/contenedores/' },
        { text: 'Terminal', link: '/linux/terminal/' },
      ]},
      { text: 'Redes', items: [
        { text: 'General', link: '/redes/' },
        { text: 'IPv6', link: '/redes/ipv6/' },
        { text: 'IPTables', link: '/redes/iptables/' },
      ]},
    ],

    sidebar: [
      {
        text: 'Programación',
        items: [
          {
            text: "Java",
            collapsed: true,
            items: [
              { text: "Manual Java UML", link: "/programacion/java/Manual_Java_UML" },
              { text: "Ejercicios Clases", link: "/programacion/java/ejercicios_clases" },
              { text: "Ejercicios UML", link: "/programacion/java/uml" },
            ],
          },
          {
            text: "Julia",
            collapsed: true,
            items: [
              { text: "Manual Julia", link: "/programacion/Julia/manual_julia" },
              { text: "Estadística Computacional", link: "/programacion/Julia/estadistica_computacional" },
              { text: "Monte Carlo: Julia vs Python", link: "/programacion/Julia/montecarlo" },
            ],
          },
          {
            text: "NodeJS",
            collapsed: true,
            items: [
              { text: "Manual de Administración", link: "/programacion/node/administracion" },
              { text: "Manual de Programación", link: "/programacion/node/programacion" },
            ],
          },
          {
            text: "HTML",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/programacion/html/" },
              { text: "Introducción HTML", link: "/programacion/html/introduccion_html" },
              { text: "Introducción CSS", link: "/programacion/html/introduccion_css" },
              { text: "CSS", link: "/programacion/html/css" },
            ],
          },
          {
            text: "Shell Scripting",
            collapsed: true,
            items: [
              { text: "Manual de Shell Script", link: "/programacion/shell/manual_shell_script" },
              { text: "Ejercicios Shell Scripting", link: "/programacion/shell/ejercicios_shell_scripting" },
              { text: "Ejercicios Shell Scripting 2", link: "/programacion/shell/ejercicios_shell_scripting-2" },
            ],
          },
        ]
      },
      {
        text: 'Bases de datos',
        items: [
          {
            text: "SQL",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/databases/sql/" },
              { text: "Tienda Informática", link: "/databases/sql/informatica" },
              { text: "Gestión Empleados", link: "/databases/sql/empleados" },
              { text: "Gestión Ventas", link: "/databases/sql/ventas" },
              { text: "Jardinería", link: "/databases/sql/jardineria" },
              { text: "Universidad", link: "/databases/sql/universidad" },
              { text: "Gestión Centros", link: "/databases/sql/actividad35" },
              { text: "Departamentos", link: "/databases/sql/departamentos" },
              { text: "Tienda Ropa", link: "/databases/sql/ropatienda" },
              { text: "CC Comercial", link: "/databases/sql/ccomercial" },
              { text: "Empresa", link: "/databases/sql/empresa" },
              { text: "Fórmula 1", link: "/databases/sql/formula1" },
              { text: "Gestión", link: "/databases/sql/gestion" },
              { text: "Manager", link: "/databases/sql/manager" },
              { text: "Samples", link: "/databases/sql/samples" },
            ],
          },
          {
            text: "MariaDB",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/databases/mariadb/" },
              { text: "Alter Table", link: "/databases/mariadb/alter_table_mariadb" },
              { text: "Cifrado", link: "/databases/mariadb/cifrado_mariadb" },
              { text: "Seguridad", link: "/databases/mariadb/seguridad_mariadb" },
              { text: "Vistas", link: "/databases/mariadb/seguridad_vistas" },
            ],
          },
        ]
      },
      {
        text: 'Linux',
        items: [
          {
            text: "Contenedores",
            collapsed: true,
            items: [
              {
                text: "Docker",
                collapsed: true,
                items: [
                  { text: "Inicio", link: "/linux/contenedores/docker/" },
                  { text: "Introducción", link: "/linux/contenedores/docker/intro" },
                  { text: "Instalación", link: "/linux/contenedores/docker/install" },
                  { text: "Manual", link: "/linux/contenedores/docker/manual" },
                  { text: "Manual Ampliado", link: "/linux/contenedores/docker/manual_ampliado" },
                  { text: "Docker Swarm", link: "/linux/contenedores/docker/docker_swarm" },
                  { text: "Práctica Router", link: "/linux/contenedores/docker/practica_router_docker" },
                  { text: "DHCP Docker", link: "/linux/contenedores/docker/dhcp_docker" },
                  { text: "Ejercicios", link: "/linux/contenedores/docker/exercises" },
                  { text: "Compose Samples", link: "/linux/contenedores/docker/compose_samples/compose" },
                ],
              },
              {
                text: "Podman",
                collapsed: true,
                items: [
                  { text: "Inicio", link: "/linux/contenedores/podman/" },
                  { text: "Manual de Podman", link: "/linux/contenedores/podman/podman_pods" },
                  { text: "Docker a Podman", link: "/linux/contenedores/podman/docker_to_podman" },
                  { text: "Podman Lab", link: "/linux/contenedores/podman/podman_lab" },
                ],
              },
            ],
          },
          {
            text: "General",
            collapsed: true,
            items: [
              { text: "Archivos Linux", link: "/linux/linux/archivos_linux" },
              { text: "Buenas prácticas", link: "/linux/linux/goodpolicy" },
              { text: "Comandos", link: "/linux/linux/comandos_linux" },
              { text: "Comandos Red", link: "/linux/linux/comandos_red_avanzados" },
              { text: "DHCP y NAT", link: "/linux/linux/dhcp_nat" },
              { text: "Guía Git", link: "/linux/linux/guia_git" },
              { text: "Networking", link: "/linux/linux/networking" },
              { text: "Permisos Linux", link: "/linux/linux/permisos-linux" },
              { text: "Puertos", link: "/linux/linux/puertos" },
              { text: "Quotas", link: "/linux/linux/quotas" },
              { text: "Seguridad Linux", link: "/linux/linux/linux_security" },
              { text: "Comandos de Seguridad", link: "/linux/linux/seguridad" },
              { text: "SSH", link: "/linux/linux/ssh" },
              { text: "Túnel SSH", link: "/linux/linux/tunel_ssh" },
            ],
          },
          {
            text: "Terminal",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/linux/terminal/" },
              { text: "Terminal", link: "/linux/terminal/terminal" },
              { text: "Ejercicios", link: "/linux/terminal/ejercicios" },
            ],
          },
        ]
      },
      {
        text: 'Redes',
        items: [
          {
            text: "IPv6",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/redes/ipv6/" },
              { text: "Introducción", link: "/redes/ipv6/intro" },
              { text: "IPv4 a IPv6", link: "/redes/ipv6/ipv4_a_ipv6_conversion" },
              { text: "SLAAC", link: "/redes/ipv6/ipv6_slaac" },
              { text: "IPv6 a MAC", link: "/redes/ipv6/ipv6_to_mac" },
              { text: "Ejercicio Práctico", link: "/redes/ipv6/ejercicio1" },
              { text: "Resumen", link: "/redes/ipv6/resumen" },
            ],
          },
          {
            text: "IPTables",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/redes/iptables/" },
              { text: "Manual", link: "/redes/iptables/manual" },
              { text: "Cortafuegos Perimetral", link: "/redes/iptables/cortafuegos_perimetral" },
              { text: "Cortafuegos Personal", link: "/redes/iptables/cortafuegos_personal" },
              { text: "Ejemplos", link: "/redes/iptables/ejemplos_iptables" },
              { text: "Firewall", link: "/redes/iptables/firewall" },
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
