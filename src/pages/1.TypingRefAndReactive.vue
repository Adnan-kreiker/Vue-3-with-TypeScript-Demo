<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import TypingRefAndReactive from '@/markdown/./1.TypingRefAndReactive.md'
import type { Movie } from '@/types';

const age = 25

// Inferred type
const count = ref(0);

// Explicit type
const count2 = ref(0);


type User = {
  name: string;
  email: string;
};


// Complex type
const user = ref(null);


onMounted(() => {
  // user.value = fetchUser();
});


function fetchUser() {
  return {
    name: 'John',
    email: 'john@email.com'
  }
}


// Default value
const defaultVal = ref<number>();

// Typing Reactive
const movie = reactive({
  title: 'The Matrix',
  year: 1999,
  id: 603,
  count,
  release_date: new Date().getDate(),
  poster_path: '/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg',
});

</script>

<template>
  <div>
    <TypingRefAndReactive class="mb-4" />
    <v-img width="400" class="mx-auto" src="@/assets/refReactive.jpg" />
  </div>
</template>