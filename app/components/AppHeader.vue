<template>
  <div class="app-header">
    <div class="app-header__content">
      <NuxtLink :to="{ name: 'index'}">
        <img
          class="app-header__logo"
          src="~/assets/img/main-logo.png"
          alt="main-logo"
        >
      </NuxtLink>
      <AppSaveBtn v-if="route.name === 'editor'"/>
      <AppCreateBtn v-else/>
    </div>
  </div>
</template>

<script setup>
import AppCreateBtn from './AppCreateBtn.vue';
import AppSaveBtn from './AppSaveBtn.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
.app-header{
  background-color: #FFFFFF;
  padding: 20px 108px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  @include respond-to('x-small') {
    padding: 8px 16px;
  }
  &__logo{
    @include respond-to('x-small') {
    max-width: 94px;
    }
  }
  &__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1224px;
    margin: 0 auto;
  }
}

</style>