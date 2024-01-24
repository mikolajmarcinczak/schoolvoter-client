<template>
	<div id="listHeader">
		<h1>University List</h1>
		<base-button mode="dangerBtn" @click="removeAll()">Delete All</base-button>
		<base-button mode="flat" @click="filtering = !filtering">Filter</base-button>
	</div>
	<base-card v-if="filtering">
		<label for="minScore">Min rating:</label>
		<input class="sexyInput" type="number" min="1" max="10" v-model="minScore">
		<label for="maxScore">Max rating:</label>
		<input class="sexyInput" type="number" min="1" max="10" v-model="maxScore">
		<label for="universityName"><br>University Name:</label>
		<input class="sexyInput" type="text" v-model="universityName" title="Filtering by name excludes filtering by rating">
		<base-button @click="submitFilter()">Submit filter</base-button>
	</base-card>
	<div v-if="universities && universities.length > 0">
		<ul>
			<university-item v-for="university in universities" :key="university.id" :u-name="university.name" :u-type="university.type" :u-city="university.miasto" :u-score="university.score" :u-votes="university.votes">
			</university-item>
		</ul>

	</div>

	<div v-else>
		<h3>No data provided. Add a university item.</h3>
	</div>
</template>

<script>
import UniversityItem from "@/components/university/UniversityItem.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
export default {
	name: "UniversityList",
	components: {
		BaseCard,
		BaseButton,
		UniversityItem
	},
	inject: ['universities', 'removeAll', 'getUniversitiesByScore', 'getSingleUniversity'],
	data() {
		return {
			minScore: 1,
			maxScore: 10,
			universityName: '',
			filtering: false
		}
	},
	methods: {
		submitFilter() {
			if (this.universityName === '')
				this.getUniversitiesByScore(this.minScore, this.maxScore);
			if (this.universityName !== '')
				this.getSingleUniversity(this.universityName);
			this.filtering = false;
		}
	}
}
</script>

<style scoped>
#listHeader {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 40rem !important;
	margin: 2rem auto;
}

.sexyInput {
	border: 2px solid #002741;
	border-radius: 12px;
	padding: 8px;
	margin: 8px;
}

h1 {
	font-size: 22px;
	font-weight: bold;
}

ul {
	list-style-type: none;
	padding: 0;
	margin: 0 auto;
	max-width: 40rem;
}
</style>