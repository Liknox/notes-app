<template>
	<div class="wrappper">
		<div class="wrapper-content">
			<section>
				<div class="container">
					<h1 class="note-title main-title">{{ title }}</h1>

					<message :message="message" v-if="message" />

					<newNote :note="note" @addNote="addNote" />

					<div class="note-header a" style="margin: 36px 0">
						<h1 class="note-title">{{ findYNote }}</h1>
						<search :value="search" placeholder="Find your note" @search="search = $event" />
						<div class="icons">
							<svg :class="{ active: grid }" v-on:click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="3" width="7" height="7"></rect>
								<rect x="14" y="3" width="7" height="7"></rect>
								<rect x="14" y="14" width="7" height="7"></rect>
								<rect x="3" y="14" width="7" height="7"></rect>
							</svg>
							<svg :class="{ active: !grid }" v-on:click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="8" y1="6" x2="21" y2="6"></line>
								<line x1="8" y1="12" x2="21" y2="12"></line>
								<line x1="8" y1="18" x2="21" y2="18"></line>
								<line x1="3" y1="6" x2="3" y2="6"></line>
								<line x1="3" y1="12" x2="3" y2="12"></line>
								<line x1="3" y1="18" x2="3" y2="18"></line>
							</svg>
						</div>
					</div>

					<notes :notes="notesFilter" :grid="grid" @remove="removeNote" />
				</div>
				<descr />
			</section>
		</div>
	</div>
</template>
<script>
import newNote from "@/components/NewNote.vue/"
import message from "@/components/Message.vue/"
import notes from "@/components/Notes.vue/"
import search from "@/components/Search.vue/"
import descr from "@/components/Descr.vue/"
export default {
	components: {
		notes,
		message,
		newNote,
		search,
		descr,
	},
	data() {
		return {
			title: "Notes App",
			findYNote: "Find Note",
			search: "",
			message: false,
			grid: true,
			note: {
				title: "",
				descr: "",
			},
			notes: [
				{
					title: "First Project",
					descr: "Description for first note",
					date: new Date(Date.now()).toLocaleString(),
				},
				{
					title: "Second Project",
					descr: "Description for Second note",
					date: new Date(Date.now()).toLocaleString(),
				},
				{
					title: "Third Project",
					descr: "Description for Third note",
					date: new Date(Date.now()).toLocaleString(),
				},
			],
		}
	},
	computed: {
		notesFilter() {
			let array = this.notes,
				search = this.search
			if (!search) {
				return array
			}
			search = search.trim().toLowerCase()
			// Filter
			array = array.filter((item) => {
				if (item.title.toLowerCase().indexOf(search) !== -1) {
					return item
				}
			})
			return array
		},
	},
	methods: {
		addNote() {
			// console.log(this.note)

			// for th

			let { title, descr } = this.note

			if (title === "") {
				this.message = "Title can't be empty"
				return false
			}
			this.notes.push({
				// title: this.note.title
				// descr: this.note.descr
				title,
				descr,
				date: new Date(Date.now()).toLocaleString(),
			})
			this.message = null
			this.note.title = ""
			this.note.descr = ""
		},
		removeNote(index) {
			this.notes.splice(index, 1)
		},
	},
}
</script>

<style></style>
