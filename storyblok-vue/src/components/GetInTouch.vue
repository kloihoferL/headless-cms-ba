<template>
<div class="bg-light container-fluid contact-container">
  <div v-editable="blok" class="container">
    <h2>{{ blok.hero }}</h2>
    <div v-html="renderRichText(blok.desc)" />
  </div>
</div>



</template>


<script setup>
defineProps({ blok: Object });
import { renderRichText } from '@storyblok/vue';
</script>

<style>
.contact-container{
  padding: 2% 4%;
  margin-top: 100px;
}
</style>
