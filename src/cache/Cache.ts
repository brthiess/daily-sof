import type { CacheValue } from "./CacheValue";

/**
 * An interface for client-side caching.
 */
export interface Cache {
  /**
   * Sets the item with the given key/value.
   *
   * @param key The key to use to set the given value.
   * @param value The value to put in the cache.
   */
  setItem(key: string, value: CacheValue): void;
  /**
   * Gets the item based on the given key.
   * Returns undefined if it does not exist
   *
   * @param key The key to use for an attempt of getting an item from the cache.
   * @returns The value of the given key or undefined
   */
  getItem(key: string): CacheValue | undefined;
  /**
   * Deletes an item from the cache.
   *
   * @param key The key to use to retrive an item.
   */
  removeItem(key: string): void;
  /**
   * Deletes all items from the cache.
   */
  removeAllItems(): void;
  /**
   * Returns the number of items in the cache.
   */
  getSize(): number;
}
