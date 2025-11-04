<template>
  <div class="material-card" @click="cardClickHandler(cardData.id)">
    <div class="material-card__head">
      <div class="material-card__ico">
        <calendarIco/>
      </div>
      <div class="material-card__date">
        {{ formattedDate(cardData.datetime) }}
      </div>
    </div>
    <div class="material-card__title">
      {{ cardData.title }}
    </div>
    <div class="material-card__desc truncate-3-lines">
      {{ cardData.short_description }} 
    </div>
  </div>
</template>

<script setup>
import calendarIco from '~/assets/img/calendarIco.vue';
import { useRouter } from 'vue-router';
import { useDateFormat } from '~/composables/useFormattedDate';

const { formattedDate } = useDateFormat()


const router = useRouter()

defineProps({
  cardData: {
    type: Object,
    default: () => {},
    required: true
  },
})

const cardClickHandler = (id) => {
  router.push(`/detail/${id}`)
}
</script>

<style lang="scss" scoped>
.material-card{
  padding: 32px 24px;
  border-radius: 24px;
  background-color: #FFFFFF;
  font-family: 'Futura PT', sans-serif;
  cursor: pointer;
  transition: all 0.5s;
  @include respond-to('x-small') {
    padding: 24px;
  }
  &:hover{
    box-shadow: 
    -2px 5px 13px 0px #0000000A,
    -9px 21px 23px 0px #0000000A,
    -21px 48px 31px 0px #00000005,
    -37px 85px 37px 0px #00000003,
    -57px 133px 40px 0px #00000000;
  }
  &__head{
    padding: 2.5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-bottom: 17.5px;
    @include respond-to('x-small') {
      margin-bottom: 15px;
    }
  }
  &__date{
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #BEC2DA;
    @include respond-to('x-small') {
      font-size: 14px;
    }
  }
  &__ico{
    display: flex;
    justify-content: center;
    align-items: center;
    @include respond-to('x-small') {
      max-width: 13px;
    }
  }
  &__title{
    font-family: 'Source Sans 3', sans-serif;
    color: #14142A;
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    margin-bottom: 20px;
    @include respond-to('x-small') {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  &__desc{
    font-family: 'Futura PT', sans-serif;
    color: #81859C;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    @include respond-to('x-small') {
      font-size: 14px;
      line-height: 120%;
    }
  }
}
.truncate-3-lines { // оставляем только 3 строки
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: calc(120% * 4);
}
</style>