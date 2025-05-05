<script setup>
import { useStoryblokApi } from '@storyblok/vue'
import { useI18n } from 'vue-i18n'
import { ref, watch, onMounted } from 'vue'

const { locale } = useI18n()
const story = ref(null)
const api = useStoryblokApi()

const loadStory = async () => {
  const response = await api.get('cdn/stories/events', {
    version: 'published',
    language: locale.value
  })
  console.log(locale.value)
  story.value = response.data.story
}

onMounted(loadStory)
watch(locale, loadStory)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
