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
button {
	margin-top: 20px !important;
}
.new-note {
	text-align: center;
	max-width: 50%;
	margin: 0 auto;
}
.note-title {
	font-size: 32px;
	font-weight: bold;
}

@media (max-width: 650px) {
	.note {
		width: 100% !important;
		&-title {
			margin: 10px 0;
			font-size: 100%;
			font-weight: normal;
		}
		&-header {
			flex-wrap: wrap;
		}
		&s {
			padding-top: 0px !important;
		}
		&-header h1 {
			font-size: 100% !important;
			font-weight: normal !important;
		}
	}
	.new-note {
		max-width: 100%;
	}
	.icons {
		display: none;
	}
	.wrapper-search {
		margin: 15px 0 0 -15px !important;
	}
}
</style>