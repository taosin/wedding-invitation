<!-- 首页入口 -->
<template>
	<div style="height:100%;width:100%;position: absolute;" @touchstart="startTouch" @touchend="endTouch">
		<router-view class="view" transition="expand" transition-mode="out-in"></router-view>
	</div>
</template>

<script>
    export default{
        components:{
        },
        data(){
            return{
                position: {},
                afterPosition: {},
                screenX:0,
                screenY:0
            };
        },
        ready(){
            this.hasTouched();
            this.getScreen();
        },
        watch:{
            afterPosition(val){
                const x = this.position.x;
                const y = this.position.y;
                const time = this.position.time;

                const endX = this.afterPosition.x;
                const endY = this.afterPosition.y;
                const endTime = this.afterPosition.time;

                if(endY - y > this.screenY /4 ){
                    window.router.go('/index/page1');
                }else{
                    // window.history.back(-1);
                }
                console.info(document.URL);
            }
        },
        route:{
        	data(transition){
        		console.info(transition.from.name);
        	}
        },
        methods:{
            // 判断是否支持touch事件
            hasTouched(){
                const touchObj={};
                touchObj.isSupportTouch = 'ontouchend' in document ? true : false;
                touchObj.isEvent=touchObj.isSupportTouch?'yes':'no';
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
                const touch = event.changedTouches[0]; 
                this.afterPosition = { x:touch.pageX,y:touch.pageY,time:+new Date() }; 
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
            }
        }
    };
</script>