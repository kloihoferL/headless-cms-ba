<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('home', { version: 'published' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
