<template>
  <div class="header-container">
    <div
        v-editable="blok"
        class=" my-3 d-flex flex-column align-items-center justify-content-center text-center text-white header"
        :style="{
      height: '50vh',
      backgroundImage: `url(${blok.backgroundImage.filename})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }"
    >
      <h1>{{ blok.headerText }}</h1>
      <p >{{ blok.headerInfo }}</p>
    </div>
  </div>

</template>

<script setup>
defineProps({ blok: Object });
</script>

<style>
.header-container{
  padding:1% 4%;
}
</style>
