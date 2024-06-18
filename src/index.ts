export { createFile } from './main.ts';
export { post } from './post.ts';
export { user, auth } from './user.ts';
export type { PostFields, UserFields, UploadFields } from './types.ts';

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

//https://developer.mozilla.org/en-US/docs/Web/API/Response#a_php_call
