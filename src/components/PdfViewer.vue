<!-- <template>
	<div>
		{{currentPage}} / {{pageCount}}
		<pdf
			src=".\summons_complaints.pdf"
			@num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
		></pdf>
	</div>
</template>

<script>

import pdf from 'vue-pdf'

export default {
    name: 'pdf-viewer',
	components: {
		pdf
	},
	data() {
		return {
			currentPage: 0,
			pageCount: 0,
		}
	}
}

</script> -->
<template>
	<div>
		<pdf
			v-for="i in numPages"
			:key="i"
			:src="src"
			:page="i"
		></pdf>
	</div>
</template>

<script>

import pdf from 'vue-pdf'

var loadingTask = pdf.createLoadingTask('./summons_complaints.pdf');

export default {
	components: {
		pdf
	},
	data() {
		return {
			src: loadingTask,
			numPages: undefined,
		}
	},
	mounted() {

		this.src.then(pdf => {

			this.numPages = pdf.numPages;
		});
	}
}

</script>

