<template>
  <div class="layout">
    <AppHeader/>
    <slot />
  </div>
</template>
<script setup>
import AppHeader from '~/components/AppHeader.vue';
</script>

<style lang="scss">
.layout{
  width: 100%;
  height: 100%;
}
</style>