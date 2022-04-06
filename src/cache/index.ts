import { Cache } from "./Cache";
import { LocalStorageCache } from "./LocalStorageCache";

const LOCAL_STORAGE_CACHE = new LocalStorageCache();

/**
 * Provides a shared instance of the cache based on the local storage.
 *
 * @returns a shared instance of the cache based on the local storage.
 */
export function getCache(): Cache {
  return LOCAL_STORAGE_CACHE;
}
