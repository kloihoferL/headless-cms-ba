<script setup>
import {ref, onMounted, nextTick, watch} from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const route = useRoute();
const event = ref(null);
const baseUrl = 'http://localhost:1337';

const loadContent = async () => {
  try {
    const response = await fetch(
        `${baseUrl}/api/events?filters[eventID][$eq]=${route.params.id}&populate=eventGallery&locale=${locale.value}`
    );
    const { data } = await response.json();

    if (data.length > 0) {
      event.value = {
        ...data[0],
        galleryImages: data[0].eventGallery.map(image => ({
          original: `${baseUrl}${image.url}`,
          thumbnail: `${baseUrl}${image.formats?.thumbnail?.url}`,
          alt: image.alternativeText || `Event Bild - ${data[0].title}`,
          width: image.width,
          height: image.height
        }))
      };

    }
  } catch (error) {
    console.error('Fehler beim Laden:', error);
  }
};

onMounted(loadContent)
watch(locale, loadContent)

</script>

<template>
  <div v-if="event" class="container py-4">
    <div class="event-header mb-5 text-center">
      <h1 class="mb-3">{{ event.title }}</h1>
      <p class="lead">{{ new Date(event.date).toLocaleString() }}</p>
      <p>{{event.description}}</p>
    </div>


    <div v-if="event.galleryImages?.length" class="masonry-container">
      <h2 class="text-center mb-4">Galerie</h2>

      <div class="row" data-masonry='{"percentPosition": true }'>
        <div
            v-for="(image, index) in event.galleryImages"
            :key="index"
            class="col-sm-6 col-lg-4 masonry-item mb-4"
        >
          <div class="card">
            <img
                :src="image.original"
                class="card-img-top"
                :alt="image.alt"
                loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <router-link to="/" class="btn btn-outline-primary">
        {{ $t('getBack') }}
      </router-link>
    </div>
  </div>

  <div v-else class="d-flex justify-content-center align-items-center" style="height: 50vh;">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
</template>

<style scoped>

</style>