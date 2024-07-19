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
          { text: 'Start', link: '/guides/start' },
          { 
            text: 'Examples', 
            items: [
              { text: 'Env Placeholders', link: '/guides/examples/env-placeholders' },
              { text: 'XPaths', link: '/guides/examples/xpaths' }
            ]
          }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Index', link: '/reference/ref-index' },
          { text: 'Flows', link: '/reference/flows' },
          { 
            text: 'Operations', 
            items: [
              { text: 'Run Flow For Each', link: '/reference/operations/run-flow-for-each' },
              { text: 'Evaluate Expression', link: '/reference/operations/eval-expression' }
            ]
          },
          { text: 'Payload configuration', link: '/reference/payload-config' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/henrybastos/flow-builder/' }
    ]
  }
})
