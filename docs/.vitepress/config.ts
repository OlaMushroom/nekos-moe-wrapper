import { defineConfig } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

const version = '0.6.2';

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
    externalLinkIcon: true,
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/OlaMushroom/nekos-moe-wrapper/tree/docs/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe-wrapper' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/nekos-moe'}
    ],
    nav: [
      { text: 'Guide', link: '/guide/jsr'},
      { text: 'Reference', link: '/reference/interfaces'},
      { text: `v${version}`, items: [
        { text: 'GitHub', link: `https://github.com/OlaMushroom/nekos-moe-wrapper/releases/tag/${version}`},
        { text: 'NPM', link: `https://www.npmjs.com/package/nekos-moe/v/${version}`},
        { text: 'JSR', link: `https://jsr.io/@om/nekos-moe@${version}` }
      ]}
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Using JSR', link: '/guide/jsr'},
          ]
        },
        {
          text: 'Usage Examples',
          items: [
            { text: 'API', link: '/guide/api'}
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Interfaces', link: '/reference/interfaces'}
          ]
        }
      ]
    }
  }
});
