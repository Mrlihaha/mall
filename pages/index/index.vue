<template>
	<!-- 轮播图 -->
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in appData.swipers" :key="index">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<view class="nav">
			<view class="nav-item" v-for="item in appData.navs" :key="item.text" @click="navItemClick(item.path)">
				<view :class="item.style"></view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 推荐 -->
		<view class="hot">
			<view class="tit">
				推荐商品
			</view>
			<!-- 商品 -->
			<goodlist></goodlist>
		</view>
		<view class="dixian" v-if="bott">------我是有底线的------</view>
	</view>
</template>

<script>
	import goodlist from "../../components/good-list/index.vue"
	export default {
		data() {
			return {
				bott:false,
				appData:this.$store.state.appData
			}
		},
		methods: {
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			}
		},
		components: {
			goodlist
		},
		onReachBottom() {
			this.bott = true;
			console.log("----我是有底线的-----")
		},
		onPullDownRefresh() {
			console.log("下拉刷新了")
			setTimeout(() => {
			 uni.stopPullDownRefresh()
			},500)
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
			a {
				width: 750rpx;
				height: 380rpx;
			}
		}
	}

	.nav {
		display: flex;

		.nav-item {
			width: 25%;
			text-align: center;

			view {
				width: 120rpx;
				height: 120rpx;
				background: $app-color;
				border-radius: 50%;
				margin: 10rpx auto;
				line-height: 120rpx;
				color: $uni-bg-color;
				font-size: 50rpx;
			}

			text {
				font-size: 30rpx;
			}
		}
	}

	.hot {
		background: $uni-border-color;
		overflow: hidden;
		margin-top: 10rpx;

		.tit {
			height: 100rpx;
			line-height: 100rpx;
			color: $uni-color-primary;
			background: $uni-bg-color;
			font-weight: 1000;
			text-align: center;
			letter-spacing: 20px;
			font-size: 35rpx;
			margin: 10rpx 0;
		}
	}
	.dixian {
		text-align: center;
	}
</style>
