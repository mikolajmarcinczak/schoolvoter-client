<template>
	<button :class="mode" >
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "BaseButton",
	props: ['mode']
}
</script>

<style scoped>
button {
	padding: 0.75rem 1.5rem;
	font-family: inherit;
	background-color: #003a61;
	border: 1px solid #003a61;
	color: white;
	cursor: pointer;
	max-width: 40em;
}

button:hover,
button:active {
	background-color: #002941;
	border-color: #002539;
}

.flat {
	background-color: transparent;
	color: #003c61;
	border: none;
}

.flat:hover,
.flat:active {
	background-color: #d2edff;
}
</style>