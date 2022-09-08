<template>
	<div class="new-note">
		<label>Title</label>
		<input v-model="note.title" type="text" />
		<label>Description</label>
		<textarea v-model="note.descr"></textarea>
		<button class="btn btnPrimary" @click="addNoter">New note</button>
	</div>
</template>

<script>
export default {
	props: {
		note: {
			type: Object,
			required: false,
		},
	},
	methods: {
		addNoter() {
			this.$emit("addNote", this.note)
		},
	},
}
</script>

<style lang="scss">
.new-note {
	text-align: center;
}
</style>
