<script setup>
import { ref, onMounted, watch } from 'vue'
import client from '@/contentful'
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const content = ref(null)

const loadContent = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'getInTouch',
      locale: locale.value,
    })
    if (response.items.length > 0) {
      content.value = response.items[0]
    }
  } catch (err) {
    console.error('Fehler beim Laden:', err)
  }
}

onMounted(loadContent)

watch(locale, () => {
  loadContent()
})
</script>


<template>
  <div class="bg-light container-fluid contact-container">
    <div v-if="content" class="container">
      <h2 class="mb-4">{{ content.fields.hero }}</h2>
      <RichTextRenderer :document="content.fields.description" />
    </div>
  </div>
</template>

<style>
.contact-container{
  padding: 2% 4%;
  margin-top: 100px;
}
</style>