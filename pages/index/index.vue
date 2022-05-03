<template>
	<view>
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
		<u-search placeholder="请输入..." v-model="keyword" :animation="true" shape="square" class="px-20 u-m-20"></u-search>

	</view>
</template>

<script>
	export default {
		data() {
			return {

				bgColor: {
					backgroundImage: 'linear-gradient(45deg, rgb(28,187,180),rgb(141,198,63))'
				},
				banner: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				notice: [
					'寒雨连江夜入吴',
					'平明送客楚山孤',
					'洛阳亲友如相问',
					'一片冰心在玉壶'
				],
				cateList: [{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "APP开发",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "小程序定制",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					},
					{
						cateImg: 'https://cdn.uviewui.com/uview/example/button.png',
						cateTitle: "网站建设",

					}
				],
				gridStyle: {
					padding: "30rpx 0 0 0",

				},
				keyword:''
			}
		},
		onLoad() {

		},
		methods: {
			getuserinfo(res) {
				console.log(res);
			}

		}
	}
</script>

<style lang="scss">
	.gridStyle {
		box-sizing: border-box;
		overflow: hidden;
	}
</style>
