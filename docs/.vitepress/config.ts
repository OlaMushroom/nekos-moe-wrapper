import { defineConfig } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

export default defineConfig({
  title: 'Nekos.moe wrappper',
  description: 'A wrapper for Nekos.moe API',
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
  lastUpdated: true,
  markdown: {
    codeTransformers: [
      transformerTwoslash()
    ],
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-frappe'
    }
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/OlaMushroom/nekos-moe.js/blob/main/docs/:path',
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
          text: 'Using JS',
          link: '/guide/js'
        },
        {
          text: 'Usage Examples',
          items: [
            { text: 'Basic', link: '/guide/examples/basic' },
            { text: 'Advanced', link: '/guide/examples/advanced' }

          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'post', link: '/reference/post' },
            { text: 'user', link: '/reference/user' }
          ]
        },
        {
          text: 'Types',
          items: [
            { text: 'Data', link: '/reference/types/data' },
            { text: 'Options', link: '/reference/types/options' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe.js' }
    ]
  }
});
