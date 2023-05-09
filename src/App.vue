<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue';

const route = useRoute();

const showHeader = computed(() => route.name !== 'Home' && route.name !== '/0.CatchTypeErrorsAcrossFiles');

const routePath = computed(() => route.path);

const showIframe = ref(false);
</script>

<template>
  <v-app theme="dark">
    <SideBar />
    <Transition name="fade-extra-delay" mode="out-in" appear>
      <header v-if="showHeader" class="d-flex justify-center">
        <img class="mr-n2" alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
        <p class="text-h2 mr-2"> 🤜🤛</p>
        <img alt="TypeScript logo" class="logo" src="@/assets/TS.png" width="125" height="125" />
        <div class="wrapper">
          <iframe v-if="showIframe" src="https://kingwl.github.io/monaco-volar/" frameborder="0"
            allow="autoplay; fullscreen" allowfullscreen
            style="width: 100%; height: 400px; border-radius: 10px;"></iframe>
        </div>
      </header>
    </Transition>


    <v-main class="main d-flex justify-center flex-0-0">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :key="routePath" :is="Component" />
        </Transition>
      </RouterView>
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin-top: 30px;
  width: calc(100vw - 260px);
  transform: translateX(260px);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.main {
  width: calc(100vw - 260px);
  max-width: 1200px;
  margin: 32px auto;
}
</style>
