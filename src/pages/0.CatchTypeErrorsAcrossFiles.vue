<script setup lang="ts">
import CatchTypeErrorsAcrossFilesMd from '@/markDown/./0.CatchTypeErrorsAcrossFiles.md'
import type { User } from '@/types';

const user: User = {
  id: 1,
  name: 'John Doe',
  age: 30,
  email: 'jd@email.com',
  tasks: ['task1', 'task2'],
}
</script>

<template>
  <div>
    <CatchTypeErrorsAcrossFilesMd class="mb-4" />
    <v-img src="@/assets/refactor-meme.jpg"></v-img>
  </div>
</template>
