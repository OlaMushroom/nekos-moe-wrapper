// src/main.ts
async function errorHandler(res) {
  let msg = "";
  if (res.headers.get("content-type")?.includes("application/json")) {
    const data = await res.json();
    msg = `${data.message}${"id" in data ? `\nID: ${data.id}` : ""}`;
  }
  throw Error(`HTTP Error: ${res.status} ${res.statusText}\n`, { cause: msg });
}
async function sendRequest(endpoint, options = {}) {
  const url = new URL(endpoint, "https://nekos.moe/api/v1/");
  console.log(`URL: ${url.toString()}\nTimestamp: ${Date.now()}`);
  try {
    const res = await fetch(url, options);
    if (!res.ok)
      await errorHandler(res);
    return await res.json();
  } catch (e) {
    throw Error("Error: ", { cause: e });
  }
}
function create(file, name, type) {
  try {
    const image = new File([file], `${name}.${type}`, {
      type: `image/${type}`
    });
    console.log("File created successfully:\n%o", {
      name: image.name,
      type: image.type,
      size: image.size,
      lastModified: image.lastModified
    });
    return image;
  } catch (e) {
    throw Error("Error: ", { cause: e });
  }
}
async function getPost(id) {
  return (await sendRequest(`images/${id}`)).image;
}
async function searchPost(options = {}) {
  return (await sendRequest("images/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options)
  })).images;
}
async function random(count = 1, nsfw) {
  const params = new URLSearchParams({ count: count.toString() });
  if (nsfw !== undefined)
    params.append("nsfw", nsfw.toString());
  return (await sendRequest(`random/image?count=${count}${nsfw !== undefined ? `&nsfw=${nsfw}` : ""}`)).images;
}
async function upload(form) {
  const formData = new FormData;
  formData.append("image", form.image);
  formData.append("nsfw", form.nsfw.toString());
  formData.append("tags", form.tags.toString());
  if (form.artist !== undefined)
    formData.append("artist", form.artist);
  return await sendRequest("images", {
    method: "POST",
    headers: {
      Authorization: form.token,
      "Content-Type": "multipart/form-data"
    },
    body: formData
  });
}
async function getUser(id, token) {
  const headers = new Headers;
  if (token !== undefined)
    headers.append("Authorization", token);
  return (await sendRequest(`user/${id}`, { headers })).user;
}
async function searchUser(options = {}) {
  return (await sendRequest("users/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options)
  })).users;
}
async function auth(username, password) {
  return (await sendRequest("auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })).token;
}
async function regen(token) {
  await sendRequest("auth", {
    method: "POST",
    headers: { Authorization: token }
  });
}

// src/index.ts
var _links = {
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
    repo: "https://github.com/OlaMushroom/nekos-moe-wrapper",
    docs: {
      url: "https://nekos-moe-wrapper.vercel.app",
      repo: "https://github.com/OlaMushroom/nekos-moe-wrapper/tree/docs"
    }
  }
};
export {
  upload,
  searchUser,
  searchPost,
  regen,
  random,
  getUser,
  getPost,
  create,
  auth,
  _links
};
