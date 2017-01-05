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

                if(endY < y){
                    window.router.go('/index/page1');
                }else{
                    window.history.back(-1);
                }
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
                console.info(this.position.y + '------before');
            },

            // 滑动释放
            endTouch(event){
                const touch = event.changedTouches[0]; 
                this.afterPosition = { x:touch.pageX,y:touch.pageY,time:+new Date() }; 
                console.info(this.afterPosition.y +'------after');
            },

        }
    };
</script>

<style lang="less">


    .expand-transition {

    }

    .expand-enter {
        animation: expand-in 0.2s;
    }

    .expand-leave{
        animation: expand-out 0.5s;
    }

    @keyframes expand-in {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes expand-out {
     0% {
        opacity: 1;
    }
    25% {
        opacity: 0.75;
    }
    50% {
        opacity: 0.5;
    }
    75% {
        opacity: 0.25;
    }
    100% {
        opacity: 0;
    }
}

</style>