import { reactive } from "vue";
import { getCache } from "./cache";

export interface Settings {
  darkTheme: boolean;
  highContrast: boolean;
}

const settings = reactive({
  darkTheme: false,
  highContrast: false,
} as Settings);

/**
 * A function to get the current layout information
 *
 * @returns {Location} A layout object
 */
export const getSettings = (): Settings => {
  return settings;
};

export const loadSettings = (): void => {
  const cache = getCache();
  const settingsFromCache = cache.getItem("settings") as Settings;
  if (settingsFromCache) {
    settings.darkTheme = settingsFromCache.darkTheme;
    settings.highContrast = settingsFromCache.highContrast;
  }
};

export const saveToCache = (): void => {
  const cache = getCache();
  cache.setItem("settings", settings);
};

export const setHighContrast = (highContrast: boolean): void => {
  settings.highContrast = highContrast;
  saveToCache();
};

export const setDarkTheme = (darkTheme: boolean): void => {
  settings.darkTheme = darkTheme;
  saveToCache();
};
