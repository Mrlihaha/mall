<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view @click="phone()">联系电话: (0552)3172886 (点击拨打)</view>
			<view>联系地址:安徽省蚌埠市龙子湖区曹山路1000号</view>
		</view>
		<map :latitude="latitude" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"latitude":32.897165,
				"longitude":117.423274,
				"markers": [{
					"latitude":32.897165,
					"longitude":117.423274,
					"scale":20,
					"iconPath":"https://dss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/91ef76c6a7efce1b9edd7530ad51f3deb58f6551.jpg",
					"width":30,
					"height":30
				}]
			}
		},
		methods: {
			phone () {
				uni.makePhoneCall({
					phoneNumber:'0552-3172886'
				})
			}
		}
	}
</script>

<style lang="scss">
  .contact {
		.img {
			width: 750rpx;
			height: 320rpx;
		}
		.info {
			padding: 30rpx 20rpx;
			view {
				font-size: 35rpx;
				line-height: 60rpx;
				border-bottom: 1px solid #eee;
			}
		}
		map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
