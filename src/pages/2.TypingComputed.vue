<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import ComputedMd from '@/markdown/./2.TypingComputed.md'
// Simple computed
const weightInKg = ref(100);

const kgToLb = computed(() => weightInKg.value * 2.2);

// "Complex" types
const coinFlipResult = computed(() => {
  const random = Math.random();
  if (random > 0.6) {
    return 'won'
  } else if (random < 0.5) {
    return 'lost';
  }
});


const result = coinFlipResult.value

const showExample = ref(false)
</script>


<template>
  <div>
    <ComputedMd class="mb-4" />
    <v-btn color="#41b883" class="mb-4" @click="showExample = !showExample">Show Example</v-btn>
    <div v-if="showExample">
      <v-slider color="#2d79c7" class="ml-auto" v-model="weightInKg" thumb-label="always" :max="250" :min="20"
        direction="horizontal"></v-slider>
      <v-card-text class="text-h6">Weight in Kgs: {{ Math.round(weightInKg) }}</v-card-text>
      <v-card-text class="text-h6">Weight in Lbs: {{ Math.round(kgToLb) }}</v-card-text>
      <v-img class="mx-auto" :width="weightInKg" src="@/assets/doge.png" />
    </div>
  </div>
</template>