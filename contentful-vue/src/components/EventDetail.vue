<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import client from '@/contentful'
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()
const event = ref(null)

const loadEvent = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'event',
      include: 2,
      'fields.eventId': parseInt(route.params.id),
      locale: locale.value
    })

    if (response.items.length > 0) {
      event.value = response.items[0]
    } else {
      console.warn(`Kein Event mit ID ${route.params.id} in ${locale.value} gefunden.`)
      event.value = null
    }
  } catch (error) {
    console.error('Fehler beim Laden:', error)
    event.value = null
  }
}

onMounted(loadEvent)
watch(locale, loadEvent) // 🔁 neu laden bei Sprachwechsel
</script>

<template>
  <div v-if="event" class="container py-4">
    <div class="event-header mb-5 text-center">
      <h1 class="mb-3">{{ event.fields.title }}</h1>
      <p class="lead">{{ new Date(event.fields.eventDate).toLocaleString(locale) }}</p>

      <div class="mb-4">
        <RichTextRenderer :document="event.fields.description" />
      </div>
    </div>

    <!-- Event Image Gallery -->
    <div v-if="event.fields.eventGallery?.length" class="row">
      <div
          class="col-sm-6 col-lg-4 mb-3"
          v-for="(img, i) in event.fields.eventGallery"
          :key="i"
      >
        <img
            class="img-fluid rounded"
            :src="'https:' + img.fields.file.url"
            :alt="img.fields.title || 'Eventbild'"
        />
      </div>
    </div>

    <div class="text-center mt-5">
      <router-link to="/" class="btn btn-outline-primary">
        {{ $t('nav.home') }}
      </router-link>
    </div>
  </div>

  <div v-else class="d-flex justify-content-center align-items-center" style="height: 50vh;">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
</template>
