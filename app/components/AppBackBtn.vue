<template>
  <div class="back-btn" @click="backBtnClickHandler">
    <div class="back-btn__ico">
      <backIco/>
    </div>
    <div class="back-btn__text">
      Назад
    </div>
  </div>
</template>

<script setup>
import backIco from '~/assets/img/ico/backIco.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const backBtnClickHandler = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    // Если нет истории, переходим на главную
    router.push('/');
  }
}
</script>

<style lang="scss" scoped>
.back-btn{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  &__ico{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__text{
    color: #14142A;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
  }
}
</style>