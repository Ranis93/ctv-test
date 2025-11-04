<template>
  <div class="main-page">
    <div class="main-page__content">
      <h1 class="main-page__h1">Материалы</h1>
      <AppLoader v-if="isLoading"/>
      <div
        class="main-page__cards"
        v-else-if="allCards.length && !isLoading"
      >
        <MaterialCard
          class="main-page__material-card"
          v-for="card in allCards"
          :cardData="card"
          :key="card.id"
        />
      </div>
      <div v-else class="main-page__empty-data">
        Данных нет :((( <br/>
        Добавьте с помощью кнопки "Создать материал"
      </div>
    </div>
  </div>
</template>
<script setup>
import MaterialCard from './components/MaterialCard.vue'
import AppLoader from '~/components/AppLoader.vue'

definePageMeta({
  layout: 'default',
})

const axios = useNuxtApp().$axios
const isLoading = ref(false)
const alias = 'iskhakov'
const allCards = ref([])

const fetchElems = () => {
  isLoading.value = true
  axios.get(`/api/test/materials/${alias}`)
  .then((response) => {
    if(response.status === 200 && response.data.length)
    allCards.value = response.data.sort((a, b) => 
      new Date(b.datetime) - new Date(a.datetime)
    )
    else allCards.value = []
  })
  .catch((e)=>{
    console.error(e)
  })
  .finally(()=>{
    isLoading.value = false
  })
}
fetchElems()
</script>

<style lang="scss">
.main-page{
  max-width: 1440px;
  margin: 0 auto;
  &__content{
    padding: 132px 108px;
    @include respond-to('x-small') {
		  padding: 96px 16px;
	  }
  }
  &__h1{
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 48px;
    @include respond-to('x-small') {
      font-size: 24px;
      margin-bottom: 32px;
    }
  }
  &__empty-data{
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
  &__cards{
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    width: 100%;
    gap: 40px;
    @include respond-to('x-small') {
      gap: 16px;
    }
  }
  &__material-card{
    min-height: 273.333px;
    width: calc(25% - 30px);
    @include respond-to('x-large') {
		  width: calc(33.333% - 30px);
	  }
    @include respond-to('large') {
		  width: calc(50% - 25px);
	  }
    @include respond-to('medium') {
		  width: 100%;
	  }
  }
}
</style>