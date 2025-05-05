<script setup>
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
</script>


<template>
  <nav class="navbar navbar-expand-lg bg-light px-3">
    <div class="container-fluid">
      <!-- Linke Seite: Logo + Links -->
      <div class="d-flex align-items-center">
        <RouterLink class="navbar-brand me-4" to="/">Events</RouterLink>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">{{ $t('nav.home') }}</RouterLink>
          </li>
          <!--
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">{{ $t('nav.events') }}</RouterLink>
          </li>-->
        </ul>
      </div>

      <!-- Rechte Seite: Sprachumschalter -->
      <div class="language-switcher ms-auto d-flex align-items-center">
        <button
            class="btn btn-link"
            :class="{ active: locale === 'de-at' }"
            @click="locale = 'de-at'"
        >
          DE
        </button>
        <span class="mx-1">|</span>
        <button
            class="btn btn-link"
            :class="{ active: locale === 'en' }"
            @click="locale = 'en'"
        >
          EN
        </button>
      </div>
    </div>
  </nav>

  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </router-view>
</template>

<style>
@media (max-width: 1000px) {
.navbar-nav{
flex-direction: row !important;
  align-items: center !important;
  gap:20px !important;
  padding-top:0.5em !important;

}
}
</style>
