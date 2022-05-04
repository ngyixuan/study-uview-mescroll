<template>

	<view class="">
		<view class="u-m-t-30">
			<view v-for="(item,index) in recCateList" :key="index">
				<view class="d-flex j-sb px-20" style="height: 375rpx;width: 100%;background-color: #188F80;">
					<view class="white-color d-flex flex-columnt">
						<text class="u-font-26 u-p-b-10 u-p-t-20"
							style="border-bottom: 3rpx solid #FFFFFF;">{{item.cateDesc}}</text>
						<text class="u-font-36 font-weight u-m-t-20">{{item.cateName}}</text>
					</view>
					<view class="d-flex j-center  white-color">
						<image class="img-160 u-m-t-30" :src="item.cateThumb" mode="aspectFit"></image>
					</view>
				</view>

				<view class="bg-white-colorf shadow u-border-radius d-flex u-flex-wrap j-sa"
					style="width: 710rpx; height: 350rpx;margin: -175rpx auto 30rpx;">
					<view v-for="(item,index) in item.secondCate" :key="index">
						<view class="" v-if="index%2==0" class="h-100 d-flex flex-columnt j-sb y-20 a-center"
							style="flex: 1;border-right: 1rpx solid #cccccc;">
							<text class="u-font-26 font-weight u-m-t-20 u-p-b-10"
								style="border-bottom: 2rpx solid #1BBF80;">{{item.cateName}}</text>
							<image :src="item.cateThumb" class="img-160 "
								mode="">
							</image>

						</view>
						<view class="" v-else="index%3==0?'':'border-right:1rpx solid #cccccc'"
							class="h-100 d-flex flex-columnt j-sb y-20 a-center"
							style="flex: 1;border-right: 1rpx solid #cccccc;">
							<image :src="item.cateThumb"class="img-160 "
								mode="">
							</image>
							<text class="u-font-26 font-weight u-m-t-20 u-p-b-10"
								:class="[index==3?'borderB':'']">{{item.cateName}}</text>
						</view>

					</view>

				</view>

				<view class="px-20 d-flex j-sb u-flex-wrap">

					<view v-for="(item,index) in item.cateGoodsList" :key="index" class="shadow u-m-b-30" style="width: 345rpx;">
						<image class="img-345"
							:src="item.goodsThumb"
							mode="">
						</image>
						<view class="px-10">
							<view class="u-line-1 u-font-28 font-weight black-color my-10">{{item.goodsName}}</view>
							<view class="u-line-1 u-font-24 font-weight gray-color">{{item.goodsDecs}}</view>
						</view>
						<view class="d-flex j-sb px-20 u-m-t-5">
							<view class="d-flex a-end">
								<view class="main-color u-m-r-15">
									<text class="font-weight u-font-26">$</text>
									<text class="font-weight u-font-26">{{item.pPrice}}</text>

								</view>
								<view class="line-throught gray-color u-font-26">
									{{item.oPrice}}
								</view>

							</view>
							<u-icon name="shopping-cart" color="#1bbf80" size="36"></u-icon>

						</view>
					</view>

				</view>

			</view>

		</view>
		<!-- <view class="bg-white-colorf shadow u-border-radius d-flex u-flex-wrap" style="width: 710rpx; height: 350rpx;margin: -175rpx auto 30rpx;">
				<view v-for="(item,index) in 4" >
					<view :class="[index%2===0?'cateRight':'', (index==0||index==1)?'cateBottom':'']" class="d-flex j-sb" style="width: 355rpx;height: 175rpx;">
						<view class="main-color u-m-t-20 u-m-l-20">
							<text  class="u-p-b-10" style="border-bottom: 2rpx solid #1BBF80;">安卓应用开发</text>
						</view>
						<image src="../../static/Lovepik_com-401773459-rhino-modeling-phone.png" class="img-160 a-self-end" mode=""></image>
					</view>
					
				</view>
			</view> -->

	</view>
</template>

<script>
	export default {
		props: {
			recCateList: {
				default: ()=>{return[]}
			}
		}
	}
</script>

<style>
</style>
