<script lang="ts" setup>
import ActivityCard from '../Activity/activity-card.vue'

// Remove and replace by back-end data when available
import activities from '../../../activities-list-temporary.json'
</script>

<template>
  <div class="cards_wrapper">
    <ActivityCard
      v-for="(activity, index) in activities"
      :key="index"
      :title="activity.title"
      :description="activity.description"
      :date="activity.date"
      :adress="activity.adress"
      :recommanded-age="activity.recommandedAge"
      :price="activity.price"
      :link="activity.link"
    />
  </div>
</template>

<style>
.cards_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
