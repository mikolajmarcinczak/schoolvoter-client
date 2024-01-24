<template>
	<li>
		<base-card>
			<header>
				<h3>{{uName}}</h3>
				<base-button mode="flat" @click="removeUniversity(uName)">Delete</base-button>
			</header>
			<p>{{uType}} <span style="text-emphasis: #002741">{{uCity}}</span></p>
			<p><span class="text-gold">{{ uScore }}</span></p>
		</base-card>
	</li>
</template>

<script>

export default {
	name: "UniversityItem",
	props: ['uName', 'uType', 'uCity', 'uScore'],
	inject: ['removeUniversity']
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
</style>