<template>
	<base-dialog v-if="!inputIsValid" title="Invalid input" @close="confirmError()">
		<template #content>
			<p>At least one input value is invalid.</p>
			<p>Please check inputs for empty values.</p>
		</template>
		<template #actions>
			<base-button @click="confirmError()">OK</base-button>
		</template>
	</base-dialog>
	<base-card>
		<h1 class="text-xl font-bold">Add University</h1>
		<form @submit.prevent="submitData()" class="flex flex-col space-y-4">
			<label for="name" class="font-bold">University Name:</label>
			<input type="text" id="name" v-model="university.name" class="border-2 border-gray-300 p-2 rounded-md">

			<label for="type" class="font-bold">University Type:</label>
			<select id="type" v-model="university.type" class="border-2 border-gray-300 p-2 rounded-md">
				<option value="public">Public</option>
				<option value="private">Private</option>
			</select>

			<label for="city" class="font-bold">City:</label>
			<input type="text" id="city" v-model="university.miasto" class="border-2 border-gray-300 p-2 rounded-md">

			<!--<label for="score" class="font-bold">University Score:</label>
			<div class="flex">

				<div v-for="star in Array.from({length: 10}, (_, i) => (i + 1) / 2)" :key="star" class="cursor-pointer" @click.left="setScore(star)" @click.right.prevent="setScore(star - 0.5)">
					<i :class="star <= university.score ? 'fas fa-star text-gold' : star - 0.5 < university.score ? 'fas fa-star-half-alt text-gold' : 'far fa-star text-gray-300'"></i>
				</div>

			</div>-->

			<base-button type="submit">Add University</base-button>
		</form>
	</base-card>
</template>

<script>
export default {
  name: 'AddUniversity',
	inject: ['addUniversity'],
  data() {
		return {
			university: {
				name: '',
				type: '',
				miasto: '',
			},
			inputIsValid: true,
		};
	},
	methods: {
		submitData() {
			const newUniversity = {
				name: this.university.name,
				type: this.university.type,
				miasto: this.university.miasto,
			};

			if (newUniversity.name.trim() === ''
					|| newUniversity.type.trim() === ''
					|| newUniversity.miasto.trim() === ''
			) {
				this.inputIsValid = false;
				return;
			}

			this.addUniversity(newUniversity);
		},
		confirmError() {
			this.inputIsValid = true;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../assets/stars/stars.css");

label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input{
	display: block;
	width: 100%;
	font: inherit;
	padding: 0.15rem;
	border: 1px solid #ccc;
}

input:focus {
	outline: none;
	border-color: #003a61;
	background-color: #f7ebff;
}

</style>
