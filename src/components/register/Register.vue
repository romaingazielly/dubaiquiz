<template>
	<v-form v-model="valid">
	    <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Pseudo" required
	    ></v-text-field>

	    <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"
	    ></v-checkbox>

	    <v-btn @click="submit">submit</v-btn>
	  </v-form>
</template>

<script>
	export default{
		name: 'Register',
		data(){

		}
	}
</script>