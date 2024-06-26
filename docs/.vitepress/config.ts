import { defineConfig } from 'vitepress';
//import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

export default defineConfig({
  title: 'Nekos.moe.js',
  description: 'TS wrapper for Nekos.moe API',
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/OlaMushroom/nekos-moe.js/blob/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    externalLinkIcon: true,
    search: { provider: 'local' },
    sidebar: [
      {
        text: 'Getting Started', link: '/',
      },
      {
        text: 'Usage Examples',
        items: [
          { text: 'Basic', link: '/examples/basic' },
          { text: 'Advanced', link: '/examples/advanced' },
          { text: 'post', link: '/examples/post' },
          { text: 'user', link: '/examples/user' },
        ]
      },
      {
        text: 'Types',
        items: [
          { text: 'Data', link: '/types/data' },
          { text: 'Body fields', link: '/types/fields' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe.js' }
    ]
  },
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]]
});
