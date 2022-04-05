<template>
  <div class="dialog-container">
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
            fill="var(--color-tone-1)"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="content-container">
      <Stats></Stats>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { setIsDialogOpen } from "../layout-state";
import Stats from "./Stats.vue";

export default defineComponent({
  name: "ModalDialog",
  components: {
    Stats,
  },
  setup() {
    const closeDialog = () => {
      setIsDialogOpen(false);
    };
    return {
      closeDialog,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #dddd;
}
.dialog {
  position: fixed;
  top: calc(50% - 100px);
  left: calc(50% - 200px);
  background: white;
  width: 400px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
}
</style>
