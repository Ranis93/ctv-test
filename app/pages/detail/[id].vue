<template>
  <div class="detail-page">
    <AppLoader v-if="isLoading"/>
    <div
      class="detail-page__content"
      v-else-if="materialData && !isLoading"
    >
      <div class="detail-page__back-btn">
        <AppBackBtn />
      </div>
      <div class="detail-page__card">
        <div class="detail-page__head">
          <div class="detail-page__ico">
            <calendarIco/>
          </div>
          <div class="detail-page__date">
            {{ formattedDate(materialData.datetime) }}
          </div>
        </div>
        <h1 class="detail-page__title">
          {{ materialData.title }}
        </h1>
        <div class="detail-page__subtitle">
          {{ materialData.short_description }}
        </div>
        <div class="detail-page__desc" v-html="materialData.description_html"/>
      </div>
    </div>
    <div v-else class="detail-page__empty-data">
        Данных нет :((( <br/>
        Проверьте правильность указанной id
      </div>
  </div>
</template>
<script setup>
import AppLoader from '~/components/AppLoader.vue'
import AppBackBtn from '~/components/AppBackBtn.vue';
import calendarIco from '~/assets/img/calendarIco.vue';
import { useRoute } from 'vue-router';
import { useDateFormat } from '~/composables/useFormattedDate';

const { formattedDate } = useDateFormat()

definePageMeta({
  layout: 'default',
})

const axios = useNuxtApp().$axios
const alias = 'iskhakov'
const route = useRoute()
const materialId = computed(() => Number(route.params.id))
const isLoading = ref(false)
const materialData = ref(null)

const fetchEl = () => {
  isLoading.value = true
  axios.get(`/api/test/materials/${alias}`)
  .then((response) => {
    if(response.status === 200){
      const currentMaterial = response.data.find(itm => itm.id === materialId.value)
      materialData.value = currentMaterial || null
    }
    else materialData.value = null
  })
  .catch((e)=>{
    console.error(e)
  })
  .finally(()=>{
    isLoading.value = false
  })
}
fetchEl()
</script>

<style lang="scss" scoped>
.detail-page{
  max-width: 1440px;
  margin: 0 auto;
  &__content{
    padding: 136px 213px;
    @include respond-to('large') {
		  padding: 136px 90px;
	  }
    @include respond-to('x-small') {
		  padding: 99px 0px;
	  }
  }
  &__empty-data{
    margin: 150px 50px;
    padding: 32px 24px;
    border-radius: 24px;
    background-color: #FFFFFF;
    font-family: 'Futura PT', sans-serif;
    cursor: pointer;
    transition: all 0.5s;
    @include respond-to('x-small') {
      padding: 24px;
    }
  }
  &__back-btn{
    margin-bottom: 48.5px;
    margin-left: 4px;
    @include respond-to('x-small') {
      margin-bottom: 35.5px;
      margin-left: 18px;
    }
  }
  &__card{
    border-radius: 32px;
    background-color: #FFFFFF;
    padding: 64px;
    @include respond-to('x-small') {
      padding: 24px 16px;
      border-radius: 24px;
    }
  }
  &__head{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    @include respond-to('x-small') {
      gap: 8px;
    }
  }
  &__ico{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    @include respond-to('x-small') {
      width: 20px;
      height: 20px;
    }
    svg{
      width: 18px;
      @include respond-to('x-small') {
        width: 15px;
      }
    }
  }
  &__date{
    color: #BEC2DA;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0%;
    @include respond-to('x-small') {
      font-size: 18px;
      line-height: 120%;
    }
  }
  &__title{
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: #14142A;
    margin-bottom: 24px;
    @include respond-to('medium') {
		  font-size: 24px;
	  }
  }
  &__subtitle{
    font-weight: 500;
    font-size: 22px;
    line-height: 120%;
    letter-spacing: 0%;
    color: #14142A;
    margin-bottom: 38px;
    @include respond-to('medium') {
		  font-size: 18px;
      margin-bottom: 24px;
	  }
  }
  &__desc{
    color: #14142A;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    @include respond-to('medium') {
		  font-size: 16px;
	  }
  }
}
</style>
<style>
.language-vue{
  white-space: normal;
}
</style>