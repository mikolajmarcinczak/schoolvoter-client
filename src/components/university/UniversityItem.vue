<template>
	<li>
		<base-card>
			<header>
				<h3>{{uName}}</h3>
				<base-button mode="flat" @click="removeUniversity(uName)">Delete</base-button>
			</header>
			<p>{{uType}} <span style="text-emphasis: #002741">{{uCity}}</span></p>
			<p>
				<span v-for="star in stars" :key="star">
					<i class="fas fa-star" :class="{ 'text-gold': star <= uScore }" @click="vote(star)"></i>
				</span>
				<span style="margin-left: 3px">{{Number(uScore).toFixed(2)}} out of {{ uVotes }} votes</span>
			</p>
		</base-card>
	</li>
</template>

<script>
export default {
	name: "UniversityItem",
	props: ['uName', 'uType', 'uCity', 'uScore', 'uVotes'],
	inject: ['removeUniversity', 'sendRating'],
	computed: {
		stars() {
			return Array.from({length: 10}, (_, i) => i + 1);
		}
	},
	methods: {
		vote(star) {
			this.sendRating(this.uName, star);
		}
	}
}
</script>

<style scoped>
p {
	margin: 0.5rem 0;
}

h3 {
	font-size: 1.25rem;
	margin: 0.5rem 0;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

li {
	margin: auto;
	max-width: 40rem;
}

.text-gold {
	color: gold;
}
</style>