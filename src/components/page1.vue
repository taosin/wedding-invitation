<template>
	<div class="page1" v-show="initialSlide===1">
		<!-- <div v-show="initialSlide===1">
		</div> -->
		<div class="bk_01">
		</div>
		<div class="welcome">
		</div>
		<div class="name">
			
		</div>
	</div>
</template>
<script>
import pageOne from '../components/page1.vue';
import '../../static/css/page.scss';
export default {
	components: {
		pageOne
	},
	props: {
		initialSlide: {
			type: Number,
			twoWay: false
		}
	},
	data() {
		return {
		};
	},
	watch: {
		initialSlide(val) {
		}
	},
	methods: {
	}
};
</script>