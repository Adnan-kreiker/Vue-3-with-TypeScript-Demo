<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';

const textContent = ref('test');

function handleUpdateValue(value: string) {
  textContent.value = value;
}
</script>

<template>
  <v-card color="#2d79c7" class="mx-auto mt-16 pa-5" width="450px">
    <v-card-title class="text-h4">Parent component</v-card-title>
    <v-card-text class="text-body-1">Parent text content: {{ textContent }}</v-card-text>
    <!-- Integrate Child Component -->
    <child-component :input-value="textContent" @update-value="textContent = $event"></child-component>
  </v-card>
</template>
