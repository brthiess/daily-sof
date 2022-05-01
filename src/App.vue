<template>
  <div
    class="app"
    :class="{ 'dark-theme': showDarkTheme, 'high-contrast': showHighContrast }"
  >
    <navigation></navigation>
    <game-content></game-content>
    <modal-dialog
      v-show="showDialog"
      class="modal-dialog"
      :class="showDialog ? 'show-dialog' : ''"
    ></modal-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ModalDialog from "./components/ModalDialog.vue";
import Navigation from "./components/Navigation.vue";
import { getLayout, setAreInstructionsOpen } from "./layout-state";
import GameContent from "./components/GameContent.vue";
import { loadUserStats, getUserStats } from "./user-state";
import { getSettings, loadSettings } from "./settings-state";

export default defineComponent({
  name: "App",
  components: {
    ModalDialog,
    Navigation,
    GameContent,
  },
  setup() {
    loadUserStats();
    loadSettings();
    if (getUserStats().numberOfGamesPlayed == 0) {
      setAreInstructionsOpen(true);
    }
    const showDialog = computed(() => {
      return getLayout().isDialogOpen;
    });
    let showDarkTheme = computed(() => getSettings().darkTheme);
    let showHighContrast = computed(() => getSettings().highContrast);
    return {
      showDialog,
      showDarkTheme,
      showHighContrast,
    };
  },
  watch: {
    // whenever question changes, this function will run
    showDarkTheme(showDarkTheme: boolean) {
      if (showDarkTheme) {
        document.querySelector("html")?.classList.add("dark-theme");
      } else {
        document.querySelector("html")?.classList.remove("dark-theme");
      }
    },
    showDialog(showDialog: boolean) {
      if (showDialog) {
        document.querySelector("html")?.classList.add("dialog-open");
      } else {
        document.querySelector("html")?.classList.remove("dialog-open");
      }
    },
  },
});
</script>

<style lang="less">
#app,
button {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #f5f2b7;
}
html,
body,
#app,
.app {
  height: 100%;
}
html.dialog-open {
  overflow: hidden;
}
</style>
