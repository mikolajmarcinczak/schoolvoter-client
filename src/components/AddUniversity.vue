<template>
	<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
		<h1 class="text-xl font-bold">Add University</h1>
		<form @submit.prevent="addUniversity" class="flex flex-col space-y-4">
			<label for="name" class="font-bold">University Name:</label>
			<input type="text" id="name" v-model="university.name" required class="border-2 border-gray-300 p-2 rounded-md">

			<label for="score" class="font-bold">University Score:</label>
			<div class="flex">
				<div v-for="star in 10" :key="star" class="cursor-pointer" @click="setScore(star)">
					<svg :fill="star <= university.score ? 'yellow' : 'none'" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15.638l-6.172 3.245a1 1 0 01-1.452-1.054l1.794-7.382L.308 9.21a1 1 0 01.562-1.815l7.588-.657L11.794.668a1 1 0 011.412 0l3.336 6.07 7.588.657a1 1 0 01.562 1.815l-5.862 4.327 1.794 7.382a1 1 0 01-1.452 1.054L12 15.638z"></path>
					</svg>
				</div>
			</div>

			<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add University</button>
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
</style>
