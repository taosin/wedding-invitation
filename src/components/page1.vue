<template>
	<div class="page1">
		<div v-if="initialSlide===1">
			<h3>第一页</h3>
			<div class="donghua">eeee</div>
		</div>
	</div>
</template>
<script>
	import pageOne from '../components/page1.vue';
	export default{
		components:{
			pageOne
		},
		props:{
			initialSlide:{
				type:Number,
				twoWay: false
			}
		},
		data(){
			return{
			};
		},
		watch:{
			initialSlide(val){
			}
		},
		methods:{
		}
	};
</script>
<style lang="less" scoped>
	.page1{
		background: #333;
		width: 100%;
		height: 100%;
		.donghua{
			width:100px;
			height:100px;
			background:red;
			position:relative;
			animation:myfirst 5s;
			-moz-animation:myfirst 5s; /* Firefox */
			-webkit-animation:myfirst 5s; /* Safari and Chrome */
			-o-animation:myfirst 5s; /* Opera */
		}

		@keyframes myfirst
		{
			0%   {background:red; left:0px; top:0px;}
			25%  {background:yellow; left:200px; top:0px;}
			50%  {background:blue; left:150px; top:150px;}
			75%  {background:green; left:100px; top:100px;}
			100% {background:red; left:0px; top:0px;}
		}

		@-moz-keyframes myfirst /* Firefox */
		{
			0%   {background:red; left:0px; top:0px;}
			25%  {background:yellow; left:200px; top:0px;}
			50%  {background:blue; left:200px; top:200px;}
			75%  {background:green; left:0px; top:200px;}
			100% {background:red; left:0px; top:0px;}
		}

		@-webkit-keyframes myfirst /* Safari and Chrome */
		{
			0%   {background:red; left:0px; top:0px;}
			25%  {background:yellow; left:200px; top:0px;}
			50%  {background:blue; left:200px; top:200px;}
			75%  {background:green; left:0px; top:200px;}
			100% {background:red; left:0px; top:0px;}
		}

		@-o-keyframes myfirst /* Opera */
		{
			0%   {background:red; left:0px; top:0px;}
			25%  {background:yellow; left:200px; top:0px;}
			50%  {background:blue; left:200px; top:200px;}
			75%  {background:green; left:0px; top:200px;}
			100% {background:red; left:0px; top:0px;}
		}
	}
</style>