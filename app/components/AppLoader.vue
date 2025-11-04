<template>
  <span
    class="loader"
    :class="{fixed}"
    :style="{
      width,
      height
    }"
  />
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: '48px',
    required: false
  },
  height: {
    type: String,
    default: '48px',
    required: false
  },
  fixed: {
    type: Boolean,
    default: true,
    required: false
  },
})
</script>

<style>
.loader {
  border: 5px solid #00B2FF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  z-index: 10;
  }
  .fixed{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
} 
</style>