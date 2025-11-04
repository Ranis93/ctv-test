<template>
  <div class="editor-page">
    <div class="editor-page__content">
      <AppLoader v-if="isLoading"/>
      <div class="editor-page__back-btn">
        <AppBackBtn />
      </div>
      <h1 class="editor-page__title">Создание материала</h1>
      <div class="editor-page__window">
        <div class="editor-page__input-title">
          <input 
            type="text"
            id="titleText"
            maxlength="80"
            v-model="titleText" 
            placeholder="Введите заголовок"
          >
        </div>
        <div class="editor-page__input-desc">
          <input 
            type="text"
            id="descText"
            maxlength="255"
            v-model="descText" 
            placeholder="Введите краткое описание..."
          >
        </div>
       <TiptapEditor
          class="editor-page__tiptap"
          v-model="content"
          @setJson="contentJson = $event"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import AppBackBtn from '~/components/AppBackBtn.vue';
import AppLoader from '~/components/AppLoader.vue'
import TiptapEditor from './components/TiptapEditor.vue'
import { ref, watch } from 'vue'
import { useFlagStore } from '@/stores/flag'
import { useRouter } from 'vue-router'

const router = useRouter();
const store = useFlagStore()

const titleText = ref('')
const descText = ref('')
const content = ref('')
const contentJson = ref(null)
const isLoading = ref(false)

definePageMeta({
  layout: 'default',
})

const axios = useNuxtApp().$axios
const alias = 'iskhakov'
const createMaterial = () => {
  isLoading.value = true
  axios.post(`/api/test/materials/${alias}/save`, {
    title: titleText.value,
    short_description: descText.value,
    datetime: new Date().toISOString(),
    description_html: content.value,
    description_json: contentJson.value
  })
  .then((res) => {
    if(res.data && res.data.success === false){
      console.error('Что то пошло не так')
    } else if (res.data && res.data.success) {
      router.push('/')
    } else {}
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(()=>{
    isLoading.value = false
  })
}

// Отслеживание изменения flag
watch(
  () => store.flag,
  (newValue, oldValue) => {
    if(!titleText.value || !descText.value || !content.value || !contentJson.value)
      alert("Заполните все поля !!!")
    else
      createMaterial()
  }
)

</script>
<style scoped lang="scss">
.editor-page{
  max-width: 1440px;
  margin: 0 auto;
  &__content{
    padding: 136px 213px;
    @include respond-to('x-large') {
		  padding: 136px 80px;
	  }
    @include respond-to('x-small') {
		  padding: 96px 16px;
	  }
  }
  &__back-btn{
    margin-bottom: 35px;
    margin-left: 3px;
    @include respond-to('x-small') {
      margin-bottom: 25px;
      margin-left: 10px;
    }
  }
  &__title{
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    color: #14142A;
    margin-bottom: 48px;
    @include respond-to('x-small') {
		  font-size: 24px;
      margin-bottom: 32px;
	  }
  }
  &__window{
    background-color: #FFFFFF;
    padding: 43px 24px;
    border-radius: 32px;
    @include respond-to('x-small') {
		  border-radius: 16px;
      padding: 20px 16px;
	  }
  }
  &__input-title{
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    letter-spacing: 0%;
    color: #BEC2DA;
    margin: 0 106px;
    #titleText::placeholder{
      font-weight: 600;
      font-size: 36px;
      line-height: 120%;
      letter-spacing: 0%;
      color: #BEC2DA;
      @include respond-to('x-small') {
        font-size: 24px;
      }
    }
    @include respond-to('x-large') {
		  margin: 0 10px;
	  }
    @include respond-to('x-small') {
		  font-size: 24px;
      margin: 0;
	  }
  }
  &__tiptap{
    @include respond-to('x-large') {
		  margin: 0 10px;
	  }
    @include respond-to('x-small') {
      margin: 24px 0 0 0;
	  }
  }
  &__input-desc{
    font-weight: 400;
    font-size: 22px;
    line-height: 120%;
    color: #BEC2DA;
    margin: 18px 106px 28px 106px;
    #descText::placeholder{
      font-weight: 400;
      font-size: 22px;
      line-height: 120%;
      color: #BEC2DA;
      @include respond-to('x-small') {
        font-size: 18px;
      }
    }
    @include respond-to('x-large') {
		  margin: 18px 10px 28px 10px;
	  }
    @include respond-to('x-small') {
		  font-size: 18px;
      margin: 4px 0 0 0;
	  }
  }
  &__input-title, &__input-desc{
    input{
      width: 100%;
    }
  }
}
</style>
