<template>
	<view class="prics">
			<scroll-view class="left" scroll-y>
				<view :class="{active:active === index}" 
				 @click="getindex(index)"
				v-for="(item,index) in appData.communityLeft" 
				:key = "item">{{item}}</view>
			</scroll-view>
			<scroll-view class="right" scroll-y>
				<view class="item" 
				v-for="(item ,index) in appData.communityRight[active]" :key="index">
					<image :src="item.img"></image>
					<text>{{item.text}}</text>
				</view>
			</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				appData:this.$store.state.appData,
				active:0
			}
		},
		methods: {
			getindex (index) {
				this.active = index
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.prics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active {
				background: $app-color;
				color: #f40;
			}
		}
		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			image {
				width: 530rpx;
				height: 530rpx;
				border-radius: 5%;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
</style>
