import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nekos.moe.js",
  description: "JS/TS wrapper for Nekos.moe API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        items: [
          { text: 'Getting Started', link: '/' }
        ]
      },
      {
        text: 'Usage Examples',
        items: [
          { text: 'image', link: '/image' },
          { text: 'user', link: '/user' },
          // { text: 'buffer', link: '/buffer' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe.js' }
    ]
  }
})
