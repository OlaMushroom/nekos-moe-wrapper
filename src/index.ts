/**
 * @module
 * @example
 * ```ts
 * import * as nekos from '@om/nekos-moe';
 * console.log(nekos.info);
 * ```
 */
export * from './main.ts';
export * as user from './user.ts';

/** Description */
export const info = {
  website: {
    url: 'https://nekos.moe',
    repo: 'https://github.com/Nekos-moe/website'
  },
  api: {
    url: 'https://nekos.moe/api/v1',
    repo: 'https://github.com/Nekos-moe/api',
    docs: {
      url: 'https://docs.nekos.moe',
      repo: 'https://github.com/Nekos-moe/docs'
    }
  },
  wrapper: {
    url: 'https://jsr.io/@om/nekos-moe',
    repo: 'https://github.com/OlaMushroom/nekos-moe-wrapper',
    docs: {
      url: 'https://nekos-moe-wrapper.vercel.app',
      repo: 'https://github.com/OlaMushroom/nekos-moe-wrapper/tree/docs'
    }
  }
};
