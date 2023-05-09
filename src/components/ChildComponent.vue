<script setup lang="ts">
const props = defineProps<{
  inputValue: string
  otherProps?: number
}>()

const emit = defineEmits<{
  (event: 'update-value', value: string): void
}>()

</script>

<template>
  <v-card class="ma-4" theme="light">
    <v-card-title>Child component</v-card-title>
    <v-text-field :value="props.inputValue" type="text"
      @input="emit('update-value', ($event.target as HTMLInputElement).value)" />
  </v-card>
</template>
