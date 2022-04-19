<template>
  <div class="settings-wrapper">
    <h4>Settings</h4>
    <div class="settings-container">
      <div class="setting">
        <p class="text">Dark Theme</p>
        <toggle-button
          id="dark-theme"
          v-on:toggle="toggleDarkTheme"
          :defaultState="showDarkTheme"
        ></toggle-button>
      </div>
      <div class="setting">
        <p class="text">High Contrast</p>
        <toggle-button
          id="high-contrast"
          v-on:toggle="toggleHighContrast"
          :defaultState="showHighContrast"
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
    const toggleHighContrast = (newValue: boolean) => {
      setHighContrast(newValue);
    };
    let showDarkTheme = computed(() => getSettings().darkTheme);
    let showHighContrast = computed(() => getSettings().highContrast);
    return {
      toggleDarkTheme,
      toggleHighContrast,
      showDarkTheme,
      showHighContrast,
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
.settings-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px;
}
.setting {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
  padding: 4px 0;
}
</style>
