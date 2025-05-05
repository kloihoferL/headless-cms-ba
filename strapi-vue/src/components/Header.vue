<script setup>
import {ref, onMounted, watch} from 'vue';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const headerData = ref([]);
let baseUrl = 'http://localhost:1337';

const loadContent = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/header?populate=headerBackground&locale=${locale.value}`);
    const data = await response.json();
    console.log(data);
    headerData.value = {
      text: data.data.headerText,
      info: data.data.headerInfo,
      backgroundUrl: `${baseUrl}${data.data.headerBackground.url}`,
      thumbnailUrl: `${baseUrl}${data.data.headerBackground.formats.thumbnail.url}`
    };
  } catch (error) {
    console.error('Fehler beim Laden:', error);
  }
};


onMounted(loadContent)
watch(locale, loadContent)

</script>

<template>
  <div class="header-container">
    <div
        v-if="headerData"
        class="container-fluid my-3 d-flex flex-column align-items-center justify-content-center text-center text-white header "
        :style="{
      height: '50vh',
      backgroundImage: `url(${headerData.backgroundUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }"
    >
      <h1>{{ headerData.text }}</h1>
      <p>{{ headerData.info }}</p>

    </div>
  </div>


</template>


<style>

.header-container{
  padding:1% 4%;
}


.header-container{
  padding:1% 4%;

}

</style>