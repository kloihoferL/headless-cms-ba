<template>
  <div class="header-container">
    <div
        v-if="header"
        class="header p-3"
        :style="{
      backgroundImage: `url(${headerImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',
      color: 'white'
    }"
    >
      <h1>{{ header.fields.hero }}</h1>
      <p>{{ header.fields.info }}</p>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import client from '@/contentful'

const { locale } = useI18n()

const header = ref(null)
const headerImageUrl = ref('')

const loadHeader = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'header',
      include: 1,
      locale: locale.value
    })

    if (response.items.length > 0) {
      header.value = response.items[0]
      const asset = header.value.fields.headerBackground
      if (asset?.fields?.file?.url) {
        headerImageUrl.value = 'https:' + asset.fields.file.url
      }
    } else {
      header.value = null
    }
  } catch (error) {
    console.error('Fehler beim Laden des Headers:', error)
  }
}

onMounted(loadHeader)
watch(locale, loadHeader)
</script>

<style scoped>

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40vh !important;
  padding:40px;
}

.header-container{
  padding:1% 4%;

}

</style>
