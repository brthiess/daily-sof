<template>
  <div class="instructions-container">
    <h4>Settings</h4>
    <div class="numbers-container">
      <p>
        Play along in past science or fictions from the
        <a href="https://www.theskepticsguide.org/">SGU Podcast.</a>
      </p>
      <p>
        Guess which item is the fiction. Pick the item that seems like it is
        fake and hit "Submit"
      </p>
      <p>
        You can see how you stack up against the rogues actual answers to the
        same Science or Fiction on the podcast by clicking the
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            fill="var(--color-tone-1)"
            d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
          ></path>
        </svg>
        icon
      </p>
      <p>
        <strong>A new Science or Fiction will be available each day!</strong>
      </p>
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
.numbers-container {
  padding: 0 20px;
  margin: 20px 0;
}
p {
  margin: 20px 0;
  &:last-child {
    border-top: 1px solid #ccc;
    padding-top: 10px;
  }
}
svg {
  position: relative;
  top: 5px;
}
</style>
