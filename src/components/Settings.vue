<template>
  <div class="settings-wrapper">
    <h4>Settings</h4>
    <div class="settings-container">
      <div class="setting">
        <p class="text">Dark Theme</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Instructions",
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
