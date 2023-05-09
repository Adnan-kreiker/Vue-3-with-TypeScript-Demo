<script setup lang="ts">
import TypeScriptIcon from '@/components/Icons/TypeScriptIcon.vue';
import VueIcon from '@/components/Icons/VueIcon.vue';

definePage({
  name: 'Home'
});

const bulletPoints = [
  'Setting up a Vue 3 project with Typescript',
  'Key features and benefits of using these technologies together',
  'Useful for both seasoned Vue developers and beginners to Typescript'
]
</script>

<template>
  <v-card class="pa-4">
    <v-card-title class="text-h4 mb-4">Exploring real world use-cases for using <type-script-icon /> with
      <vue-icon style="height: 29px;" /> 3</v-card-title>
    <v-card-text class="text-h6" style="line-height: 22px;">
      <v-list>
        <v-list-item v-for="bulletPoint in bulletPoints" :key="bulletPoint">
          <v-icon>mdi mdi-circle-small</v-icon>
          {{ bulletPoint }}
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-img src="@/assets/ts-with-vue.jpg"></v-img>
  </v-card>
</template>
