<template>
	<view v-show="index===tabIndex">
		<!-- ref属性的值要动态生成，字节跳动小程序不支持同个页面存在同个ref -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @up="upCallback" @down="downCallback" :up="upOption"
			:down="downOption" @emptyclick="emptyClick">
			<!-- {{curGoodsList}} -->
			<good-list :list="goodList"></good-list>
		</mescroll-body>
	</view>
</template>

<script>
	import goodList from "../../component/good-list/good-list.vue"
	import MescrollMixin from "../../uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"
	import MescrollMoreItemMixin from "../../uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more-item.js"
	import {
		apiSearch
	} from "../../api/mock.js"
	export default {
		mixins: [MescrollMixin, MescrollMoreItemMixin],
		data() {
			return {
				upOption: {
					auto: false,
					empty: {
						tip: '没有数据',
						btnText: '去看看'
					},
					textNoMore:'我是有底线的~',
					textLoading:'火速加载中！'
				},
				downOption: {
					auto: false
				},
				goodList: [
					'全部分类下的商品列表',
					'奶粉分类下的商品列表',
					'面膜分类下的商品列表',
					'咖啡分类下的商品列表',
					'衣服分类下的商品列表'
				],
				curGoodsList: '',
				goodList: [],

			}
		},
		props: {
			tabs: {
				type: Array,
				default () {
					return []
				}
			},
			index: Number,
			tabIndex: {
				type: Number,
				default: 0
			},
		},
		methods: {
			upCallback(page) {
				console.log("当前分类的index值为", this.index)
				// this.curGoodsList = this.goodList[this.index]
				let catname = this.tabs[this.index].name
				apiSearch(page.num, page.size, catname).then(curPageData => {
					console.log(curPageData)
					if (page.num == 1) this.goodList = []
					this.goodList = this.goodList.concat(curPageData)
					this.mescroll.endSuccess(curPageData.length)
				}).catch(() => {
					this.mescroll.endErr()
				})
				console.log('当前分类的i值为',catname)


			},
			emptyClick() {
				uni.showModal({
					title: '自己去实现',
					icon: "none"
				})
			}
		},
		components: {
			goodList
		}
	}
</script>

<style>
</style>
