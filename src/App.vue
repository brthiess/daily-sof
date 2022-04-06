<template>
  <navigation></navigation>
  <game-content></game-content>
  <modal-dialog v-if="showDialog"></modal-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ModalDialog from "./components/ModalDialog.vue";
import Navigation from "./components/Navigation.vue";
import { getLayout } from "./layout-state";
import GameContent from "./components/GameContent.vue";
import { loadUserStats } from "./user-state";

export default defineComponent({
  name: "App",
  components: {
    ModalDialog,
    Navigation,
    GameContent,
  },
  setup() {
    loadUserStats();
    const showDialog = computed(() => {
      return getLayout().isDialogOpen;
    });
    return {
      showDialog,
    };
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
</style>
