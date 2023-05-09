<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";

</script>

<template>
	<div>
		<ConfettiExplosion class="mx-auto" :duration="7000" :particleCount="200" :force="0.3" />
		<h1 class="text-h3 my-4
		">Thank you for your attendance! 🎊</h1>
		<p class="text-h6">
			I hope you enjoyed the presentation and learned something new about Vue 3
			and TypeScript.
		</p>
	</div>
</template>
