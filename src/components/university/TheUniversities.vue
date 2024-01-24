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
import {ref, toRaw, toRefs} from "vue";
export default {
	name: "TheUniversities",
	components: {
		UniversityList,
		AddUniversity
	},
	data() {
		return {
			selectedTab: 'university-list',
			universities: ref([]),
		}
	},
	provide() {
		const { universities } = toRefs(this);
		console.log(universities)
		return {
			universities,  //to be loaded by axios
			addUniversity: this.addUniversity,
			removeUniversity: this.removeUniversity,
			sendRating: this.sendRating,
			removeAll: this.removeAll,
			getUniversitiesByScore: this.getUniversitiesByScore,
			getSingleUniversity: this.getSingleUniversity,
		}
	},
	mounted() {
		this.getUniversities();
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
		getSingleUniversity(name) {
			axios.get('http://localhost:8081/api/query/' + name)
					.then(response => {
						console.log(response.data)
						this.universities = [];
						this.universities.push(response.data.singleUni);
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						this.selectedTab = 'university-list';
					});
		},
		getUniversities() {
			axios.get('http://localhost:8081/api/query/')
					.then(response => {
						this.universities = toRaw(response.data.universities);
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						this.selectedTab = 'university-list';
					});
		},
		getUniversitiesByScore(min, max) {
			axios.get('http://localhost:8081/api/query/score', {
				params: {
					min: min,
					max: max
				}
			})
					.then(response => {
						this.universities = toRaw(response.data.universities);
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						this.selectedTab = 'university-list';
					});
		},
		addUniversity(university) {
			axios.post('http://localhost:8081/api/context/', {
				name: university.name,
				type: university.type,
				miasto: university.miasto,
			})
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.getUniversities();
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
						this.getUniversities();
						this.selectedTab = 'university-list';
					});
		},
		removeAll() {
			axios.delete('http://localhost:8081/api/context/')
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						this.getUniversities();
						this.selectedTab = 'university-list';
					});
		},
		sendRating(name, score) {
			axios.put('http://localhost:8081/api/context/' + name, {
				name: name,
				newScore: score
			})
					.then(response => {
						console.log(response);
					})
					.catch(error => {
						console.log(error);
					})
					.finally(() => {
						this.getUniversities();
						this.selectedTab = 'university-list';
					});
		}
	},
}
</script>

<style scoped>

</style>