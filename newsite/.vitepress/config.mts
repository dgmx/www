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
      { text: 'Contenedores', link: '/contenedores/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Redes', link: '/redes/' }
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
              { text: "Manual de Administración", link: "/programacion/manual_nodejs" },
              { text: "Manual de Programación", link: "/programacion/manual_programacion_nodejs" },
            ],
          },
          {
            text: "HTML",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/programacion/html/" },
              { text: "Introducción HTML", link: "/programacion/html/Introduccion_HTML" },
              { text: "Introducción CSS", link: "/programacion/html/Introduccion_CSS" },
              { text: "CSS", link: "/programacion/html/css" },
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
        text: 'Contenedores',
        items: [
          {
            text: "Docker",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/contenedores/docker/" },
              { text: "Introducción", link: "/contenedores/docker/intro" },
              { text: "Instalación", link: "/contenedores/docker/install" },
              { text: "Manual", link: "/contenedores/docker/manual" },
              { text: "Manual Ampliado", link: "/contenedores/docker/manual_ampliado" },
              { text: "Docker Swarm", link: "/contenedores/docker/docker_swarm" },
              { text: "Práctica Router", link: "/contenedores/docker/practica_router_docker" },
              { text: "DHCP Docker", link: "/contenedores/docker/dhcp_docker" },
              { text: "Ejercicios", link: "/contenedores/docker/exercises" },
              { text: "Compose Samples", link: "/contenedores/docker/compose_samples/compose" },
            ],
          },
          {
            text: "Podman",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/contenedores/podman/" },
              { text: "Docker a Podman", link: "/contenedores/podman/docker_to_podman" },
              { text: "Podman Lab", link: "/contenedores/podman/podman_lab" },
              { text: "Podman Pods", link: "/contenedores/podman/podman_pods" },
            ],
          },
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
              { text: "DHCP y NAT", link: "/linux/linux/dhcp_nat" },
              { text: "Guía Git", link: "/linux/linux/guia_git" },
              { text: "Seguridad Linux", link: "/linux/linux/linux_security" },
              { text: "Manual Shell Script", link: "/linux/linux/manual_shell_script" },
              { text: "Networking", link: "/linux/linux/networking" },
              { text: "Permisos Linux", link: "/linux/linux/permisos-linux" },
              { text: "Puertos", link: "/linux/linux/puertos" },
              { text: "Quotas", link: "/linux/linux/quotas" },
              { text: "SSH", link: "/linux/linux/ssh" },
              { text: "Túnel SSH", link: "/linux/linux/tunel_ssh" },
            ],
          },
          {
            text: "Kubernetes",
            collapsed: true,
            items: [
              { text: "Kube Lab AWS", link: "/linux/kube/kube-lab-aws" },
            ],
          },
          {
            text: "OpenLDAP",
            collapsed: true,
            items: [
              { text: "Comandos", link: "/linux/OpenLDAP/comandos" },
              { text: "Manual OpenLDAP", link: "/linux/OpenLDAP/manual_openldap" },
              { text: "Resumen LDAP", link: "/linux/OpenLDAP/resumen_ldap" },
            ],
          },
          {
            text: "Terminal",
            collapsed: true,
            items: [
              { text: "Inicio", link: "/linux/terminal/" },
              { text: "Terminal", link: "/linux/terminal/terminal" },
              { text: "Ejercicios", link: "/linux/terminal/ejercicios" },
              { text: "Manual Shell Script ASIR", link: "/linux/terminal/manual_shell_script_ASIR" },
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
              { text: "Cortafuegos Perimetral", link: "/redes/iptables/cortafuegos_perimetral" },
              { text: "Cortafuegos Personal", link: "/redes/iptables/cortafuegos_personal" },
              { text: "Ejemplos", link: "/redes/iptables/ejemplos_iptables" },
              { text: "Firewall", link: "/redes/iptables/firewall" },
              { text: "Good Policy", link: "/redes/iptables/goodpolicy" },
              { text: "Manual", link: "/redes/iptables/manual" },
              { text: "Seguridad", link: "/redes/iptables/seguridad" },
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
