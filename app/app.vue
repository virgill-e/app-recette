<template>
  <div class="min-h-screen w-screen transition-all duration-1000" :style="{ background: currentGradient }">
    <div class="text-white font-erica-one">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { useTimeGradient } from './composables/useTimeGradient';

const { currentGradient, currentPeriod, currentTime } = useTimeGradient({
  updateInterval: 1000,    // Mise à jour chaque seconde
  transitionStart: 0
});
</script>

<style scoped></style>
