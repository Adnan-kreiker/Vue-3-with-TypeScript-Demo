<script setup lang="ts">
import SlotMd from '@/markdown/./5.Slots.md';
import SlotComponent from '@/components/SlotComponent.vue';
</script>

<template>
  <div>
    <SlotMd class="mb-4" />
    <v-img class="d-block mx-auto" width="400px" src="@/assets/slot-meme.gif"></v-img>
    <SlotComponent class="d-block mx-auto mt-4">
    </SlotComponent>
  </div>
</template>
