<script setup lang="ts">
import type { RouteRecordName } from 'vue-router';

const router = useRouter()

function routeToTitle(route: RouteRecordName) {
  const indexOfDot = route.toString().indexOf('.')
  return route.toString().slice(indexOfDot + 1)
}

function addSpaceInsteadOfCapitalLetters(str: string) {
  return str.replace(/([A-Z])/g, ' $1').trim().replace('/', '')
}

const topics = computed(() => {
  let routes = router.getRoutes().map((route) => ({
    title: addSpaceInsteadOfCapitalLetters(routeToTitle(route.name?.toString() || '')),
    description: route.meta.description,
    path: route.path,
  }))

  const homeRoute = routes.find((route) => route.path === '/')!

  const thankYouRoute = routes.find((route) => route.path === '/8/ThankYou')!

  routes = routes.filter((route) => route.path !== '/' && route.path !== '/8/ThankYou')
  routes.unshift(homeRoute)
  routes.push(thankYouRoute)
  return routes
})

const isActiveRoute = (routePath: string) => {
  return routePath === router.currentRoute.value.path
}

</script>

<template>
  <v-navigation-drawer class="nav-bg" permanent theme="dark">
    <v-list class="text-center" nav>
      <v-list-item :active="isActiveRoute(topic.path)" @click="router.push(topic.path)" :key="topic.path"
        v-for="topic in topics" :title="topic.title" :value="topic"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.nav-bg {
  background: rgb(53, 73, 94) !important;
  background: linear-gradient(119deg, rgba(53, 73, 94, 1) 0%, rgba(66, 184, 131, 1) 35%, rgba(0, 122, 204, 1) 100%) !important;
  width: 260px !important;
}
</style>