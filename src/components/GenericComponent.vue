<script setup lang="ts">
import type { Row } from '@/pages/6.GenericComponents.vue.js';


const props = defineProps<{
  rows: Row[],
  headers: readonly string[],
  currentSelectedRowTitle?: string
}>()

const emit = defineEmits<{
  (event: 'update:current-selected-row', value: Row): void
}>()
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="header in headers" class="text-left">
          {{ header.toUpperCase() }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr @click="emit('update:current-selected-row', row)" v-for="(row, index) in  rows " :key="row.name.title"
        :class="{ 'text-amber-accent-3': props.currentSelectedRowTitle === row.name.title }">
        <td v-for="(val, _key) in row">{{ val.value }}</td>
        <td>
          <slot name="row" :index="index">
          </slot>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>