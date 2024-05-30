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

export async function random(count: number = 1, nsfw?: boolean): Promise<any> {
  let query = "?";
  if (count < 1 || count > 100) {
    throw Error("Invalid count value, must be an integer between 1 and 100.");
  }
  else {
    query += "count=" + count;
  }
  query = nsfw !== undefined ? query + "&nsfw=" + nsfw : query;
  return await main(`random/image${query}`, {
    method: "GET",
  });
}

export async function search(): Promise<any> {
  return await main("images/search", {
    method: "POST",
    body: {

    }
  });
}

//https://developer.mozilla.org/en-US/docs/Web/API/Response#a_php_call
