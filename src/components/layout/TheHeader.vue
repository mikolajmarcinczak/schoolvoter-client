<template>
	<header>
		<h1>{{ title }}</h1>
	</header>
</template>

<script>
export default {
	name: "TheHeader",
	props: ['title']
}
</script>

<style scoped>
header {
	width: 100%;
	height: 5rem;
	background-color: #003a61;
	display: flex;
	justify-content: center;
	align-items: center;
}
header h1 {
	color: white;
	text-align: center;
	line-height: 5rem;
	margin: 0;
}
</style>