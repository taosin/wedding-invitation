<!-- 首页入口 -->
<template>
	<div>
		<router-view class="view" transition="expand" transition-mode="out-in"></router-view>
	</div>

</template>

<script>
	export default{
		components:{
		},
		data(){
			return{
			};
		},
		ready(){
		},
		route: {
			data(transition) {
				if(transition.from.name){
					debugger;
				}else{
					window.router.go('/');
				}
			}
		},
		watch:{
		},
		computed:{
		},
		methods:{

		}
	};
</script>