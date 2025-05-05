<script setup>
import { ref, onMounted, watch } from 'vue'
import client from '@/contentful'
import RichTextRenderer from "contentful-rich-text-vue-renderer"
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const entries = ref([])

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString(locale.value)
}

const loadContent = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'event',
      locale: locale.value,
      include: 1
    })
    entries.value = response.items
   console.log(locale.value);
  } catch (error) {
    console.error('Fehler beim Laden:', error)
  }
}

onMounted(loadContent)

watch(locale, loadContent)
</script>


<template>
  <div v-if="entries" >
    <div
        v-for="ev in entries"
        :key="ev.sys.id"
        class="d-flex flex-row justify-content-left align-items-center m-3 p-2 events jus"
    >
      <div class="img-container">
        <img
            v-if="ev.fields.eventImage?.fields"
            :src="'https:' + ev.fields.eventImage.fields.file.url"
            :alt="ev.fields.title"
            class="rounded"
        />
      </div>
      <div class="event-body">
        <h2>{{ ev.fields.title }}</h2>
        <RichTextRenderer
            :document="ev.fields.shortDescription"
            class="mb-4"
        />
        <p><strong>{{ $t('date') }}</strong> {{ formatDate(ev.fields.eventDate) }}</p>
        <router-link :to="`/events/${ev.fields.eventId}`" class="btn btn-primary moreInfo">
          {{ $t('moreInfo') }}
        </router-link>

      </div>
    </div>
  </div>

  <div v-else class="d-flex justify-content-center align-items-center" style="height: 50vh;">
    <div class="spinner-border" role="status">
      <span class="visually-hidden"></span>
    </div>
  </div>
</template>

<style scoped>
.img-container {
  width: 150px;
  height: 150px;
}

.img-container img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.events {
  gap: 20px;
}
</style>
