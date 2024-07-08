import { defineConfig } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

export default defineConfig({
  title: 'Nekos.moe wrappper',
  description: 'JS/TS wrapper for Nekos.moe API',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  lastUpdated: true,
  markdown: {
    codeTransformers: [transformerTwoslash()],
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-frappe'
    }
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/OlaMushroom/nekos-moe-wrapper/tree/docs/docs:path',
      text: 'Edit this page on GitHub'
    },
    externalLinkIcon: true,
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Reference', link: '/reference/post' },
    ],
    search: { provider: 'local' },
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          link: '/guide'
        },
        {
          text: 'Usage Examples',
          items: [
            { text: 'Basic', link: '/guide/basic' },
            { text: 'Advanced', link: '/guide/advanced' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'post', link: '/reference/post' },
            { text: 'user', link: '/reference/user' },
            { text: 'auth', link: '/reference/auth' },
            { text: 'Miscellaneous', link: '/reference/misc' }
          ]
        },
        {
          text: 'Interfaces & Types',
          link: '/reference/types'
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe-wrapper' }
    ]
  }
});
