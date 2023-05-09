<script setup lang="ts">

const numberOfAlerts = ref(0)

const alertFn = () => {
    alert('Hello from the alert component!')
    numberOfAlerts.value++
}

defineExpose({
    alertFn,
    numberOfAlerts
})
</script>
