<template>
	<view class="container">
		<!-- 表单 -->
		<view class="form">
			<u-form :model="form" ref="uForm">
				<u-form-item label="护士手机号码:" class="uitem" label-width="auto" :border-bottom="false"
					:label-style="{'font-size':'24rpx','font-family':'Alibaba PuHuiTi','font-weight': 400,'color': '#808080'}">
					<u-input v-model="form.nurseTel" class="uinput" placeholder="请输入" :autoHeight="false" />
				</u-form-item>
			</u-form>
			<!-- 提交按钮 -->
			<image src="https://www.xiaohulaile.com/wxcx/benimg/nursebtn1.png" mode="widthFix" class="submitBtn" @click="submit1"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 表单数据
				form: {
					nurseTel: ""
				}
			}
		},
		methods: {
			submit1() {
				uni.navigateTo({
					url:"../nursePage2/nursePage2"
				})
			
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		position: relative;
		background: url(https://www.xiaohulaile.com/wxcx/benimg/banner2.png) no-repeat;
		background-size: 100%;
		width: 750rpx;
		height: 1334rpx;

		// 表单区域
		.form {
			width: 653rpx;
			height: 294rpx;
			background-color: #ffffff;
			border-radius: 30rpx;
			position: absolute;
			bottom: 330rpx;
			left: 50%;
			transform: translateX(-50%);
			// 输入框样式

			.uitem {
				border: 2rpx solid #009AFF;
				border-radius: 12rpx;
				width: 562rpx;
				// height: 87rpx;
				margin: 74rpx 0 0 49rpx;
				padding: unset;
				padding-left: 22rpx;
			}

			// 提交按钮
			.submitBtn {
				left: 50%;
				transform: translateX(-50%);
				width: 582rpx;
				height: 230rpx;
				position: absolute;
				bottom: -120rpx;
			}


		}


	}
</style>
