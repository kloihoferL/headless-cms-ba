<script setup>
import { useRoute } from 'vue-router';
import { useStoryblokApi } from '@storyblok/vue';
import { ref, onMounted } from 'vue';
import { renderRichText } from '@storyblok/vue';

const route = useRoute();
const api = useStoryblokApi();
const event = ref(null);

onMounted(async () => {
  try {
    const { data } = await api.get('cdn/stories/events', {
      version: 'published'
    });

    const found = data.story.content.body.find(
        (blok) => blok.eventID === route.params.eventID
    );

    if (found) {
      event.value = {
        ...found,
        galleryImages: found.eventGallery?.map((img) => ({
          original: img.filename,
          thumbnail: img.filename, // Optional, falls Thumbnails nicht vorhanden
          alt: img.alt || `Eventbild - ${found.title}`,
          width: img.width,
          height: img.height
        })) || []
      };
    }
  } catch (e) {
    console.error('Fehler beim Laden:', e);
  }
});
</script>

<template>
  <div v-if="event" class="container py-4">
    <div class="event-header mb-5 text-center">
      <h1 class="mb-3">{{ event.title }}</h1>
      <p class="lead">{{ new Date(event.date).toLocaleString() }}</p>
      <div v-html="renderRichText(event.description)" />
    </div>

    <div v-if="event.galleryImages.length" class="masonry-container">
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
            />
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
      <span class="visually-hidden">Lade Event ...</span>
    </div>
  </div>
</template>

<style scoped>

</style>
