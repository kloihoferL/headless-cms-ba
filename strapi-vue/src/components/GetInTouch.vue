<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const baseUrl = 'http://localhost:1337'
const gidData = ref({
  hero: '',
  description: ''
})

const loadContent = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/get-in-touch?locale=${locale.value}`)
    const result = await response.json()
    if (result.data) {
      gidData.value = result.data
    }
  } catch (error) {
    console.error('Fehler beim Laden:', error)
  }
}

onMounted(loadContent)
watch(locale, loadContent)
</script>

<template>
  <div class="bg-light container-fluid contact-container">
    <div v-if="gidData" class="container">
      <h4>{{ gidData.hero }}</h4>
      <p>{{ gidData.description }}</p>
    </div>
  </div>

</template>
<style>
.contact-container {
  padding: 2% 4%;
  margin-top: 100px;
}
</style>

