async function main(endpoint: string, options: object): Promise<any> {
  const url = (new URL(endpoint, "https://nekos.moe/api/v1/")).toString();
  console.log(url);
  try {
    const res = await (await fetch(url, options)).json();
    return res;
  } catch (err) {
    throw Error("Error: ", { cause: err });;
  }
}

export async function image(id: string): Promise<any> {
  return await main(`images/${id}`, {
    method: "GET",
  });
}

export async function random(count?: number, nsfw?: boolean): Promise<any> {
  let query = "?";
  query = count !== undefined ? query + "count=" + count : query;
  query = nsfw !== undefined ? query + "&nsfw=" + nsfw : query;
  return await main(`random/image${query}`, {
    method: "GET",
  });
}

export async function search(
  id?: string,
  nsfw?: boolean,
  uploader?: string | object,
  artist?: string,
  tags?: Array<string>,
  sort?: string,
  posted_before?: number,
  posted_after?: number,
  skip?: number,
  limit?: number
): Promise<any> {
  return await main("images/search", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      nsfw: nsfw,
      uploader: uploader,
      artist: artist,
      tags: tags,
      sort: sort,
      posted_before: posted_before,
      posted_after: posted_after,
      skip: skip,
      limit: limit
    })
  })
}

//https://developer.mozilla.org/en-US/docs/Web/API/Response#a_php_call
