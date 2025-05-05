<script setup>
import {ref, onMounted, watch} from "vue";
import { useI18n } from "vue-i18n"

const { locale, t } = useI18n()

const events = ref([]);

const loadContent = async () => {
  try {
    const response = await fetch(`http://localhost:1337/api/events?populate=eventImage&locale=${locale.value}`);
    const data = await response.json();
    console.log(data);
    events.value = data.data.map(event => ({
      ...event,
      fullImageUrl: `http://localhost:1337${event.eventImage?.url}`,
      thumbnailUrl: `http://localhost:1337${event.eventImage?.formats?.thumbnail?.url}`
    }));
  } catch (error) {
    console.error('Fehler beim Laden der Events:', error);
  }
};

onMounted(loadContent)
watch(locale, loadContent)

</script>

<template>
<div>
    <div v-for="ev in events" :key="ev.id" class="d-flex flex-row justify-content-left align-items-center m-3 p-2 events jus">
      <div class="img-container">
        <img :src="ev.thumbnailUrl" :alt="ev.title"/>
      </div>
      <div class="event-body">
        <h2>{{ ev.title }}</h2>
        <p>{{ ev.shortDescription }}</p>
        <p><strong>{{ $t('date') }}:</strong> {{ new Date(ev.date).toLocaleString() }}</p>
        <router-link :to="`/events/${ev.eventID}`" class="btn btn-primary">
          {{ $t('moreInfo') }}
        </router-link>   </div>

    </div>
</div>
</template>


<style>

.img-container{
  width:150px;
  height: 150px;
}

.img-container img{
  width: 150px;
  height: 150px;
  object-fit: cover;
}



</style>
