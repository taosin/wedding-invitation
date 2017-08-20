<!-- 首页入口 -->
<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<page-one :initial-slide.sync='initialSlide'></page-one>
			</div>
			<div class="swiper-slide">Slide 2</div>
			<div class="swiper-slide">Slide 3</div>
			<div class="swiper-slide">Slide 4</div>
			<div class="swiper-slide">Slide 5</div>
			<div class="swiper-slide">Slide 6</div>
			<div class="swiper-slide">Slide 7</div>
			<div class="swiper-slide">Slide 8</div>
			<div class="swiper-slide">Slide 9</div>
			<div class="swiper-slide">Slide 10</div>
		</div>
		<div class="swiper-pagination index-pagination"></div>
	</div>
</template>

<script>
	// import './../../static/css/music.scss';
	require('./../../static/js/swiper.min.js');
	import pageOne from '../components/page1.vue';
	export default{
		components:{
			pageOne
		},
		data(){
			return{
				position: {},
				afterPosition: {},
				screenX:0,
				screenY:0,
				markIndex:9999,
				music:'http://7xrvyq.com1.z0.glb.clouddn.com/LoveParadise_C48kbps.mp3',
				isPlay:false,
				current:1,
				autoplay:false,
				initialSlide:1
			};
		},
		attached(){
			const self = this;
			var swiper = new Swiper('.swiper-container', {
				// autoplay : 5000,
				direction: 'vertical',
				height : window.innerHeight,
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				onTransitionEnd(swipers){
					self.initialSlide = swipers.activeIndex + 1;
				}
			});
		},
		watch:{
			initialSlide(val){
			}
		},
		route:{
		},
		methods:{
			musicControl(){
				var music = document.querySelector('audio');
				if (music.paused) {
					music.play();
					this.isPlay = true;
				} else {
					music.pause();
					this.isPlay = false;
				}
			}
		}
	};
</script>
<style>
	html, body {
		position: relative;
		height: 100%;
	}
	body {
		background: #eee;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color:#000;
		margin: 0;
		padding: 0;
	}
	.swiper-container {
		width: 100%;
		height: 100%;
	}
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		width: 100%;
		height: 100%;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		/*display: flex;*/
		/*-webkit-box-pack: center;*/
		/*-ms-flex-pack: center;*/
		/*-webkit-justify-content: center;*/
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		/*border-bottom: 1px solid red;*/
	}
	.index-pagination{
		position: absolute;
		z-index: 99999;
		bottom: 2px;
		right: 2px;
		background: #ddd;
		padding: 2px 6px;
		border-radius: 10px 0 10px 0;
		color: #fff;
		opacity: .8;
	}
</style>