<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
          <RouterLink class="nav-link" :to="{ path: '/', hash: '#contact' }">
            {{ $t('nav.contact') }}
          </RouterLink>-->
        </ul>
      </div>

      <!-- Rechte Seite: Sprachumschalter -->
      <div class="language-switcher ms-auto d-flex align-items-center">
        <button
            class="btn btn-link"
            :class="{ active: locale === 'de-AT' }"
            @click="locale = 'de-AT'"
        >
          DE
        </button>
        <span class="mx-1">|</span>
        <button
            class="btn btn-link"
            :class="{ active: locale === 'en-US' }"
            @click="locale = 'en-US'"
        >
          EN
        </button>
      </div>
    </div>
  </nav>



  <div>
    <RouterView />
  </div>

</template>

<style>

</style>
