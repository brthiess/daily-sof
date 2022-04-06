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
        <p class="name">{{ ranking.name }}</p>
        <p class="percentage">
          {{
            Math.round(
              (ranking.numberOfGamesWon / ranking.numberOfGamesPlayed) * 100
            )
          }}%
        </p>
      </li>
    </ul>
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
    console.log(userStats);

    const rogueStats: Record<string, RogueStats> = {};
    getUserStats().gamesPlayed.forEach((gameId) => {
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
    rogueStats["you"].numberOfGamesPlayed = userStats.value.numberOfGamesPlayed;
    rogueStats["you"].numberOfGamesWon = userStats.value.numberOfGamesWon;
    rogueStats["you"].name = "You";

    let rankings = Array<RogueStats>();
    Object.keys(rogueStats).map(function (key) {
      let s = rogueStats[key];
      rankings.push(s);
      return rankings;
    });

    rankings.sort(compare);

    return {
      userStats,
      rogueStats,
      rankings,
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
  padding: 0 5px;
  border-bottom: 1px solid #ccc;
  &.you {
    color: white;
    background: #105c90;
  }
}
.rank {
  width: 30px;
}
.percentage {
  margin-left: auto;
  font-weight: bold;
}
</style>
