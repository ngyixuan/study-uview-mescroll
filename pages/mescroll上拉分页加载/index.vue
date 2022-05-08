<template>
	<view class="">
		<view class="box">
			<text>导航栏</text>
		</view>
		<mescroll-body top="100" ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback" :up="upOption" :down="downOption">
			<view v-for="(item,index) in 100" :key="index">
				{{item}}商品列表
			</view>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "../../uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"
	
	export default{
		mixins: [MescrollMixin],
		data(){
			return{
				
				// mescroll:null,
				upOption:{
					auto:false
				},
				downOption:{
					auto:false
				},
				goodList:[]
			}
		},
		onLoad(){
			
		},
		methods:{
			// mescrollInit(mescroll){
			// 	this.mescroll = mescroll
			// },
			upCallback(page){
				console.log("Current Page:",page);
				//重新请求最新的接口数据
				// uni.request({
				// 	url:'xxx?pageNum='+page.num+'&pageSize='+page.size+'&catname='+catname,
				// 	success:(res)=>{
				// 		const {data} = res
				// 		// 接口返回的数据
				// 		// 1.分页数据
				// 		let curPageData = data.xxx
				// 		// 2.分页数据的长度
				// 		let curPageLen  = curPageData.length
				// 		// 3.总页数
				// 		let totalPage = data.xxx
				// 		// 4.数据总量
				// 		let totalSize = data.xxx
						
				// 		if(page.num==1) this.goodList = []
				// 		// 追加数据
				// 		this.goodList = this.goodList.concat(curPageData)
				// 		this.mescroll.endBySize(curPageLen,totalSize)
				// 	},fail:()=>{
				// 		this.mescroll.endErr()
				// 	}
				// })
				
				this.mescroll.endSuccess(50)
			},
			downCallback(){
				console.log("Pull Down Refresh");
				//重新请求最新的接口数据
				// uni.request({
				// 	url:'xxx',
				// 	success:(res)=>{
				// 		if(res.data.status==0){
				// 			this.mescroll.endSuccess()
				// 		}
				// 	}
				// })
				// 自动执行page.num=1然后调用upCallback
				this.mescroll.resetUpScroll()
				
				setTimeout(()=>{
					this.mescroll.endSuccess()
				},1000)
			}
			
		}
	}
</script>

<style>
	.box{
		height: 100px;
		border-bottom: 1px solid black;
	}
</style>
