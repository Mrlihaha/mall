<template>
	<view class="news">
		<view class="news-item" v-for="item in newsData" :key="item.image">
			<image :src="item.img" mode=""></image>
			<view class="right">
			<view class="tit">{{item.text}}</view>
			<view class="info">
				<text>发表时间:{{item.time}}</text>
				<text>浏览:{{item.num}}</text>
			</view>
	  </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsData:this.$store.state.appData.news
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.news {
		.news-item {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $app-color;
			image {
				width:200rpx;
				height:150rpx;
				min-width: 200rpx;
				min-height: 200rpx;
			}
			.right {
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.tit {
					font-size: 33rpx;
					margin-top: 30rpx;
				}
				.info {
					margin-bottom: 20rpx;
					font-size: 24rpx;
					text:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}
			
		}
	}
</style>
