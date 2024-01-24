<template>
	<base-card>
		<base-button @click="switchTab('university-list')" :mode="universityListMode">All Universities</base-button>
		<base-button @click="switchTab('add-university')" :mode="addUniversityMode">Add University</base-button>
	</base-card>
	<keep-alive>
		<component :is="selectedTab"></component>
	</keep-alive>
</template>

<script>
import UniversityList from "@/components/university/UniversityList.vue";
import AddUniversity from "@/components/university/AddUniversity.vue";
import axios from "axios";
export default {
	name: "TheUniversities",
	components: {
		UniversityList,
		AddUniversity
	},
	data() {
		return {
			selectedTab: 'university-list'
		}
	},
	provide() {
		return {
			universities: [0, 1],  //to be loaded by axios
			addUniversity: this.addUniversity,
			removeUniversity: this.removeUniversity
		}
	},
	computed: {
		universityListMode() {
			return this.selectedTab === 'university-list' ? null : 'flat'
		},
		addUniversityMode() {
			return this.selectedTab === 'add-university' ? null : 'flat'
		},
	},
	methods: {
		switchTab(tab) {
			this.selectedTab = tab;
		},
		addUniversity(university) {
			axios.post('http://localhost:8081/api/context/', university)
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						this.selectedTab = 'university-list';
					});
		},
		removeUniversity(name) {
			axios.delete('http://localhost:8081/api/context/' + name)
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						this.selectedTab = 'university-list';
					});
		}
	},
}
</script>

<style scoped>

</style>