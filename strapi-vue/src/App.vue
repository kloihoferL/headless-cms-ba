<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light px-3">
    <div class="container-fluid">
      <RouterLink class="navbar-brand fw-bold" to="/">Events</RouterLink>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3 text-center">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" active-class="active" exact-active-class="active">
              {{ $t('nav.home') }}
            </RouterLink>
          </li>
          <!--
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" active-class="active">
              {{ $t('nav.events') }}
            </RouterLink>
          </li>-->
        </ul>

        <div class="language-switcher d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
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
              :class="{ active: locale === 'en' }"
              @click="locale = 'en'"
          >
            EN
          </button>
        </div>
      </div>
    </div>
  </nav>

  <RouterView />



</template>

<style>

</style>


