import { Cache } from "./Cache";
import { CacheEntry } from "./CacheEntry";
import { CacheValue } from "./CacheValue";

/**
 * A class for the cache based on the local storage.
 */
export class LocalStorageCache implements Cache {
  setItem(key: string, value: CacheValue): void {
    const cacheEntry = new CacheEntry(value);
    const cacheEntryString = JSON.stringify(cacheEntry);
    localStorage.setItem(key, cacheEntryString);
  }

  getItem(key: string): CacheValue | undefined {
    this.assertNotEmpty(key, "key");

    const cacheEntry = this.getCacheEntry(key);

    if (cacheEntry === undefined) return undefined;

    return cacheEntry.value;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  removeAllItems(): void {
    localStorage.clear();
  }

  getSize(): number {
    return localStorage.length;
  }

  private getCacheEntry(key: string): CacheEntry | undefined {
    const cacheEntryString = localStorage.getItem(key);

    if (cacheEntryString === null) return undefined;

    try {
      return JSON.parse(cacheEntryString);
    } catch {
      return undefined;
    }
  }

  private removeItems(keys: string[]) {
    for (const key of keys) {
      this.removeItem(key);
    }
  }

  private assertNotEmpty(parameter: string, parameterName: string): void {
    if (parameter.length === 0) {
      throw new Error(`The ${parameterName} must not be empty.`);
    }
  }

  private isInThePast(date: Date): boolean {
    const now = new Date();
    return now > date;
  }
}
