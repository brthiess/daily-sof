<template>
  <div
    class="dialog-container"
    :class="{ 'dark-theme': showDarkTheme, 'high-contrast': showHighContrast }"
  >
    <div class="backdrop" @click="closeDialog"></div>
    <div class="dialog">
      <div class="close-button" @click="closeDialog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            :fill="showDarkTheme ? 'white' : 'black'"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
      </div>
      <div class="content-container">
        <Stats v-show="showStats"></Stats>
        <Instructions v-show="showInstructions"></Instructions>
        <Settings v-show="showSettings"></Settings>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { setIsDialogOpen, getLayout } from "../layout-state";
import Stats from "./Stats.vue";
import Instructions from "./Instructions.vue";
import Settings from "./Settings.vue";
import { getSettings } from "../settings-state";

export default defineComponent({
  name: "ModalDialog",
  components: {
    Stats,
    Instructions,
    Settings,
  },
  setup() {
    const closeDialog = () => {
      setIsDialogOpen(false);
    };
    const showStats = computed(() => getLayout().areStatsOpen);
    const showInstructions = computed(() => getLayout().areInstructionsOpen);
    const showSettings = computed(() => getLayout().areSettingsOpen);
    let showDarkTheme = computed(() => getSettings().darkTheme);
    let showHighContrast = computed(() => getSettings().highContrast);
    return {
      closeDialog,
      showStats,
      showInstructions,
      showSettings,
      showDarkTheme,
      showHighContrast,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../styles/index.less";
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #0009;
}
.dialog {
  position: fixed;
  top: 150px;
  left: calc(50% - 250px);
  background: white;
  width: 500px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-flow: column;
  padding-top: 20px;
  .dark-theme & {
    background: #333;
    color: white;
  }
  @media @mini-tablets {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    border-radius: 0;
  }
}
.close-button {
  align-self: flex-end;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 0;
}
</style>
