<script setup lang="ts">
import GenericComponent from '@/components/GenericComponent.vue'
import GenericComponentsMd from '@/markDown/./6.GenericComponents.md'

export type Row<Key extends string> = Record<Key, Cell> & {
  name: Cell;
  children?: Row<Key>[];
}
export type Cell = {
  title: string;
  value: string | number;
}

const headers = ['name', 'calories', 'protein'] as const

type Headers = typeof headers[number]

const rows = ref<Row<Headers>[]>([
  {
    name: {
      title: 'Frozen Yogurt',
      value: 'Frozen Yogurt',
    },
    calories: {
      title: 'Frozen Yogurt',
      value: 100,
    },
    protein: {
      title: 'Frozen Yogurt',
      value: 10,
    },
  },
  {
    name: {
      title: 'Ice Cream Sandwich',
      value: 'Ice Cream Sandwich',
    },
    calories: {
      title: 'Ice cream sandwich',
      value: 300,
    },
    protein: {
      title: 'Ice cream sandwich',
      value: 4,
    },
  }
])


const currentSelectedRow = ref(rows.value[0])

</script>

<template>
  <div>
    <GenericComponentsMd class="mb-8" />
    <GenericComponent :headers="headers" @update:current-selected-row="currentSelectedRow = $event" :rows="rows"
      :current-selected-row-title="currentSelectedRow?.name.title">
    </GenericComponent>
  </div>
</template>
