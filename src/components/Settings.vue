<template>
  <div class="settings-wrapper">
    <h4>Settings</h4>
    <div class="settings-container">
      <div class="setting">
        <p class="text">Dark Theme</p>
        <toggle-button
          v-on:change="toggleDarkTheme"
          :defaultState="showDarkTheme"
        ></toggle-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ToggleButton from "./Switch.vue";
import { getSettings, setDarkTheme, setHighContrast } from "../settings-state";

export default defineComponent({
  name: "Instructions",
  components: {
    ToggleButton,
  },
  setup() {
    const toggleDarkTheme = (newValue: boolean) => {
      setDarkTheme(newValue);
    };
    let showDarkTheme = computed(() => getSettings().darkTheme);
    return {
      toggleDarkTheme,
      showDarkTheme,
    };
  },
});
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
</style>
