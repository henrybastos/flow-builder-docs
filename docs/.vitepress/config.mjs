import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flow Builder Docs",
  description: "Flow Builder's official documentation.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Start', link: '/start' },
          { 
            text: 'Examples', 
            items: [
              { text: 'Env Placeholders', link: '/examples/env-placeholders' }
            ]
          }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Summary', link: '/ref-summary' },
          { text: 'Flows', link: '/flows' },
          { text: 'Operations', link: '/operations' },
          { text: 'Payload configuration', link: '/payload-config' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/henrybastos/flow-builder/' }
    ]
  }
})
