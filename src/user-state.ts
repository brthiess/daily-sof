import { reactive } from "vue";
import { getCache } from "./cache";
import { UserStats } from "./types/UserStats";

const userStats = reactive({
  numberOfGamesPlayed: 0,
  numberOfGamesWon: 0,
  currentStreak: 0,
  longestStreak: 0,
  gamesPlayed: [],
} as UserStats);

/**
 * A function to get the current layout information
 *
 * @returns {Location} A layout object
 */
export const getUserStats = (): UserStats => {
  return userStats;
};

export const loadUserStats = (): void => {
  const cache = getCache();
  const userStatsFromCache = cache.getItem("userStats") as UserStats;
  if (userStatsFromCache) {
    userStats.currentStreak = userStatsFromCache.currentStreak;
    userStats.gamesPlayed = userStatsFromCache.gamesPlayed;
    userStats.longestStreak = userStatsFromCache.longestStreak;
    userStats.numberOfGamesPlayed = userStatsFromCache.numberOfGamesPlayed;
    userStats.numberOfGamesWon = userStatsFromCache.numberOfGamesWon;
  }
  saveToCache();
};

export const addWin = (gameId: number): void => {
  userStats.currentStreak += 1;
  if (userStats.currentStreak > userStats.longestStreak) {
    userStats.longestStreak = userStats.currentStreak;
  }
  userStats.numberOfGamesWon++;
  addGame(gameId);
};

const addGame = (gameId: number): void => {
  userStats.gamesPlayed.push(gameId);
  userStats.numberOfGamesPlayed++;
  saveToCache();
};

export const addLoss = (gameId: number): void => {
  userStats.currentStreak = 0;
  addGame(gameId);
};

export const saveToCache = (): void => {
  const cache = getCache();
  cache.setItem("userStats", userStats);
};
