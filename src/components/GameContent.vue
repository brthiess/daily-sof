<template>
  <div class="game-content-container">
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
        @click="answerQuestion(answer.number)"
        class="quiz-answer"
        :class="{
          'answer-correct': answer.correct && submittedAnswer,
          'answer-incorrect': !answer.correct && submittedAnswer,
          'this-answer-picked': answer.number == answerNumber,
          'submitted-answer': submittedAnswer,
        }"
      >
        <ul class="rogue-answers-container">
          <li
            v-for="(rogueAnswer, index) in game.rogueAnswers"
            :key="'rogueAnswer-' + index"
            class="rogue-answer-image-container"
            v-bind:class="{ answered: game.answered }"
          >
            <div v-if="rogueAnswer.number == answer.number">
              <img class="rogue-answer-image" v-bind:src="rogueAnswer.image" />
              <p class="rogue-answer-name">{{ rogueAnswer.name }}</p>
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
          'selected-question': selectedQuestion,
          'submitted-answer': submittedAnswer,
        }"
      >
        Submit
      </button>
    </div>
    <div class="correct-modal">
      <lottie-animation
        v-if="showCorrectAnimation"
        path="correct.json"
        background="transparent"
        :speed="1"
        :loop="false"
        :autoPlay="showCorrectAnimation"
      ></lottie-animation>
    </div>
    <div class="correct-modal">
      <lottie-animation
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
import { defineComponent, ref } from "vue";
import { games } from "../games";
import { setAreStatsOpen } from "../layout-state";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs
import { addLoss, addWin, getUserStats } from "@/user-state";

export default defineComponent({
  name: "GameContent",
  components: {
    LottieAnimation,
  },
  setup() {
    const now = new Date();
    const startDate = new Date("April 8, 2022");
    const diff = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    const game = games.filter((game) => game.day == diffDays)[0];

    const selectedQuestion = ref(false);
    const answerNumber = ref<number>();

    const answeredCorrect = ref<boolean>(false);
    const showCorrectAnimation = ref<boolean>(false);
    const showIncorrectAnimation = ref<boolean>(false);
    const userStats = getUserStats();

    const alreadySubmittedAnswer = (): boolean => {
      let alreadySubmittedAnswer = false;
      userStats.gamesPlayed.forEach((gameId) => {
        if (gameId == game.id) {
          alreadySubmittedAnswer = true;
        }
      });
      return alreadySubmittedAnswer;
    };
    const submittedAnswer = ref(alreadySubmittedAnswer());
    console.log(submittedAnswer.value);
    const answerQuestion = (number: number) => {
      if (submittedAnswer.value) {
        return;
      }
      answerNumber.value = number;
      selectedQuestion.value = true;
    };
    const submitAnswer = () => {
      if (selectedQuestion.value && !submittedAnswer.value) {
        submittedAnswer.value = true;
        if (answerNumber.value == game.correctChoice) {
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
    return {
      game,
      answerQuestion,
      selectedQuestion,
      answerNumber,
      submittedAnswer,
      submitAnswer,
      answeredCorrect,
      showCorrectAnimation,
      showIncorrectAnimation,
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
}
.quiz-episode-number {
  color: #333;
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
    pointer-events: none;
  }
  @media @tablets {
    margin: 10px 0;
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
}
.quiz-answer.this-answer-picked.answer-incorrect {
  background: #e74c3c;
}
.quiz-answer.answer-correct {
  background: #5fba7d;
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
  top: -43px;
  right: 15px;
  pointer-events: none;
  @media @laptops {
    top: -30px;
  }
  @media @tablets {
    top: -13px;
  }
}
.rogue-answer-image-container {
  position: relative;
  height: 40px;
  width: 40px;
  margin-left: 10px;
  transition: all 0.3s;
  transition-delay: 1s;
  transform: translateY(-100px);
  opacity: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media @laptops {
    height: 25px;
    width: 25px;
  }
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
}
.rogue-answer-image {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
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
  visibility: hidden;
  opacity: 0;
  transition-delay: 0.05s;
  min-width: min-content;
  &:hover {
    opacity: 1;
    visibility: visible;
  }
  @media @smartphones {
    font-size: 13px;
  }
}
.rogue-answer-image:hover + .rogue-answer-name {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
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
}
</style>
