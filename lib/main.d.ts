import type { PostSearch, UserSearch, UploadForm } from './types.ts';
interface PostData {
    id: string;
    approver?: {
        id: string;
        username: string;
    };
    artist?: string;
    comments?: [];
    createdAt: string;
    favorites?: number;
    likes?: number;
    pending?: boolean;
    nsfw: string;
    tags: string[];
    uploader: {
        id: string;
        username: string;
    };
}
interface UserData {
    id: string;
    createdAt: string;
    email: string;
    favorites?: string[];
    favoritesReceived: number;
    likes?: string[];
    likesReceived: number;
    roles: string[];
    savedTags?: string[];
    uploads: number;
    username: string;
    verified?: boolean;
}
interface UploadData {
    image: PostData;
    image_url: string;
    post_url: string;
}
/**
 * Creates a new image using `File` object.
 * @remarks File name is without file extension.
 */
export declare function create(file: BlobPart, name: string, type: 'jpeg' | 'png'): File;
/** Get a `Post` using ID. */
export declare function getPost(id: string): Promise<PostData>;
/** Search for `Post`(s). */
export declare function searchPost(options?: PostSearch): Promise<PostData[]>;
/** Get random `Post`(s). */
export declare function random(count?: number, nsfw?: boolean): Promise<PostData[]>;
/**
 * Upload an image as pending `Post`.
 * @remarks This function uses the `FormData` object and set `'Content-Type': 'multipart/form-data'` to send the data.
 */
export declare function upload(form: UploadForm): Promise<UploadData>;
/**
 * Get a `User` using ID.
 * @remarks If `id == '@me'` and a valid token is provided, the user's data will be returned.
 */
export declare function getUser(id: string, token?: string): Promise<UserData>;
/** Search for `User`(s). */
export declare function searchUser(options?: UserSearch): Promise<UserData[]>;
/** Get token. */
export declare function auth(username: string, password: string): Promise<string>;
/**
 * Regenerate token.
 * @remarks The new token will not be returned.
 */
export declare function regen(token: string): Promise<void>;
export {};
