// src/main.ts
import {readFileSync} from "node:fs";
async function errorHandler(res) {
  let msg = "";
  const contentType = res.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    const data = await res.json();
    msg = data.message;
    if ("id" in data)
      msg += `\nID: ${data.id}`;
  }
  throw Error(`HTTP Error: ${res.status} ${res.statusText}`, { cause: msg });
}
async function request(endpoint, options = {}) {
  const url = new URL(endpoint, "https://nekos.moe/api/v1/");
  console.log(`URL: ${url.toString()}`);
  try {
    const res = await fetch(url, options);
    if (!res.ok)
      await errorHandler(res);
    return await res.json();
  } catch (err) {
    throw Error("Error: ", { cause: err });
  }
}
var createFile = function(filePath, fileName, fileType) {
  try {
    const imageFile = new File([readFileSync(filePath)], fileName, {
      type: fileType
    });
    console.log("File created successfully.");
    return imageFile;
  } catch (err) {
    throw Error("Error: ", { cause: err });
  }
};
// src/post.ts
async function upload(token, fields) {
  const formData = new FormData;
  formData.append("image", fields.image);
  formData.append("nsfw", fields.nsfw.toString());
  formData.append("tags", fields.tags.toString());
  if (fields.artist !== undefined)
    formData.append("artist", fields.artist);
  return await request("images", {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "multipart/form-data"
    },
    body: formData
  });
}
var post = {
  async get(id) {
    const data = await request(`images/${id}`);
    return data.image;
  },
  async random(count = 1, nsfw) {
    const data = await request(`random/image?count=${count}${nsfw !== undefined ? `&nsfw=${nsfw}` : ""}`);
    return data.images;
  },
  async search(fields = {}) {
    const data = await request("images/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields)
    });
    return data.images;
  }
};
// src/user.ts
var user = {
  async get(id, token) {
    const headers = new Headers;
    if (token !== undefined)
      headers.append("Authorization", token);
    const data = await request(`user/${id}`, { headers });
    return data.user;
  },
  async search(fields = {}) {
    const data = await request("users/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields)
    });
    return data.users;
  }
};
// src/auth.ts
var auth = {
  async get(username, password) {
    const data = await request("auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    return data.token;
  },
  async regen(token) {
    await request("auth", {
      method: "POST",
      headers: { Authorization: token }
    });
  }
};

// src/index.ts
var info = {
  website: {
    url: "https://nekos.moe",
    repo: "https://github.com/Nekos-moe/website"
  },
  api: {
    url: "https://nekos.moe/api/v1",
    repo: "https://github.com/Nekos-moe/api",
    docs: {
      url: "https://docs.nekos.moe",
      repo: "https://github.com/Nekos-moe/docs"
    }
  },
  wrapper: {
    url: "https://jsr.io/@om/nekos-moe",
    repo: "https://github.com/OlaMushroom/nekos-moe.js",
    docs: {
      url: "https://nekos-moe-js.vercel.app",
      repo: "https://github.com/OlaMushroom/nekos-moe.js/docs"
    }
  }
};
export {
  user,
  upload,
  post,
  info,
  createFile,
  auth
};
