import { defineConfig } from 'vitepress';
//import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

export default defineConfig({
  title: 'Nekos.moe.js',
  description: 'JS/TS wrapper for Nekos.moe API',
  lastUpdated: true,
  themeConfig: {
    externalLinkIcon: true,
    editLink: {
      pattern: 'https://github.com/OlaMushroom/nekos-moe.js/blob/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: { provider: 'local' },
    sidebar: [
      {
        items: [{ text: 'Getting Started', link: '/' }]
      },
      {
        text: 'Usage Examples',
        link: '/examples/',
        items: [
          { text: 'post', link: '/examples/post' },
          { text: 'user', link: '/examples/user' },
        ]
      },
      {
        text: 'Types',
        items: [
          { text: 'Data', link: '/types/data' },
          { text: 'Search fields', link: '/types/fields' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe.js' }
    ]
  },
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]]
});
