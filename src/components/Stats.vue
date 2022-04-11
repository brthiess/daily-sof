<template>
  <div class="stats-container">
    <h4>Statistics</h4>
    <div class="numbers-container">
      <div class="stat">
        <p class="number">
          {{ userStats.numberOfGamesPlayed }}
        </p>
        <p class="number-text">Played</p>
      </div>
      <div class="stat">
        <p class="number">
          {{
            Math.round(
              (userStats.numberOfGamesWon /
                (userStats.numberOfGamesPlayed == 0
                  ? 1
                  : userStats.numberOfGamesPlayed)) *
                100
            )
          }}
        </p>
        <p class="number-text">Win %</p>
      </div>
      <div class="stat">
        <p class="number">
          {{ userStats.currentStreak }}
        </p>
        <p class="number-text">Current Streak</p>
      </div>
      <div class="stat">
        <p class="number">
          {{ userStats.longestStreak }}
        </p>
        <p class="number-text">Max Streak</p>
      </div>
    </div>
    <h4>Rankings</h4>
    <ul>
      <li
        v-for="(ranking, index) in rankings"
        :key="ranking.name"
        :class="ranking.name == 'You' ? 'you' : ''"
      >
        <p class="rank">{{ index + 1 }}</p>
        <div
          class="bar"
          :style="
            'background: linear-gradient(90deg, ' +
            (ranking.name == 'You'
              ? '#006266, #006266 '
              : '#105c90, #105c90 ') +
            (ranking.numberOfGamesWon / ranking.numberOfGamesPlayed) * 100 +
            '%, #888 ' +
            (ranking.numberOfGamesWon / ranking.numberOfGamesPlayed) * 100 +
            '%, #888);'
          "
        >
          <p class="name">{{ ranking.name }}</p>
          <p class="percentage">
            {{
              Math.round(
                (ranking.numberOfGamesWon / ranking.numberOfGamesPlayed) * 100
              )
            }}%
          </p>
        </div>
      </li>
    </ul>
    <div class="next-sof">
      <h4 class="next-sof-text">Next Science Or Fiction</h4>
      <div class="time-left">{{ timeLeft }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserStats } from "@/types/UserStats";
import { getUserStats } from "@/user-state";
import { defineComponent, ref } from "vue";
import { games } from "../games";
import { RogueStats } from "../types/RogueStats";

export default defineComponent({
  name: "Stats",
  setup() {
    const userStats = ref<UserStats>(getUserStats());

    let rankings = compileRogueStats();

    const getTimeString = () => {
      let endTime = new Date();
      endTime.setDate(new Date().getDate() + 1);
      endTime.setHours(0, 0, 0, 0);
      let hoursLeft = Math.abs(endTime.getTime() - new Date().getTime()) / 36e5;
      let minutesLeft = 60 * (hoursLeft % 1);
      let secondsLeft = 60 * (minutesLeft % 1);
      let timeString =
        Math.floor(hoursLeft) +
        ":" +
        Math.floor(minutesLeft) +
        ":" +
        Math.floor(secondsLeft);
      return timeString;
    };

    let timeLeft = ref(getTimeString());
    setInterval(function () {
      timeLeft.value = getTimeString();
    }, 1000);

    return {
      userStats,
      rankings,
      timeLeft,
    };
  },
});

function compare(a: RogueStats, b: RogueStats) {
  let aPercentage = a.numberOfGamesWon / a.numberOfGamesPlayed;
  let bPercentage = b.numberOfGamesWon / b.numberOfGamesPlayed;
  if (aPercentage > bPercentage) {
    return -1;
  }
  if (aPercentage < bPercentage) {
    return 1;
  }
  return 0;
}

function compileRogueStats(): Array<RogueStats> {
  const userStats = getUserStats();
  const rogueStats: Record<string, RogueStats> = {};
  userStats.gamesPlayed.forEach((gameId) => {
    games.forEach((game) => {
      if (gameId == game.id) {
        game.rogueAnswers.forEach((rogue) => {
          if (!rogueStats[rogue.id]) {
            rogueStats[rogue.id] = {
              numberOfGamesPlayed: 0,
              numberOfGamesWon: 0,
              name: rogue.name,
            };
          }
          rogueStats[rogue.id].numberOfGamesPlayed++;
          rogueStats[rogue.id].numberOfGamesWon += rogue.correct ? 1 : 0;
        });
      }
    });
  });
  rogueStats["you"] = {} as RogueStats;
  rogueStats["you"].numberOfGamesPlayed = userStats.numberOfGamesPlayed;
  rogueStats["you"].numberOfGamesWon = userStats.numberOfGamesWon;
  rogueStats["you"].name = "You";
  const sortedRogueStats = sortRogueStats(rogueStats);
  return sortedRogueStats;
}

function sortRogueStats(rogueStats: Record<string, RogueStats>) {
  let rankings = Array<RogueStats>();
  Object.keys(rogueStats).map(function (key) {
    let s = rogueStats[key];
    rankings.push(s);
    return rankings;
  });

  rankings.sort(compare);
  return rankings;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h4 {
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0;
  &:first-child {
    margin-top: 0;
  }
}
.numbers-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.stat {
  text-align: center;
  width: 80px;
}
.number {
  font-size: 46px;
}
.number-text {
  font-size: 16px;
}
ul {
  list-style: none;
  max-width: 280px;
  margin: 0 auto 20px;
}
li {
  display: flex;
  height: 35px;
  align-items: center;
  margin: 12px 0;
  width: 100%;
}
.bar {
  display: flex;
  color: white;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
}
.rank {
  width: 30px;
}
.percentage {
  margin-left: auto;
  font-weight: bold;
}
.you {
  font-weight: bold;
}
.next-sof {
  margin: 40px 0 20px;
}
.next-sof-text {
  margin: 0;
}
.time-left {
  font-size: 36px;
  text-align: center;
}
</style>
