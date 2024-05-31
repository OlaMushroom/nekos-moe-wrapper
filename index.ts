/** function main(endpoint: string, options: object): Promise<any> */
async function main(endpoint: string, options: object): Promise<any> {
  const url = (new URL(endpoint, "https://nekos.moe/api/v1/")).toString();
  console.log(`URL: ${url}`);

  try {
    return await (await fetch(url, options)).json();
  } catch (err) {
    throw Error("Error: ", { cause: err });
  }
}

/** function auth(_username: string, _password: string): Promise<any> */
export async function auth(_username: string, _password: string): Promise<any> {
  return await main("auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: _username,
      password: _password
    })
  });
}

/** function image(id: string): Promise<any> */
export async function image(id: string): Promise<any> {
  return await main(`images/${id}`, {});
}

/** function random(count?: number, nsfw?: boolean): Promise<any> */
export async function random(count?: number, nsfw?: boolean): Promise<any> {
  let query = "?";
  query = count !== undefined ? query + "count=" + count : query;
  query = nsfw !== undefined ? query + "&nsfw=" + nsfw : query;
  return await main(`random/image${query}`, {});
}

/** function search(_body: object): Promise<any> */
export async function search(_body: object): Promise<any> {
  return await main("images/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_body)
  });
}

/** function upload(auth: string, image: File, tags: Array<string>, nsfw: boolean, artist?: string): Promise<any> */
export async function upload(auth: string, image: File, tags: Array<string>, nsfw: boolean, artist?: string): Promise<any> {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("tags", tags.toString());
  formData.append("nsfw", nsfw.toString());
  if (artist !== undefined) formData.append("artist", artist);

  return await main("images", {
    method: "POST",
    headers: {
      "Authorization": auth,
      "Content-Type": "multipart/form-data",
    },
    body: formData
  });
}

//https://developer.mozilla.org/en-US/docs/Web/API/Response#a_php_call
