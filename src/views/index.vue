<!-- 首页入口 -->
<template>
	<div @touchstart="startTouch" @touchend="endTouch" class="index">
		<div class="music {{isPlay?'play':''}}" @click="musicControl">
			<span></span>
			<audio :src="music" loop="loop" :autoplay="autoplay" preload ></audio>
		</div>
		<!-- <router-view class="view" transition="expand" transition-mode="out-in"></router-view> -->
		<div class="step-1" v-show="current===1" transition-mode="out-in" transition="index">
		</div>
		<div class="step-2" v-show="current===2" transition-mode="out-in" transition="index">
		</div>
		<div class="step-3" v-show="current===3" transition-mode="out-in" transition="index">
			
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
				isPlay:true,
				current:1,
				autoplay:true
			};
		},
		ready(){
			this.hasTouched();
			this.getScreen();
		},
		watch:{
			afterPosition(val){
				// const x = this.position.x;
				// const y = this.position.y;
				// const time = this.position.time;

				// const endX = this.afterPosition.x;
				// const endY = this.afterPosition.y;
				// const endTime = this.afterPosition.time;
				// if( (endY - y > this.screenY / 4 ) && this.markIndex > 0){
				// 	window.router.go('/index/page'+(this.markIndex).toString());
				// }else if( y - endY > this.screenY / 4 ){
				// 	if(this.markIndex > -1){
				// 		window.router.go('/index/page'+ (this.markIndex + 2).toString() );
				// 	}
				// }
			}
		},
		route:{
			data(transition){
				// const url = document.URL.split('#')[1];
				// let urlP = '';
				// const routers = window.routers;
				// if(url === '/index' || url === '/' || url === '/index/'){
				// 	window.router.go('/index/page1');
				// }else{
				// 	urlP = url.split('/')[2];
				// 	for (let i = 0; i < routers.length; i++) {
				// 		if(urlP === routers[i]){
				// 			this.markIndex = i;
				// 			console.info(this.markIndex +url);
				// 		}
				// 	}
				// }
			}
		},
		methods:{
            // 判断是否支持touch事件
            hasTouched(){
            	const touchObj={};
            	touchObj.isSupportTouch = 'ontouchend' in document ? true : false;
            	touchObj.isEvent = touchObj.isSupportTouch ? 'yes':'no';
            	console.info(touchObj.isEvent);
            	return touchObj.isEvent;
            },

            // 获取屏幕宽高
            getScreen(){
            	this.screenX = window.screen.width;
            	this.screenY = window.screen.height;
            	console.info(this.screenX);
            	console.info(this.screenY);
            },

            // 滑动开始
            startTouch(event){
            	const touch = event.targetTouches[0]; 
                // touches数组对象获得屏幕上所有的touch，取第一个touch
                this.position = { x:touch.pageX,y:touch.pageY,time:+new Date() }; 
                // 取第一个touch的坐标值
            },

            // 滑动释放
            endTouch(event){
            	const x = this.position.x;
            	const y = this.position.y;
            	const time = this.position.time;

            	const endX = this.afterPosition.x;
            	const endY = this.afterPosition.y;
            	const endTime = this.afterPosition.time;
            	const touch = event.changedTouches[0]; 
            	this.afterPosition = { x:touch.pageX,y:touch.pageY,time:+new Date() }; 
            	if( (endY - y > 150) && this.current > 1){
            		this.current = this.current - 1;
            	}else if( y - endY > 150 ){
            		this.current = this.current + 1;
            	}
            	event.preventDefault();
            },
            // 判断滑动的位置
            touchPosition(position, afterPosition){

            	const self = this;
            	const halfScreen = self.screenY / 2;

            	const x = position.x;
            	const y = position.y;
            	const time = position.time;

            	const endX = afterPosition.x;
            	const endY = afterPosition.y;
            	const endTime = afterPosition.time;
            },
            musicControl(){
            	alert('111');
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


	.index-transition {

	}

	.index-enter {
		animation: index-in 1s;
	}

	.index-leave{
		animation: index-out 1.5s;
	}

	@keyframes index-in {
		0% {
			// opacity: 0;
			top: 0%;
		}
		25% {
			// opacity: 0.25;
			top: 25%;
		}
		50% {
			// opacity: 0.5;
			top: 50%;
		}
		75% {
			// opacity: 0.75;
			top: 75%;
		}
		100% {
			// opacity: 1;
			top: 100%;
		}
	}

	@keyframes index-out {
		0% {
			top: 100%;
			// opacity: 1;
		}
		25% {
			top: 75%;
			// opacity: 0.75;
		}
		50% {
			top: 50%;
			// opacity: 0.5;
		}
		75% {
			top: 25%;
			// opacity: 0.25;
		}
		100% {
			top: 0%;
			// opacity: 0;
		}
	}

</style>