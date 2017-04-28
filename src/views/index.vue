<!-- 首页入口 -->
<template>
	<div id="listGroupA">
		<div class="music {{isPlay?'play':''}}" @click="musicControl">
			<span></span>
			<audio :src="music" loop="loop" :autoplay="autoplay" preload ></audio>
		</div>
	</div>
</template>

<script>
	import './../../static/css/music.scss';
	import './../../static/css/index.scss';
	export default{
		components:{
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
				autoplay:false
			};
		},
		attached(){
			util.toucher(document.getElementById('listGroupA'))
			.on('swipeLeft','.list-item',function(){
				addClass(this,'list-item-status-del');
				return false;
			})
			.on('swipeRight','.list-item',function(){
				removeClass(this,'list-item-status-del');
				return false;
			})
			.on('singleTap','.list-item-del',function(){
				alert('这只是个demo！');
			});
		},
		watch:{
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
<style lang="less">
</style>