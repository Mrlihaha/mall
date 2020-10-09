<template>
	<view class="goods">
	<view class="goods-item" @click="to(index)" v-for="(item, index) in appData.hots" :key="index">
		<image :src="item.image"></image>
		<view class="price">
			<text>{{item.price.one}}</text>
			<text>{{item.price.two}}</text>
		</view>
		<view class="name">{{item.text}}</view>
	</view>
	</view>
</template>

<script>
	import appData from "../../indexData.js"
	export default {
		data () {
			return {
				appData
			}
		},
		methods:{
			to (id) {
				uni.navigateTo({
					url:'/pages/details/details?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods-item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			box-sizing: border-box;
		
			image {
				width: 100%;
				height: 150px;
				display: block;
				margin: auto;
			}
		
			.price {
				color: $app-color;
				font-size: 36rpx;
		
				text {
					color: $uni-color-error;
				}
		
				text:nth-child(2) {
					margin-left: 17rpx;
					color: $uni-text-color-grey;
					text-decoration: line-through;
				}
			}
		
			.name {
				font-size: 32rpx;
				line-height: 38rpx;
				padding-top: 10rpx;
				padding-bottom: 15rpx;
			}
		}
	}
</style>
