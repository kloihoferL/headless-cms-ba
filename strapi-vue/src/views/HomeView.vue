<script setup>
import { ref, onMounted } from 'vue';

import HelloWorld from '../components/EventPreview.vue';
import EventPreview from "@/components/EventPreview.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import Header from "@/components/Header.vue";

</script>

<template>
  <Header />

  <div class="container">
    <EventPreview/>

  </div>
  <GetInTouch />
</template>


<style>
.bg-base{
  height: 50vh;
  background-position: center;
  background-size: cover;
}
</style>