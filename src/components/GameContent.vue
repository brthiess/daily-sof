<template>
  <div
    class="game-content-container"
    :class="{ 'dark-theme': showDarkTheme, 'high-contrast': showHighContrast }"
  >
    <h3 class="quiz-question-type-text">Multiple Choice Question</h3>
    <div class="quiz-date-number-container">
      <p class="quiz-episode-number">Episode: #{{ game.episodeNumber }}</p>
      <p class="quiz-question-date">, {{ game.date }}</p>
    </div>
    <div class="quiz-question-container">
      <h3 class="quiz-question">{{ game.question }}</h3>
    </div>
    <ul class="quiz-answers-container">
      <li
        v-for="(answer, index) in game.choices"
        :key="'answer-' + index"
        @click="selectAnswer(answer.number)"
        class="quiz-answer"
        :class="{
          'answer-correct': answer.correct && submittedAnswer,
          'answer-incorrect': !answer.correct && submittedAnswer,
          'this-answer-picked': answer.number == selectedAnswerNumber,
          'submitted-answer': submittedAnswer,
        }"
      >
        <ul class="rogue-answers-container">
          <li
            v-for="(rogueAnswer, index) in game.rogueAnswers"
            :key="'rogueAnswer-' + index"
            class="rogue-answer-image-container"
            v-bind:class="{ answered: submittedAnswer }"
          >
            <div v-if="rogueAnswer.number == answer.number">
              <p class="rogue-answer-name">{{ rogueAnswer.name }}</p>
            </div>
          </li>
          <li
            class="rogue-answer-image-container"
            v-bind:class="{ answered: submittedAnswer }"
          >
            <div v-if="selectedAnswerNumber == answer.number">
              <p class="rogue-answer-name your-answer"><strong>You</strong></p>
            </div>
          </li>
        </ul>
        <p class="quiz-answer-text">{{ answer.text }}</p>
      </li>
    </ul>
    <div class="submit-button-container">
      <button
        @click="submitAnswer"
        class="submit-button"
        :class="{
          'selected-question': selectedAnswer,
          'submitted-answer': submittedAnswer,
        }"
      >
        Submit
      </button>
    </div>
    <div class="correct-modal" :class="showCorrectAnimation ? 'visible' : ''">
      <lottie-animation
        class="animation"
        v-if="showCorrectAnimation"
        path="correct.json"
        background="transparent"
        :speed="1"
        :loop="false"
        :autoPlay="showCorrectAnimation"
      ></lottie-animation>
    </div>
    <div class="correct-modal" :class="showIncorrectAnimation ? 'visible' : ''">
      <lottie-animation
        class="animation"
        v-if="showIncorrectAnimation"
        path="incorrect.json"
        background="transparent"
        :speed="1"
        :loop="false"
        :autoPlay="showIncorrectAnimation"
      ></lottie-animation>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { games } from "../games";
import { setAreStatsOpen } from "../layout-state";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
import { addLoss, addWin } from "@/user-state";
import { getSettings } from "../settings-state";
import {
  setGame,
  loadCurrentGame,
  getCurrentGame,
  resetCurrentGame,
  setSubmittedAnswer,
  setSelectedAnswer,
} from "@/game-state";

export default defineComponent({
  name: "GameContent",
  components: {
    LottieAnimation,
  },
  setup() {
    loadCurrentGame();
    const now = new Date();
    const startDate = new Date("April 18, 2022");
    const diff = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    const game = games.filter((game) => game.day == diffDays)[0];
    if (getCurrentGame().game?.id != game.id) {
      resetCurrentGame();
    }
    setGame(game);

    if (getCurrentGame().submittedAnswer) {
      setAreStatsOpen(true);
    }

    const selectedAnswer = computed(() => getCurrentGame().selectedAnswer);
    const selectedAnswerNumber = computed(
      () => getCurrentGame().selectedAnswerNumber
    );

    const answeredCorrect = ref<boolean>(false);
    const showCorrectAnimation = ref<boolean>(false);
    const showIncorrectAnimation = ref<boolean>(false);

    const submittedAnswer = computed(() => getCurrentGame().submittedAnswer);
    const submittedAnswerNumber = computed(
      () => getCurrentGame().submittedAnswerNumber
    );

    const selectAnswer = (number: number) => {
      if (getCurrentGame().submittedAnswer) {
        return;
      }
      setSelectedAnswer(number);
    };
    const submitAnswer = () => {
      if (selectedAnswer.value && !getCurrentGame().submittedAnswer) {
        setSubmittedAnswer(getCurrentGame().selectedAnswerNumber);
        if (getCurrentGame().submittedAnswerNumber == game.correctChoice) {
          answeredCorrect.value = true;
          showCorrectAnimation.value = true;
          addWin(game.id);
          setTimeout(function () {
            showCorrectAnimation.value = false;
          }, 3000);
        } else {
          answeredCorrect.value = false;
          showIncorrectAnimation.value = true;
          addLoss(game.id);
          setTimeout(function () {
            showIncorrectAnimation.value = false;
          }, 3000);
        }
        setTimeout(function () {
          setAreStatsOpen(true);
        }, 3000);
      }
    };

    let showDarkTheme = computed(() => getSettings().darkTheme);
    let showHighContrast = computed(() => getSettings().highContrast);
    return {
      game,
      selectAnswer,
      selectedAnswer,
      selectedAnswerNumber,
      submittedAnswer,
      submittedAnswerNumber,
      submitAnswer,
      answeredCorrect,
      showCorrectAnimation,
      showIncorrectAnimation,
      showDarkTheme,
      showHighContrast,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/index.less";
.game-content-container {
  padding: 60px 40px;
  max-width: 1500px;
  margin: auto;
}

.quiz-question-type-text {
  grid-column-start: 1;
  grid-column-end: 2;
  width: 300px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  font-size: 22px;
  color: #333;
  @media @smartphones {
    font-size: 20px;
    padding-bottom: 5px;
    width: 260px;
  }
  .dark-theme & {
    color: white;
    border-bottom: 1px solid #ccc;
  }
}

.quiz-date-number-container {
  grid-column-start: 1;
  display: flex;
  margin: 5px 0;
  color: #777;
  font-size: 15px;
  @media @smartphones {
    font-size: 13px;
  }
  .dark-theme & {
    color: #ccc;
  }
}
.quiz-episode-number {
  color: #333;
  .dark-theme & {
    color: #eee;
  }
}

.quiz-question-container {
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 40px 0;

  @media @tablets {
    margin: 25px 0;
  }

  @media @mini-tablets {
    margin: 22px 0;
  }

  @media @smartphones {
    margin: 15px 0;
  }
}

.quiz-question {
  font-size: 34px;
  color: #333;
  margin-top: 40px;
  @media @tablets {
    font-size: 28px;
  }
  @media @smartphones {
    font-size: 24px;
  }
  .dark-theme & {
    color: white;
  }
}

.quiz-answers-container {
  list-style: none;
  display: flex;
  padding: 0;
  grid-column-start: 1;
  grid-column-end: 3;
  padding-bottom: 10px;
  @media @tablets {
    flex-flow: column;
  }
  @media @tablets {
    margin-top: 40px;
  }
}

.quiz-answer {
  background-color: white;
  margin: 0 20px;
  padding: 20px 40px;
  border-radius: 5px;
  flex: 1;
  line-height: 1.4;
  transition: all 0.15s;
  position: relative;
  cursor: pointer;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  &:hover {
    background: rgb(191, 229, 255);
  }
  &.submitted-answer {
    cursor: initial;
    &:hover {
      background: white;
    }
    &.answer-correct {
      background: #5fba7d;
    }
  }
  .dark-theme & {
    background: #797979;
    color: white;
    &:hover {
      background: #505050;
    }
    &.submitted-answer {
      background: #797979;
    }
  }
  @media @tablets {
    margin: 20px 0;
    font-size: 18px;
    padding: 15px 30px;
  }

  @media @smartphones {
    font-size: 16px;
    padding: 10px 20px;

    &:first-child {
      margin-top: 0;
    }
  }
}
.quiz-answer.this-answer-picked {
  background: #105c90;
  color: white;
  .dark-theme & {
    background: #399fe5;
  }
}
.quiz-answer.this-answer-picked.answer-incorrect {
  background: #e74c3c;
  .dark-theme & {
    background: #e74c3c;
  }
}
.quiz-answer.answer-correct {
  background: #5fba7d;
  .dark-theme & {
    background: #5fba7d;
  }
}

.quiz-answer:first-child {
  margin-left: 0;
}

.quiz-answer:last-child {
  margin-right: 0;
}

.quiz-answer.selected {
  color: white;
  background-color: #105c90;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
.quiz-answer-text {
  font-weight: 400;
  font-size: 16px;
}
.rogue-answers-container {
  list-style: none;
  display: flex;
  position: absolute;
  padding: 0;
  top: -26px;
  right: 0;
}
.rogue-answer-image-container {
  position: relative;
  margin-left: 10px;
  transition: all 0.3s;
  transition-delay: 1s;
  transform: translateY(-100px);
  opacity: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
}
@iterations: 1;

.span-loop (@i) when (@i < 10) {
  .rogue-answer-image-container:nth-child(@{i}) {
    @k: (@i + 5) / 10;
    transition-delay: ~"@{k}s";
  }

  .span-loop(@i + 1);
}

.span-loop (@iterations);

.rogue-answer-image-container.answered {
  opacity: 1;
  transform: translateY(0px);
  @media @smartphones {
    transform: translateY(7px);
  }
}

.rogue-answer-name {
  background: #0e5c90;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  left: -50%;
  transition: all;
  transition-delay: 0.05s;
  min-width: min-content;
  @media @smartphones {
    font-size: 13px;
  }
}
.your-answer {
  background: rgb(0, 98, 102);
}

.quiz-question-number {
  font-size: 140px;
  align-self: flex-end;
  display: none; /*hide for now.  Not sure how we want to display this*/
}
.submit-button-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}
.submit-button {
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #ccc;
  cursor: not-allowed;
  transition: all 0.3s;
  font-size: 25px;
  text-transform: uppercase;
  @media @tablets {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  &.submitted-answer {
    transform: scale(0);
  }
}
.submit-button.selected-question {
  cursor: pointer;
  background: #105c90;
  color: white;
  box-shadow: 0px -1px 3px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    background: #084b77;
  }
}
.correct-modal {
  position: fixed;
  pointer-events: none;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  height: 100%;
  display: none;
  &.visible {
    display: block;
  }
}
.animation {
  background: #0007;
}
</style>
