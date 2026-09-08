<script setup lang="ts">
import Card from '../../components/card.vue'

defineProps<{
  title: string
  image?: string
  date: string
  adress: string
  recommandedAge?: string
  price?: string
  description?: string
  link?: string
}>()
</script>

<template>
  <Card>
    <template #default>
      <h2>{{ title }}</h2>
      <img v-if="image" :src="image" alt="" />
      <p v-if="date">{{ date }}</p>
      <p v-if="adress">{{ adress }}</p>
      <p v-if="recommandedAge">{{ recommandedAge }}</p>
      <p v-if="price">{{ price }}</p>
      <p v-if="description">{{ description }}</p>
      <a v-if="link" target="_blank" rel="noreferrer" :href="link">Visiter le site</a>
    </template>
  </Card>
</template>
