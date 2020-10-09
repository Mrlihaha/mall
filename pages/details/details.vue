<template>
	<view class="details">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in details[DataID].imgs" :key= "item">
				<image :src="item"></image>
			</swiper-item>
		</swiper>
		<view class="price">
			<text>{{details[DataID].price.one}}</text>
			<text>{{details[DataID].price.two}}</text>
		</view>
		<text class="name">{{details[DataID].text}}</text>
		<view class="text">
			<view class="huohao">货号:{{details[DataID].huohao}}</view>
			<view class="kucun">库存:{{details[DataID].kucun}}</view>
		</view>
		<view class="gengduo">更多详情</view>
		<view class="imgDetails">
			<image v-for="item in details[DataID].imgDetails"
			:src="item" :key="item"></image>
		</view>
		<uniGoodsNav class="GoodsNav" @click = "GoodClick" @buttonClick="buttonClick"></uniGoodsNav>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				details:this.$store.state.appData.hots,
				DataID:''
			}
		},
		methods: {
			 GoodClick (e) {
				 if (e.index === 1) {
					 uni.switchTab({
					 	"url":"/pages/cart/cart"
					 })
				 }
			 },
				 
			 buttonClick (e) {
				 if (e.index === 0) {
					  return
				 }
			 }
		},
		components: {uniGoodsNav},
		onLoad (option) {
			this.DataID = option.id
			console.log('商品id为:',option.id)
		}
	}
</script>

<style lang="scss">
	.details {
		.GoodsNav {
			width: 750rpx;
			position: fixed;
			bottom:0;
			z-index: 10;
		}
		swiper {
			height: 750rpx;
			width: 750rpx;
			image {
				width: 100%;
				height: 100%;
			}
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
			font-weight: 800;
			padding: 50rpx;
		}
		.text {
			background: $uni-border-color;
		  .huohao {
				margin-top: 20rpx;
				background: #fff;
				text-indent: 1em;
			}
			.kucun {
				background: #fff;
				text-indent: 1em;
			}
		}
	 .imgDetails {
		 display: block;
		 image {
			 display: block;
			 width: 100%;
		 }
		 image:nth-child(1) {
			 height: 320rpx;
		 }
		 image:nth-child(2) {
		 			 height: 1200rpx;
		 }
		 image:nth-child(3) {
		 			 height:1200rpx;
		 }
	 }
	 .gengduo {
		 text-align: center;
		 line-height: 50rpx;
		 margin-top: 10rpx;
		 margin-bottom: 30rpx;
		 font-size: 35rpx;
	 }
	}

</style>
