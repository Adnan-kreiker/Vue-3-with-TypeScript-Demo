<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";


const socialCards = [
	{
		name: 'linkedIn',
		image: new URL('../assets/qr-github.png', import.meta.url).href,
		icon: 'mdi mdi-linkedin'
	},
	{
		name: 'github',
		image: new URL('../assets/qr-github.png', import.meta.url).href,
		icon: 'mdi mdi-github'
	}
]
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
		<div class="d-flex justify-center mt-8 text-center">
			<v-card class="mx-4
			" v-for="socialCard in socialCards" :key="socialCard.name">
				<v-card-title class="text-h5 my-2">
					{{ socialCard.name }}
					<v-icon>
						{{ socialCard.icon }}
					</v-icon>
				</v-card-title>
				<v-img width="300" class="mx-auto" :src="socialCard.image" />
			</v-card>
		</div>
	</div>
</template>
