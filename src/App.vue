<script setup lang="ts">
import ActivitiesList from './features/ActivitiesList/ActivitiesList.vue'
import Page from './components/Page.vue'
</script>

<template>
  <Page>
    <h1 class="home__title">Bienvenue sur Onfekoa !</h1>

    <ActivitiesList />
  </Page>
</template>

<style lang="scss">
.home {
  &__title {
    text-align: center;
  }
}
</style>
