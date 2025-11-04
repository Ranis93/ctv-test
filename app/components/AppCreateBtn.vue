<template>
  <button
    class="create-btn"
    :disabled="isDisabled"
    @click="createBtnClickHandler"
  >
    <div class="create-btn__text">
      {{route.name === 'detail-id' ? 'Создать историю' : 'Создать материал'}}
    </div>
    <div class="create-btn__ico">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.875 8.75H0.875C0.396667 8.75 0 8.35333 0 7.875C0 7.39667 0.396667 7 0.875 7H14.875C15.3533 7 15.75 7.39667 15.75 7.875C15.75 8.35333 15.3533 8.75 14.875 8.75Z" fill="#00B2FF"/>
      <path d="M7.875 15.75C7.39667 15.75 7 15.3533 7 14.875V0.875C7 0.396667 7.39667 0 7.875 0C8.35333 0 8.75 0.396667 8.75 0.875V14.875C8.75 15.3533 8.35333 15.75 7.875 15.75Z" fill="#00B2FF"/>
      </svg>
    </div>
  </button>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();

const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
    required: false
  },
})

const createBtnClickHandler = () => {
  router.push('/editor')
}
</script>

<style lang="scss" scoped>
.create-btn{
  transition: all 0.5s;
  padding: 12px 24px;
  border-radius: 12px;
  background-color: #E7F8FE;
  color: #00B2FF;
  font-family: 'Futura PT', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  &:hover{
    background-color: #D2F3FF;
    color: #00B2FF;
  }
  &:active {
    background-color: #D2F3FF;
    color: #00B2FF;
  }
  &:disabled{
    background-color: #E7F8FE;
    color: #00B2FF;
    opacity: 60%;
  }
  &__text{
    display: block;
  }
  &__ico{
    display: none;
  }
}
@include respond-to('medium') {
  .create-btn{
    padding: 16.12px;

    &__text{
      display: none;
    }
    &__ico{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>