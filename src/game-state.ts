import { reactive } from "vue";
import { Game } from "./games";
import { getCache } from "./cache";

export interface CurrentGame {
  game: Game | undefined;
  submittedAnswer: boolean;
  submittedAnswerNumber: number | undefined;
  selectedAnswer: boolean;
  selectedAnswerNumber: number | undefined;
}

const currentGame = reactive({
  game: undefined,
  submittedAnswer: false,
  submittedAnswerNumber: undefined,
  selectedAnswerNumber: undefined,
  selectedAnswer: false,
} as CurrentGame);

/**
 * A function to get the current layout information
 *
 * @returns {Location} A layout object
 */
export const getCurrentGame = (): CurrentGame => {
  return currentGame;
};

export const loadCurrentGame = (): void => {
  const cache = getCache();
  const currentGameFromCache = cache.getItem("currentGame") as CurrentGame;
  if (currentGameFromCache) {
    currentGame.game = currentGameFromCache.game;
    currentGame.submittedAnswer = currentGameFromCache.submittedAnswer;
    currentGame.submittedAnswerNumber =
      currentGameFromCache.submittedAnswerNumber;
    currentGame.selectedAnswer = currentGameFromCache.selectedAnswer;
    currentGame.selectedAnswerNumber =
      currentGameFromCache.selectedAnswerNumber;
  }
};

export const saveToCache = (): void => {
  const cache = getCache();
  cache.setItem("currentGame", currentGame);
};

export const setGame = (game: Game): void => {
  currentGame.game = game;
  saveToCache();
};

export const setSubmittedAnswer = (
  submittedAnswerNumber: number | undefined
): void => {
  currentGame.submittedAnswer = true;
  currentGame.submittedAnswerNumber = submittedAnswerNumber;
  saveToCache();
};

export const setSelectedAnswer = (
  selectedAnswerNumber: number | undefined
): void => {
  currentGame.selectedAnswer = true;
  currentGame.selectedAnswerNumber = selectedAnswerNumber;
  saveToCache();
};

export const resetCurrentGame = (): void => {
  currentGame.submittedAnswer = false;
  currentGame.submittedAnswerNumber = undefined;
  currentGame.game = undefined;
  currentGame.selectedAnswerNumber = undefined;
  currentGame.selectedAnswer = false;
  saveToCache();
};
