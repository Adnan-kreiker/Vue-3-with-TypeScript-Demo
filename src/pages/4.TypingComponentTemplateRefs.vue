<script setup lang="ts">
import AlertComponent from '../components/AlertComponent.vue';
import ComponentTemplateRef from '@/markDown/4.TypingComponentTemplateRef.md'

// Assigning a ref to a component instance
const childAlertComponent = ref<InstanceType<typeof AlertComponent> | null>(null)

const triggerAlertOnChild = () => {
  childAlertComponent.value?.alertFn()
}

const numberOfAlerts = computed(() => {
  return childAlertComponent.value?.numberOfAlerts
})
</script>

<template>
  <div>
    <ComponentTemplateRef class="mb-4" />
    <AlertComponent ref="childAlertComponent" />
    <div class="d-flex flex-column justify-center align-center mt-12">
      <v-btn width="200px" size="large" color="#41b883" @click="triggerAlertOnChild">Trigger Alert</v-btn>
      <span ref="mySpan" class="alert-span d-block"># of alerts: {{ numberOfAlerts }}</span>
    </div>
  </div>
</template>

<style scoped>
.alert-span {
  color: red;
  font-family: monospace;
  font-size: 20px;
  margin-top: 10px;
}
</style>