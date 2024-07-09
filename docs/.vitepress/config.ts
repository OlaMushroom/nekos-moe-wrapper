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
    socialLinks: [{ icon: 'github', link: 'https://github.com/OlaMushroom/nekos-moe-wrapper' }],
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: `v${version}`, items: [{ text: 'JSR', link: `https://jsr.io/@om/nekos-moe@${version}` }] }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        link: '/guide'
      },
      {
        text: 'Usage Examples',
        link: '/guide/usage'
      },
      {
        text: 'Interfaces',
        link: '/guide/interfaces'
      }
    ]
  }
});
