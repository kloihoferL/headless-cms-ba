<template>
  <div class="container">
    <div v-editable="blok" class="d-flex flex-row justify-content-left align-items-center m-3 p-2 events jus">
      <div class="img-container">
        <img :src="blok.eventImage.filename" alt="Event Image"/>
      </div>
      <div class="event-body">
        <h2>{{ blok.title }}</h2>
        <p>{{ blok.shortDescription }}</p>
        <p><strong>{{ $t('date') }}</strong> {{ new Date(blok.date).toLocaleString() }}</p>

        <!-- Mehr erfahren Button -->
        <router-link
            class="btn btn-primary mt-2"
            :to="`/events/${blok.eventID}`"
        >
          {{ $t('moreInfo') }}
        </router-link>

      </div>
    </div>
  </div>

</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
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