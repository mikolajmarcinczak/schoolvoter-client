<template>
	<div v-if="universities && universities.length">
		<h3>University List</h3>
		<ul>
			<university-item v-for="university in universities" :key="university.id" :u-name="university.name" :u-type="university.type" :u-city="university.city" :u-score="university.score">
			</university-item>
		</ul>
	</div>
	<div v-else>
		<h3>No data provided. Add a university item.</h3>
	</div>
</template>

<script>
import {inject, ref, watchEffect} from "vue";
import UniversityItem from "@/components/university/UniversityItem.vue";
export default {
	name: "UniversityList",
	components: {
		UniversityItem
	},
	inject: ['universities']
}
</script>

<style scoped>
ul {
	list-style-type: none;
	padding: 0;
	margin: 0 auto;
	max-width: 40rem;
}
</style>