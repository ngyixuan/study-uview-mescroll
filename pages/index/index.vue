<template>
	<view>
		<u-back-top :scroll-top="scrollTop" :mode="mode" :icon-style="iconStyle" top="600"></u-back-top>
		<u-navbar :background="bgColor" :is-back="false" title="优选商场" title-color="#ffffff" :title-bold="true">
		</u-navbar>
		<u-swiper :list="banner" duration="3000" :circular="true" :height="375"></u-swiper>
		<u-notice-bar :speed="100" :close-icon="true" :more-icon="true" type="error" mode="horizontal" :list="notice">
		</u-notice-bar>
		<u-grid :col="5" :border="false">
			<u-grid-item v-for="(item,index) in cateList" :key="index" :custom-style="gridStyle">
				<u-icon size="70" :name="item.cateImg"></u-icon>
				<view class="grid-text u-m-t-20">{{item.cateTitle}}</view>
			</u-grid-item>
		</u-grid>
		<u-search placeholder="请输入..." v-model="keyword" :animation="true" shape="square" class="px-20 u-m-20">
		</u-search>
		<h-rec-cate :recCateList="recCate"></h-rec-cate>
		<h-rec-title title="猜你喜欢" desc='YOU LIKE'></h-rec-title>
		<u-gap height="20" bg-color="#f8f8f8"></u-gap>
		<view class="px-20">
			<view v-for="(item,index) in goodsList" :key="index" class="shadow u-border-radius d-flex u-p-10 a-center u-m-b-30"
				style="height: 200rpx;">
				<image src="../../static/Lovepik_com-401773459-rhino-modeling-phone.png" class="flex-shrink img-160">
				</image>
				<view class="d-flex flex-columnt j-sb h-100 u-line-1 u-p-r-10">
					<view class="u-m-t-10">
						<view class="u-line-1 u-font-32 u-m-b-5">
							{{item.goodsName}}
						</view>
						<view class="u-line-1 u-font-26 gray-color">
							软件开发定制商城交友外卖订餐会员管理
						</view>
					</view>
					<view class="d-flex j-sb w-100">
						<view class="d-flex a-end">
							<view class="main-color u-m-r-15">
								<text class="font-weight u-font-26">$</text>
								<text class="font-weight u-font-26">99</text>

							</view>
							<view class="line-throught gray-color u-font-26">
								199
							</view>
						</view>
						<view class="">
							<u-button type="success" size="mini">立即购买</u-button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :icon-type="iconType" :status="status" :load-text="loadText" />
	</view>


</template>

<script>
	import hRecCate from '../../component/h-rec-cate/h-rec-cate.vue'
	import hRecTitle from '../../component/h-rec-title/h-rec-title.vue'
	import swiper from '../../common/data/swiper.js'
	import cateList from '../../common/data/cateList.js'
	import recCate from '../../common/data/recCate.js'
	import goodsList from '../../common/data/goodsList.js'
	console.log(recCate)
	export default {
		data() {
			return {
				iconType: 'flower',
				status: 'loadmore',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				scrollTop: 0,
				mode: 'circle',
				iconStyle: {
					fontSize: '32rpx',
					color: '#188F80'
				},
				recCate: recCate,
				goodsList:goodsList,
				bgColor: {
					backgroundImage: 'linear-gradient(45deg, rgb(28,187,180),rgb(141,198,63))'
				},
				banner: swiper,
				notice: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				cateList: cateList,
				gridStyle: {
					padding: "30rpx 0 0 0",

				},
				keyword: ''
			}
		},
		onLoad() {

		},
		methods: {
			getuserinfo(res) {
				console.log(res);
			},
			addGoods(){
				for (let i=0;i<10;i++) {
					let index = this.$u.random(0,this.goodsList.length-1)
					let item = this.goodsList[index]
					this.goodsList.push(item)
				}
			}

		},
		components: {
			hRecCate,
			hRecTitle
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onReachBottom(e){
			this.status = 'loading',
			setTimeout(()=>{
				this.addGoods()
			},1000)
		}
	}
</script>

<style lang="scss">
	.gridStyle {
		box-sizing: border-box;
		overflow: hidden;
	}

	.cateRight {
		border-right: 1rpx solid #cccccc;
	}

	.cateBottom {
		border-bottom: 1rpx solid #cccccc;
	}

	.borderB {
		border-bottom: 2rpx solid #1BBF80;
	}
</style>
