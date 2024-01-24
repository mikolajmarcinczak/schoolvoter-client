<template>
	<the-header title="School Voter"/>
	<the-universities></the-universities>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheUniversities from "@/components/university/TheUniversities.vue";

export default {
  name: 'App',
  components: {
		TheHeader,
		TheUniversities
  },
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	box-sizing: border-box;
}

* {
	box-sizing: border-box;
}

html {
	font-size: 1rem;
}

body {
	margin: 0;
}

.text-gold {
	color: #FFD700;
}
</style>
