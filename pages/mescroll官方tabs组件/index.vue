<template>
	<view>
		<me-tab :tabs="tabs" v-model="tabIndex" ></me-tab>
		<!-- 字节跳动小程序要动态绑定ref -->
		<!-- <mescroll-item :tabs="tabs" v-for="(tab, index) in tabs" :key="index" ref="'mescrollItem'+i"></mescroll-item> -->
		<mescroll-item :tabs="tabs" v-for="(tab, index) in tabs" :key="index" :index="index" :tabIndex="tabIndex" ref="mescrollItem">
			
		</mescroll-item>
	</view>
</template>
<script>
	import MescrollMoreMixin from "../../uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more.js"
	import mescrollItem from "./mescroll-item.vue"
	import meTab from '../../component/me-tab/me-tab.vue'
	export default {
		mixins: [MescrollMoreMixin], //多个mescroll--body写在子组件时，需要使用mescroll-more.js补充子组件的页面生命周期
		data() {
			return {
				// 固定量,不能随意更改为其他的名字 必须与mescroll-more.js对应,代表当前tab的下标
				tabIndex: 0,
				tabs: [{
					name: '全部'
				}, {
					name: '奶粉'
				}, {
					name: '面膜'
				}, {
					name: '咖啡'
				}, {
					name: '衣服'
				}, ],


			}
		},
		components: {
			meTab,
			mescrollItem

		}
	}
</script>
