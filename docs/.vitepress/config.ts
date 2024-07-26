import { defineConfig } from 'vitepress';
import { transformerTwoslash } from '@shikijs/vitepress-twoslash';

const version = '0.7.0';

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
    footer: { message: '<a href="https://docs.nekos.moe">Original API documentation</a>' },
    nav: [
      { text: `v${version}`, items: [
        { text: 'NPM', link: `https://www.npmjs.com/package/nekos-moe/v/${version}`},
        { text: 'JSR', link: `https://jsr.io/@om/nekos-moe@${version}` }
      ]}
    ],
    sidebar: {
      '/guide/': [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'Usage Examples', link: '/guide/api' },
        { text: 'Build from Source', link: '/guide/build' }
      ]
    }
  }
});
