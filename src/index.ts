export { createFile } from './main.ts';
export { post, upload } from './post.ts';
export { user } from './user.ts';
export { auth } from './auth.ts';
export type { PostFields, UserFields, UploadFields } from './types.ts';

/**
 * Contains various information including URLs, repos and docs.
 */
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
    repo: 'https://github.com/OlaMushroom/nekos-moe.js',
    docs: {
      url: 'https://nekos-moe-js.vercel.app',
      repo: 'https://github.com/OlaMushroom/nekos-moe.js/docs'
    }
  }
};
