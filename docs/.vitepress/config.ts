import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '', link: '/' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Getting Started', link: '/' }
        ]
      },
      {
        text: 'Usage Examples',
        items: [
          { text: 'index.ts', link: '/indexts' },
          { text: 'buffer.ts', link: '/bufferts' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe.js' }
    ]
  }
})
