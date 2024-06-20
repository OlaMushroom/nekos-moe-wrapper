import { readFileSync } from 'node:fs';

async function errorHandler(res: Response) {
  let msg = '';
  const contentType = res.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    const data = await res.json();
    msg = data.message;
    if ('id' in data) msg += `\nID: ${data.id}`;
  }
  throw Error(`HTTP Error: ${res.status} ${res.statusText}`, { cause: msg });
}

/**
 * Main function to handle API requests.
 *
 * @param endpoint - The API endpoint to call.
 * @param options - The options for fetch request.
 * @returns A Promise that resolves to the JSON response from the API.
 * @throws Will throw an error if the fetch request fails.-
 */
async function request(endpoint: string, options: object = {}): Promise<unknown> {
  const url = new URL(endpoint, 'https://nekos.moe/api/v1/');
  console.log(`URL: ${url.toString()}`);

  try {
    const res = await fetch(url, options);
    if (!res.ok) await errorHandler(res);
    return await res.json();
  } catch (err) {
    throw Error('Error: ', { cause: err });
  }
}

/**
 * Creates a new File object from a given file path.
 *
 * @param filePath - The path to the file to be read.
 * @param fileName - The name of the new File object.
 * @param fileType - The MIME type of the file. Must be either 'image/jpeg' or 'image/png'.
 * @returns A new File object.
 */
function createFile(
  filePath: string,
  fileName: string,
  fileType: 'image/jpeg' | 'image/png'
): File {
  try {
    const imageFile = new File([readFileSync(filePath)], fileName, {
      type: fileType
    });
    console.log('File created successfully.');
    return imageFile;
  } catch (err) {
    throw Error('Error: ', { cause: err });
  }
}

export { request, createFile };
