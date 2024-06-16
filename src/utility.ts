import { readFileSync } from "node:fs";

/**
 * A utility class that provides various methods for working with files and buffers.
 */
export class Utility {
  /**
   * Converts a File object to an ArrayBuffer.
   *
   * @param file - The File object to convert.
   * @returns A Promise that resolves to the ArrayBuffer representation of the input File.
   * @remarks
   * The function uses the FileReader API to read the contents of the File as an ArrayBuffer.
   * The Promise resolves with the ArrayBuffer when the file is successfully read.
   * @privateRemarks
   * Currently not working with Bun, likely due to unavailable implementation of the FileReader interface in version 1.1.12 and earlier.
   */
  static fromFileToArrayBuffer(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * Creates a new File object from a given file path, file name, and file type.
   *
   * @param filePath - The path of the file to be converted into a File object.
   * @param fileName - The name of the new File object.
   * @param fileType - The MIME type of the new File object. It should be either "image/jpeg" or "image/png".
   * @returns A new File object created from the given file path, file name, and file type.
   * @throws Will throw an error if the file cannot be read or if the file type is not supported.
   * @remarks
   * The function reads the file content using the `readFileSync` function from the `node:fs` module, then converts the file content from a Buffer to an ArrayBuffer, which is used for creating a File object.
   */
  static createFile(
    filePath: string,
    fileName: string,
    fileType: "image/jpeg" | "image/png"
  ): File {
    try {
      const imageFile = new File([readFileSync(filePath)], fileName, {
        type: fileType,
      });
      console.log("File created successfully.");
      return imageFile;
    } catch (err) {
      throw Error("Error: ", { cause: err });
    }
  }
}
