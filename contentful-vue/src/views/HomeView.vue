
<script>
import EventPreview from "@/components/EventPreview.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import Header from "@/components/Header.vue";
import GetInTouch from "@/components/GetInTouch.vue";
export default {
  components: {GetInTouch, Header, EventPreview, TheWelcome}
}


</script>


<template>
  <Header />
  <div class="container">
    <EventPreview/>

  </div>

  <div id="contact">
    <GetInTouch  />
  </div>






</template>

<style>

</style>
