<template>
	<view class="container">
		<!-- 领优惠券按钮 -->
		<image src="../../static/userbtn1.png" mode="widthFix" class="bookBtn" @click="show = true;"></image>
		<!-- 弹出层 -->
		<u-popup mode="center" v-model="show" class="popup">
			<view class="content">

				<image src="../../static/userpopbtn.png" mode="widthFix" class="useCard" @click="useCard"></image>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			//跳转到预约界面
			useCard(){
				uni.navigateTo({
					url:"../userPage/userPage"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		width: 750rpx;
		height: 2990rpx;
		background: url(../../static/userbanner1.png) no-repeat;
		background-size: 100%;

		.bookBtn {
			position: absolute;
			width: 582rpx;
			height: 230rpx;
			bottom: 20rpx;
			left: 50%;
			transform: translateX(-50%);
		}

		// 弹出层
		.popup {

			.content {
				position: relative;
				background: url(../../static/userpop.png) no-repeat;
				background-size: 100%;
				width: 640rpx;
				height: 844rpx;

				.useCard {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					bottom: 65rpx;
					width: 338rpx;
					height: 98rpx;
				}
			}
		}
	}
</style>
