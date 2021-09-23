<template>
	<view class="container">
		<!-- 医生推荐信息 -->
		<view class="form">
			<view class="message1 message">
				您好，<span class="light">刘能</span>医生
			</view>
			<view class="message2 message">
				已推荐<span class="light" style="vertical-align: bottom;">62</span>人
			</view>
			<image src="../../static/doctorqrbtn.png" mode="widthFix" class="qrbtn"></image>
			<image src="../../static/doctoruserlistbtn.png" mode="widthFix" class="userlistbtn"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		width: 750rpx;
		height: 1334rpx;
		background: url(../../static/doctorbanner2.png) no-repeat;
		background-size: 100%;


		// 提示语
		.message {

			font-size: 34rpx;
			line-height: 24rpx;
			letter-spacing: 1rpx;
			line-height: auto;

			.light {

				color: #0177fe;
				font-size: 52rpx;
				margin-right: 25rpx;
			}
		}

		.message1 {
			margin: 41rpx 0 0 49rpx;
		}

		.message2 {
			margin: 50rpx 0 0 49rpx;
		}

		// 医生推荐信息
		.form {
			position: absolute;
			width: 653rpx;
			height: 665rpx;
			background-color: #ffffff;
			border-radius: 30rpx;
			bottom: 109rpx;
			left: 49rpx;
			// 按钮
			.qrbtn{
				
			}
			.userlistbtn{
				
			}
		}
	}
</style>
