export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'neutral'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)'
      }
    }
  },
  seo: {
    siteName: 'Currencia Documentation'
  },
  header: {
    logo: {
      alt: 'Currencia logo',
      light: '/assets/logo.png',
      dark: '/assets/logo.png'
    },
    search: true,
    colorMode: true,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/hugorcd/currencia',
        'target': '_blank',
        'aria-label': 'Currencia on GitHub'
      }
    ]
  },
  footer: {
    colorMode: false,
    links: [
      {
        'icon': 'i-custom-currencia',
        'to': 'https://app.currencia.hrcd.fr/app/market',
        'target': '_blank',
        'aria-label': 'Currencia'
      }, {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/hugorcd__',
        'target': '_blank',
        'aria-label': 'HugoRCD on X'
      }, {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/nuxt/ui',
        'target': '_blank',
        'aria-label': 'Nuxt UI on GitHub'
      }
    ]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/hugorcd/currencia-docs/edit/content',
      links: [
        {
          icon: 'i-lucide-star',
          label: 'Report an issue',
          to: 'https://github.com/hugorcd/currencia/issues',
          target: '_blank'
        }
      ]
    }
  }
})
