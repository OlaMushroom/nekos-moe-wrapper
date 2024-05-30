async function main(endpoint: string, options: object): Promise<any> {
  const url = (new URL(endpoint, 'https://nekos.moe/api/v1/')).toString();
  console.log(url);

  try {
    const res = await (await fetch(url, options)).json();
    return res;
  } catch (err) {
    throw Error('Error: ', { cause: err });
  }
}

export async function image(id: string): Promise<any> {
  return await main(`images/${id}`, {
    method: 'GET',
  });
}

export async function random(count?: number, nsfw?: boolean): Promise<any> {
  let query = '?';
  query = count !== undefined ? query + 'count=' + count : query;
  query = nsfw !== undefined ? query + '&nsfw=' + nsfw : query;

  return await main(`random/image${query}`, {
    method: 'GET',
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
  return await main('images/search', {
    method: 'POST',
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
  });
}

export async function upload(
  auth: string,
  image: File,
  tags: Array<string>,
  nsfw: boolean,
  artist?: string
): Promise<any> {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('tags', tags.toString());
  formData.append('nsfw', nsfw.toString());
  if (artist !== undefined) formData.append('artist', artist);

  return await main('images', {
    method: 'POST',
    headers: {
      'Authorization': auth,
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  });
}

//https://developer.mozilla.org/en-US/docs/Web/API/Response#a_php_call
