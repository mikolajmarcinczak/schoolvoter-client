<template>
	<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
		<h1 class="text-xl font-bold">Add University</h1>
		<form @submit.prevent="addUniversity()" class="flex flex-col space-y-4">
			<label for="name" class="font-bold">University Name:</label>
			<input type="text" id="name" v-model="university.name" required class="border-2 border-gray-300 p-2 rounded-md">

			<label for="score" class="font-bold">University Score:</label>
			<div class="flex">
				<div v-for="star in 10" :key="star" class="cursor-pointer" @click="setScore(star)">
					<i :class="star <= university.score ? 'fas fa-star text-gold' : 'far fa-star text-gold'"></i>
				</div>
			</div>

			<button type="submit" class="bg-green-400 hover:bg-green-700 text-white font-bold py-3 px-2 rounded-b-md">Add University</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddUniversity',
  data() {
		return {
			university: {
				name: '',
				score: 0
			}
		}
	},
	methods: {
		addUniversity() {
			axios.post('http://localhost:3000/universities', this.university)
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				})
				.finally(() => {
					this.university.name = '';
					this.university.score = 0;
				});
		},
		setScore(score) {
			this.university.score = score;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text-gold {
	color: #FFD700;
}
</style>
