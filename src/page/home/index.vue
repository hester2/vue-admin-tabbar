<template>
	<div>
		丰富
		<layout></layout>
	</div>
</template>

<script>
	 import layout from "../components/layout";
	 export default {
	   components: {
	     layout
	   },
	   mounted() {
	   	this.$router.push('/home/tab2')
	   }
	   }
</script>

<style>
</style>
