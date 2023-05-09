<script setup lang="ts">

const route = useRoute('/users/[id]')

</script>

<template>
  <v-alert type="info" variant="tonal">
    <span class="text-h5">{{ `User id:` }}</span>
  </v-alert>
</template>
